import React from "react";
import cl from './FoodSearchInput.module.css'

const FoodSearchInput = ({text, callback}) => {
    return (
        <input type="text" onChange={callback}  className={[cl.input, cl.input__search].join(" ")} placeholder={text}/>
    )
}

export default FoodSearchInput;
