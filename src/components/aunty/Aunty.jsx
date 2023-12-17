import React, { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { RingContext } from "../grandpa/GrandPa";

const Aunty = () => {
  const angti = useContext(RingContext);
  return (
    <div>
      <h2>Aunty</h2>
      <section className="flex">
        <Cousin title="sumaiya" />
        <Cousin title="gumaiya" />
        <p>{angti}</p>
      </section>
    </div>
  );
};

export default Aunty;
