import React from "react";
import cl from "./LoginErrorModal.module.css";

const LoginErrorModal = ({ visible, text }) => {
  return (
    <div className={visible ? [cl.modal, cl.active].join(" ") : cl.modal}>
      {text}
    </div>
  );
};

export default LoginErrorModal;
