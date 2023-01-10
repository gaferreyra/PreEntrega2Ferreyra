import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const AddCart = ({ itemDet2 }) => {
  const { addItem } = useContext(CartContext);

  return (
    <div>
      <button onClick={() => addItem(itemDet2)}>Agregar al carrito </button>
    </div>
  );
};

export default AddCart;
