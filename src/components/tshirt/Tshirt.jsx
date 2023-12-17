import React from "react";
import "./tshirt.css";

const Tshirt = ({ tshirt, handleAddToCart }) => {
  const { _id, name, picture, price, gender } = tshirt;

  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>price:${price}</p>
      <button onClick={() => handleAddToCart(tshirt)}>Buy Now</button>
    </div>
  );
};

export default Tshirt;
