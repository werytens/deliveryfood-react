import React from "react";
import PizzaItem from "./PizzaItem";
import cl from '../styles/PizzasList.module.css'


const PizzasList = ({data}) => {
    return (
        <div>   
            <div className={cl.description}>
                <div className={cl.title} >
                    {data.main.name}
                </div>
                <div className={cl.rate}>
                    {data.main.stars}
                </div>
                <div className={cl.pricetype}>
                    От {data.main.price} ₽ • {data.main.kitchen}
                </div>
            </div>
            
            <div className = {cl.items__outher}>
                <div className={cl.items}>
                    {data.other.map((item, index) => (
                        <PizzaItem key={index} data={item}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PizzasList;