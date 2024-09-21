import React from "react";
import cl from "./Header.module.css";

const Header = () => {
  return (
    <div className={cl.header}>
      <div className={cl.main__header__text}>
        Онлайн-сервис доставки еды на дом
      </div>
      <div className={cl.main__header__description}>
        Блюда из любимого ресторана привезет курьер в перчатках, маске и с
        антисептиком
      </div>
    </div>
  );
};

export default Header;
