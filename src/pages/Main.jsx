import React from "react";
import Container from "../components/UI/Container/Container";
import Header from "../components/UI/Header/Header";
import RestaurantsLists from "../components/RestaurantsLists";

const Main = () => {
    return (
        <Container>
            <Header/>
            <RestaurantsLists/> 
        </Container>
    )
}

export default Main;