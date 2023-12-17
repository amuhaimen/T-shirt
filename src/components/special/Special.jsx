import React, { useContext } from "react";
import { RingContext } from "../grandpa/GrandPa";

const Special = () => {
  const ring = useContext(RingContext);
  return (
    <div>
      <h2>Special</h2>
      <h3>{ring}</h3>
    </div>
  );
};

export default Special;
