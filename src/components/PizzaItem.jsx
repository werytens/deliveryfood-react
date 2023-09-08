import React from "react";
import cl from '../styles/PizzaItem.module.css'
import BasketButton from "./UI/BasketButton/BasketButton";

const PizzaItem = ({ data }) => {
    const addToBasket = () => {
        const loginData = JSON.parse(localStorage.getItem("deliveryfood"))
        if (loginData !== null) {
            loginData["basket"] += data.id + ":"
            localStorage.setItem("deliveryfood", JSON.stringify(loginData))

            window.location.reload()
        }
    }

    return (
        <div className={cl.main}>
            <div>
                <img className={cl.banner__image} src={'../' + data.image} alt="pizzaphoto" />
            </div>
            <div className={cl.text__section}>
                <div className={cl.naming}>
                    <div className={cl.name}>
                        {data.name}
                    </div>
                    <div className={cl.description}>
                        {data.description}
                    </div>
                </div>
                <div className={cl.footer}>
                    <BasketButton callback={addToBasket}>В корзину</BasketButton>
                    <div className={cl.price}>
                        {data.price} ₽
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PizzaItem;