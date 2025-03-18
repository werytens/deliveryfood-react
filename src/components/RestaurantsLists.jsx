import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cl from "../styles/RestaurantsLists.module.css";
import FoodSearchInput from "./UI/FoodSearchInput/FoodSearchInput";
import FoodItem from "./FoodItem";
import db from "../db/db.json";

const RestaurantsLists = () => {
  const navigate = useNavigate();
  const [base, setBase] = useState(db.db.partners);

  const goRest = (e) => {
    navigate(`/restaurant/${e.name}`);
  };

  const sort = (event) => {
    let newBasesArray = [];

    for (let i in db.db.partners) {
      if (
        db.db.partners[i].name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      ) {
        newBasesArray.push(db.db.partners[i]);
      }
    }

    setBase(newBasesArray);
  };

  return (
    <div className={cl.root}>
      <div className={cl.header}>
        <div className={cl.title}>Рестораны</div>
        <FoodSearchInput text="Поиск ресторанов" callback={sort} />
      </div>
      <div className={cl.items__list}>
        <div className={cl.main}>
          {base.map((item, index) => (
            <FoodItem data={item} key={index} callback={goRest} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantsLists;
