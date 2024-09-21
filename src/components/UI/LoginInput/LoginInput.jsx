import React from "react";
import cl from "./LoginInput.module.css";

const LoginInput = ({ children, callback, type }) => {
  return (
    <input
      className={cl.input}
      type={type}
      placeholder={children}
      onChange={callback}
    />
  );
};

export default LoginInput;
