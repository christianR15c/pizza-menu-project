import React from "react";
import { pizzaData } from "../data";

const Pizza = () => {
  return (
    <div>
      {pizzaData.map((pizza) => (
        <div key={pizza.id}>
          <img src={pizza.photoName} alt={pizza.name} />
          <h2>{pizza.name}</h2>
          <p>{pizza.ingredients}</p>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
