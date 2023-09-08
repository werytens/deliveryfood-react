import React from "react";
import cl from '../styles/FoodItem.module.css'


const FoodItem = ({ data, callback }) => {
    console.log(data)

    return (
        <div className={cl.main} onClick={() => callback(data)}>
            <div className={cl.banner}>
                <img className={cl.banner__image} alt="logo" src={data.image} />
            </div>
            <div className={cl.title__section}>
                <div className={cl.title__text}>
                    {data.name}
                </div>
                <div className={cl.title__time}>
                    {data.time_of_delivery} мин
                </div>
            </div>
            <div className={cl.desription__section}>
                <div className={cl.description__rate}>
                    {data.stars}
                </div>
                <div className={cl.description__pricetype}>
                    От {data.price} ₽ • {data.kitchen}
                </div>
            </div>
        </div>
    )
}

export default FoodItem;