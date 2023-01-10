import "./ItemDetail.css";
const ItemDetail = ({ itemDet }) => {
  return (
    <div>
      <img className="itemDetailImage" src={itemDet.image} alt={itemDet.title} />
      <div>{itemDet.title}</div>
      <div>Precio: $ {itemDet.price}</div>
      <div>Descripcion: {itemDet.description}</div>
      <div>Stock: {itemDet.stock}</div>
    </div>
  );
};

export default ItemDetail;
