import React, { useState } from "react";
import PizzaItem from "./PizzaItem";
import cl from "../styles/PizzasList.module.css";
import FoodSearchInput from "./UI/FoodSearchInput/FoodSearchInput";

const PizzasList = ({ data }) => {
  const [filter, setFilter] = useState("");

  const sort = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <div className={cl.description}>
        <div className={cl.content__items}>
          <div className={cl.title}>{data.main.name}</div>
          <div className={cl.rate}>{data.main.stars}</div>
          <div className={cl.pricetype}>
            От {data.main.price} ₽ • {data.main.kitchen}
          </div>
        </div>
        <FoodSearchInput text="Поиск блюд" callback={sort} />
      </div>

      <div className={cl.items__outher}>
        <div className={cl.items}>
          {data.other
            .filter((item) =>
              item.name.toLowerCase().startsWith(filter.toLowerCase())
            )
            .map((item, index) => (
              <PizzaItem key={index} data={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PizzasList;
