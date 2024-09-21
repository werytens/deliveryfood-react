import React, { useState } from "react";
import cl from "./BasketProduct.module.css";

const BasketProduct = ({ props, callbacks }) => {
  const [count, setCount] = useState(props[1]);
  const [isRemoved, setIsRemoved] = useState(false);
  const storage = JSON.parse(localStorage.getItem("deliveryfood"));

  const addOne = () => {
    storage.basket += `${props[0].id}:`;

    localStorage.setItem("deliveryfood", JSON.stringify(storage));

    setCount(count + 1);

    callbacks[0](props[0]);
  };

  const removeOne = () => {
    if (storage.basket.includes(`${props[0].id}:`)) {
      storage.basket = storage.basket.replace(`${props[0].id}:`, "");
      setCount(count - 1);
      callbacks[1](props[0]);
    }

    localStorage.setItem("deliveryfood", JSON.stringify(storage));
  };

  const removeItem = () => {
    callbacks[2](props[0]);

    while (storage.basket.includes(`${props[0].id}:`)) {
      storage.basket = storage.basket.replace(`${props[0].id}:`, "");
    }

    localStorage.setItem("deliveryfood", JSON.stringify(storage));

    setIsRemoved(true);
  };

  return isRemoved ? null : (
    <div className={cl.main}>
      <div className={cl.left__side}>{props[0].name}</div>

      <div className={cl.right__side}>
        <div className={cl.actions}>
          <button className={cl.button} onClick={addOne}>
            +
          </button>
          <div>{count}</div>
          <button className={cl.button} onClick={removeOne}>
            -
          </button>
          <button className={cl.button} onClick={removeItem}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketProduct;
