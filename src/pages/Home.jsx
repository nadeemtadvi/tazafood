import React from "react";
import Header from "../components/Header";
import FoodItem from "../components/FoodItem";
import CategoryMenu from "../components/CategoryMenu";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
 
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto p-4">
        <CategoryMenu />
        <FoodItem />
      </div>
    </>
  );
};

export default Home;
