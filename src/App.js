import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext.js";
import CartDetailContainer from "./components/CartDetailContainer/CartDetailContainer.js";
import AgregarItems from "./components/AgregarItems";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path="/" element={<ItemListContainer props={"Hola bienvenidos a e-Commercify"} />} />
              <Route exact path="/category/:categoryId" element={<ItemListContainer />} />
              <Route exact path="/item/:id" element={<ItemDetailContainer />} />
              <Route exact path="/cart" element={<CartDetailContainer />} />
              <Route exact path="/agregar" element={<AgregarItems />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </header>
    </div>
  );
}

export default App;
