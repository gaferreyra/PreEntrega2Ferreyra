import "./CartDetail.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDetail = ({ itemDet }) => {
  const { removeItem } = useContext(CartContext);

  const buttonRemoveHandler = () => {
    removeItem(itemDet.id);
  };
  return (
    <>
      <div className="cartDetail">{itemDet.title}</div>
      <div>Precio: $ {itemDet.price}</div>
      <div>Cantidad: {itemDet.qty}</div>
      <button onClick={buttonRemoveHandler}>Borrar</button>
    </>
  );
};

export default CartDetail;
