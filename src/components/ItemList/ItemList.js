import { Link } from "react-router-dom";
import Item from "../Item/Item.js";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <ul className="itemListUl">
      {items.map((item) => {
        return (
          <li className="itemList" key={item.id}>
            <Item props={item} />
            <button>
              <Link to={`/item/${item.id}`}>Ver detalle</Link>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
