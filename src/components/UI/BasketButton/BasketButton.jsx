import React from "react";
import cl from "./BasketButton.module.css";

const BasketButton = ({ children, callback }) => {
  return (
    <button className={cl.button} onClick={callback}>
      {children}
    </button>
  );
};

export default BasketButton;
