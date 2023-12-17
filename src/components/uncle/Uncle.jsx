import React, { useContext } from "react";
import Cousin from "../cousin/Cousin";
import { MoneyContext } from "../grandpa/GrandPa";

const Uncle = () => {
  const [money, setMoney] = useContext(MoneyContext);
  return (
    <div>
      <h2>Uncle</h2>
      <p>{money}</p>
      <section className="flex">
        <Cousin title="nabil" />
        <Cousin title="adil" />
        <button onClick={() => setMoney(money + 1000)}>send 1000</button>
      </section>
    </div>
  );
};

export default Uncle;
