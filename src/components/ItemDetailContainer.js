import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail/ItemDetail";
import ItemCount from "./ItemCount/ItemCount.js";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    const itemRef = doc(db, "items", id);
    getDoc(itemRef).then((snapshot) => {
      if (snapshot.exists()) {
        setItem([{ id: snapshot.id, ...snapshot.data() }]);
      }
    });
  }, [id]);

  return (
    <div className="itemDetailContainer">
      {item.map((item) => {
        return (
          <div className="itemDetailContainer2" key={item.id}>
            <ItemDetail itemDet={item} />
            <ItemCount itemDet={item} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetailContainer;
