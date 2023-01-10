import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartDetail from "../CartDetail/CartDetail";
import ContactForm from "../BuyerForm/BuyerForm";
import "../CartDetailContainer/CartDetailContainer.css";

const CartDetailContainer = () => {
  const { cart, clear, sumItemsCart } = useContext(CartContext);

  const buttonClearHandler = () => {
    clear();
  };

  return (
    <div className="cartDetailContainer">
      {cart.map((item) => {
        return (
          <div className="cartDetailContainer1" key={item.id}>
            <CartDetail itemDet={item} />
          </div>
        );
      })}
      <div>Monto total de la compra: {sumItemsCart()}</div>
      <button onClick={buttonClearHandler}>Limpiar carrito</button>
      <ContactForm itemDet={cart} />
    </div>
  );
};

export default CartDetailContainer;
