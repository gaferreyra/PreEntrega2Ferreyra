import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import itemsListJson from "../itemsList2.json";

/*
FUNCIONALIDAD ADICIONAL PARA AGREGAR ITEMS EN LA COLECCION ITEMS EN FIRESTORE
A PARTIR DE UN ARCHIVO .JSON
SOLO PUEDE SER HABILITADA POR EL ADMIN Y NO ESTA DISPONIBLE EN LA PAGINA
PARA USARIOS COMUNES
*/

const AgregarItems = () => {
  const [list, setList] = useState([]);

  const submitHandler = () => {
    setList(itemsListJson);
    const db = getFirestore();
    const formsCollection = collection(db, "items");
    list.map((item) => {
      addDoc(formsCollection, { ...item });
      return item;
    });
  };

  return (
    <div>
      <button onClick={submitHandler}>Agregar</button>
    </div>
  );
};

export default AgregarItems;
