import React, { useState } from "react";
import cl from "./Navbar.module.css";
import logo from "../../../img/icon/logo.svg";
import SearchInput from "../SearchInput/SearchInput";
import LoginButton from "../LoginButton/LoginButton";
import LoginModal from "../LoginModal/LoginModal";
import BasketButton from "../BasketButton/BasketButton";
import BasketModal from "../BasketModal/BasketModal";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [visibleLModal, setLModalVisible] = useState(false);
  const [visibleBModal, setBModalVisible] = useState(false);
  const isLogin = JSON.parse(localStorage.getItem("deliveryfood"));

  const goLoginModal = () => {
    if (visibleLModal) {
      setLModalVisible(false);
      return;
    }
    setLModalVisible(true);
  };

  const goBasketModal = () => {
    if (visibleBModal) {
      setBModalVisible(false);
      return;
    }
    setBModalVisible(true);
  };

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className={cl.navbar}>
      <LoginModal visible={visibleLModal} setVisible={setLModalVisible} />
      <BasketModal visible={visibleBModal} setVisible={setBModalVisible} />

      <div className={cl.logo}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className={cl.searchinput}>
        {/* <SearchInput text="Адрес доставки" disabled /> */}
      </div>
      <div className={cl.joinbutton}>
        {!isLogin ? (
          <LoginButton callback={goLoginModal}>Войти</LoginButton>
        ) : (
          <div className={cl.log__section}>
            <p className={cl.username}>{isLogin.user}</p>
            <BasketButton className={cl.basket} callback={goBasketModal}>
              Корзина
            </BasketButton>
            <LoginButton className={cl.exit__button} callback={logout}>
              Выйти
            </LoginButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
