import React, { useState, useEffect } from "react";
import cl from "./BasketModal.module.css";
import db from "../../../db/db.json";
import BasketProduct from "../BasketProduct/BasketProduct";

const BasketModal = ({ visible, setVisible }) => {
  let productsCount = {};
  let userProducts = [];
  let arrayOfAllProducts = [];

  if (JSON.parse(localStorage.getItem("deliveryfood")) !== null) {
    let data = JSON.parse(localStorage.getItem("deliveryfood")).basket;
    let arrayOfData = data.slice(0, data.length - 1).split(":");

    arrayOfData.forEach((item) => {
      if (!productsCount.hasOwnProperty(item)) {
        productsCount[item] = 1;
      } else {
        productsCount[item] += 1;
      }
    });

    for (const key in db.db) {
      const filteredArray = db.db[key].filter((item) =>
        item.hasOwnProperty("id")
      );
      arrayOfAllProducts.push(...filteredArray);
    }

    Object.keys(productsCount).forEach((key) => {
      arrayOfAllProducts.forEach((item) => {
        if (key === item.id) {
          userProducts.push(item);
        }
      });
    });
  }

  const [products] = useState([productsCount, userProducts]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    let result = 0;
    if (JSON.parse(localStorage.getItem("deliveryfood")) !== null) {
      products[1].forEach((item) => {
        result += products[0][item.id] * item.price;
      });
    }
    setPrice(result);
  }, [products]);

  const updatePriceAdd = (item) => {
    setPrice((prevPrice) => prevPrice + item.price);
  };

  const updatePriceRemove = (item) => {
    setPrice((prevPrice) => prevPrice - item.price);
  };

  const updatePriceRemoveAll = (item) => {
    const basket = JSON.parse(localStorage.getItem("deliveryfood")).basket;
    let count = 0;
    basket
      .slice(0, basket.length - 1)
      .split(":")
      .forEach((product) => {
        if (product === item.id) {
          count++;
        }
      });

    setPrice((prevPrice) => prevPrice - count * item.price);
  };

  return (
    <div
      className={visible ? [cl.modal, cl.active].join(" ") : cl.modal}
      onClick={() => {
        setVisible(false);
      }}
    >
      <div className={cl.modal__inner} onClick={(e) => e.stopPropagation()}>
        <p className={cl.basket__title}>Корзина</p>
        {products[1].map((item, index) => (
          <BasketProduct
            key={index}
            props={[item, products[0][item.id]]}
            callbacks={[
              updatePriceAdd,
              updatePriceRemove,
              updatePriceRemoveAll,
            ]}
          />
        ))}
        <div className={cl.purshate__ending}>
          <div className={cl.price__all}>{price} ₽</div>
          <div className={cl.buy}>
            {/* Заглушка */}
            Купить
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasketModal;
