import React from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import logoeco from "../CartWidget/logoeco.png";

const NavBar = () => {
  return (
    <div className="navBarContainer">
      <nav className="navBar">
        <Link to={`/`}>
          <img className="logoeco" src={logoeco} alt="logoeco" />
        </Link>

        <div className="barList">
          <Link to={`/`}>Home</Link>
          {/*<Link to={`/agregar`}>Agregar</Link> opcion para usar solo en desarrollo*/}
          <div>
            Categorias:
            <Link to={`/category/remera`}>Remeras</Link>
            <Link to={`/category/pantalon`}>Pantalones</Link>
            <Link to={`/category/TODAS`}>Todas</Link>
          </div>
        </div>

        <Link to={`/cart`}>
          <CartWidget />
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
