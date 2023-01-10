import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const BuyerForm = () => {
  const { cart, clear, sumItemsCart } = useContext(CartContext);
  const [id, setId] = useState();

  const [form, setForm] = useState({
    name: "",
    tel: "",
    email: "",
  });

  const submitHandler = (ev) => {
    sumItemsCart() === 0 ? alert("No hay items en el carrito") : ev.preventDefault();

    const db = getFirestore();
    const formsCollection = collection(db, "orders");

    addDoc(formsCollection, {
      buyer: form,
      items: [...cart],
      total: sumItemsCart(),
      date: Date().toLocaleString(),
    }).then((snapshot) => {
      setForm({
        name: "",
        tel: "",
        email: "",
      });
      clear();
      setId(snapshot.id);
    });
  };

  const changeHandler = (ev) => {
    const { value, name } = ev.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      {typeof id !== "undefined" ? (
        <div>
          <p>Su compra se realizo correctamente</p>
          <p>Numero de orden: {id}</p>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="name">Nombre</label>
            <input name="name" id="name" required value={form.name} onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="tel">Telefono</label>
            <input type="tel" name="tel" id="tel" required value={form.tel} onChange={changeHandler} />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" required value={form.email} onChange={changeHandler} />
          </div>
          <button>Finalizar compra</button>
        </form>
      )}
    </div>
  );
};

export default BuyerForm;
