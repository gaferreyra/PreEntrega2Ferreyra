import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList/ItemList";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = ({ props }) => {
  const { categoryId = "TODAS" } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");
    const q = categoryId === "TODAS" ? itemsCollection : query(itemsCollection, where("categoryId", "==", categoryId));
    getDocs(q).then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(items);
    });
  }, [categoryId]);

  return (
    <div>
      <div>{props}</div>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
