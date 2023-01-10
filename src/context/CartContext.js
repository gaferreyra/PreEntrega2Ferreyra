import React, { useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    isInCart(item) ? alert("El item ya esta en el Carrito") : setCart((obj) => [...obj, item]);
  };

  const removeItem = (idRemove) => {
    setCart(cart.filter((obj) => obj.id !== idRemove));
  };

  const clear = () => {
    setCart([]);
  };

  const isInCart = (item) => {
    return cart.some((obj) => obj.id === item.id);
  };

  const cantItemsCart = () => {
    return cart.reduce((total, item) => {
      return (total += item.qty);
    }, 0);
  };

  const sumItemsCart = () => {
    return cart.reduce((total, item) => {
      return (total += item.price * item.qty);
    }, 0);
  };

  return (
    <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear, isInCart, cantItemsCart, sumItemsCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
