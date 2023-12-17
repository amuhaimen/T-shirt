import React, { useContext } from "react";
import Special from "../special/Special";
import { RingContext } from "../grandpa/GrandPa";

const Myself = ({ ring }) => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>My Self</h2>
      <p>{angti}</p>
      <Special ring={ring} />
    </div>
  );
};

export default Myself;
