const Item = ({ props }) => {
  return (
    <>
      <img className="itemImage" src={props.image} alt={props.title} />
      <div>{props.title}</div>
      <div>Precio: $ {props.price}</div>
    </>
  );
};

export default Item;
