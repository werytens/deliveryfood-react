import React from "react";
import cl from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo from "../../../img/icon/logo.svg";
import facebookLogo from "../../../img/social/fb.svg";
import instagramLogo from "../../../img/social/instagram.svg";
import vkontakteLogo from "../../../img/social/vk.svg";

const Footer = () => {
  return (
    <div className={cl.main}>
      <div className={cl.left__section}>
        <div className={cl.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={cl.media__links}>
          <Link className={cl.media__item} to="/">
            Ресторанам
          </Link>
          <Link className={cl.media__item} to="/">
            Курьерам
          </Link>
          <Link className={cl.media__item} to="/">
            Пресс-центр
          </Link>
          <Link className={cl.media__item} to="/">
            Контакты
          </Link>
        </div>
      </div>
      <div className={cl.socialmedia}>
        <Link className={cl.social__item} to="/">
          <img src={facebookLogo} alt="logo" />
        </Link>
        <Link className={cl.social__item} to="/">
          <img src={instagramLogo} alt="logo" />
        </Link>
        <Link className={cl.social__item} to="/">
          <img src={vkontakteLogo} alt="logo" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
