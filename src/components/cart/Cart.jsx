import React from "react";
import "./cart.css";

const Cart = ({ cart, handleRemoveFromCart }) => {
  return (
    <div className="cart">
      <h2 className={cart.length < 3 ? "red" : "orange"}>
        Order Summery:{cart.length}{" "}
      </h2>
      {cart.length > 2 || <h3>you are not eligable for this offer</h3>}

      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
