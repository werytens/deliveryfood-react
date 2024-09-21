import React from "react";
import cl from "./JoinButton.module.css";

const JoinButton = ({ callback }) => {
  return (
    <button className={cl.button} onClick={callback}>
      Войти
    </button>
  );
};

export default JoinButton;
