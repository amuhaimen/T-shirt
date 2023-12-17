import React, { useState } from "react";
import Father from "../father/Father";
import Uncle from "../uncle/Uncle";
import Aunty from "../aunty/Aunty";
import "./grandpa.css";
import { createContext } from "react";

export const RingContext = createContext();
export const MoneyContext = createContext(0);

const GrandPa = () => {
  const ring = "diamond ring";
  const [money, setMoney] = useState(0);
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Amount:{money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="golden ring">
          <section className="flex">
            <Father ring={ring} />
            <Uncle />
            <Aunty />
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default GrandPa;
