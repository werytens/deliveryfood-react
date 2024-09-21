import React, { useState } from "react";
import cl from "./LoginModal.module.css";
import LoginInput from "../LoginInput/LoginInput";
import JoinButton from "../JoinButton/JoinButton";
import LoginErrorModal from "../LoginErrorModal/LoginErrorModal";
import db from "../../../db/db.json";

const LoginModal = ({ visible, setVisible }) => {
  const [loginInfo, setLoginInfo] = useState(["", ""]);
  const [errorText, setErrorText] = useState("");
  const [errorVisible, setErrorVisible] = useState(false);

  const loginInfoAdd = (e) => {
    if (e.target.type === "text") {
      setLoginInfo([e.target.value, loginInfo[1]]);
    }

    if (e.target.type === "password") {
      setLoginInfo([loginInfo[0], e.target.value]);
    }
  };

  const loginFunction = (e) => {
    e.preventDefault();
    const usersObject = db.db.users[0];

    if (
      loginInfo[0] === "" ||
      usersObject[loginInfo[0]] === undefined ||
      usersObject[loginInfo[0]]["password"] !== loginInfo[1]
    ) {
      let text = "";

      if (loginInfo[0] === "") {
        text = "Вы не ввели имя пользователя!";
      }

      if (usersObject[loginInfo[0]] === undefined) {
        text = "Такого пользователя не существует!";
      } else {
        if (usersObject[loginInfo[0]]["password"] !== loginInfo[1]) {
          text = "Пароль неправильный!";
        }
      }

      setErrorText(text);
      setErrorVisible(true);
      setTimeout(() => {
        setErrorVisible(false);
      }, 2000);
    } else {
      localStorage.setItem(
        "deliveryfood",
        JSON.stringify({
          user: loginInfo[0],
          basket: "",
        })
      );

      window.location.reload();
    }
  };

  return (
    <div
      className={visible ? [cl.modal, cl.active].join(" ") : cl.modal}
      onClick={() => {
        setVisible(false);
      }}
    >
      <LoginErrorModal visible={errorVisible} text={errorText} />
      <div className={cl.modal__inner} onClick={(e) => e.stopPropagation()}>
        <h3>Авторизация</h3>
        <form action="">
          <div className={cl.inputs}>
            <LoginInput type={"text"} callback={loginInfoAdd}>
              Введите имя пользователя
            </LoginInput>
            <LoginInput type={"password"} callback={loginInfoAdd}>
              Введите пароль
            </LoginInput>
          </div>
          <div className={cl.buttons}>
            <JoinButton callback={loginFunction} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
