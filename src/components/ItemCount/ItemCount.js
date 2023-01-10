import { useState } from "react";
import AddCart from "../AddCart/AddCart.js";

const ItemCount = ({ itemDet }) => {
  const [contador, setContador] = useState(1);

  const botonClickContadorsum = () => {
    setContador(contador < itemDet.stock ? contador + 1 : itemDet.stock);
  };

  const botonClickContadorres = () => {
    setContador(contador <= 1 ? 1 : contador - 1);
  };

  return (
    <div>
      {itemDet.stock === 0 ? (
        <div>Agotado</div>
      ) : (
        <div>
          <button onClick={botonClickContadorres}>-</button>
          <button onClick={botonClickContadorsum}>+</button>
          <div>{contador}</div>
          <AddCart itemDet2={{ ...itemDet, qty: contador }} />
        </div>
      )}
    </div>
  );
};

export default ItemCount;
