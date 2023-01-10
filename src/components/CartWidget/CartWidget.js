import "./cart.css";
import cart from "./cart.png";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cantItemsCart } = useContext(CartContext);
  const total = cantItemsCart();

  return total === 0 ? (
    <div></div>
  ) : (
    <div className="cart">
      <img className="cartImg" src={cart} alt="carrito" />
      {total}
    </div>
  );
};

export default CartWidget;
