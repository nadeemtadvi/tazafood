import React from "react";
import Header from "../components/Header";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import SuccessOrder from "./SuccessOrder";

const Home = () => {
  
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto p-4">
        <CategoryMenu />
        <FoodItem />
        <Cart />
        <SuccessOrder/>
      </div>
    </>
  );
};

export default Home;
