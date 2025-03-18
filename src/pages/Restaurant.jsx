import React from "react";
import PizzasList from "../components/PizzasList";
import { useParams } from "react-router-dom";
import db from "../db/db.json";
import Container from "../components/UI/Container/Container";

const Restaurant = () => {
  const params = useParams();
  const database = db.db.partners;
  let name;
  let newData = {
    main: {},
    other: {},
  };
  for (let i in database) {
    if (database[i].name === params["*"]) {
      name = database[i].products.split(".")[0];
      newData.main = database[i];
    }
  }

  newData.other = db.db[name];

  return (
    <Container>
      <PizzasList data={newData} />
    </Container>
  );
};

export default Restaurant;
