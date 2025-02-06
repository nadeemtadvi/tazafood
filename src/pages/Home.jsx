import React from "react";
import Header from "../components/Header";
import FoodItem from "../components/FoodItem";
import Cart from "../components/Cart";
import CategoryMenu from "../components/CategoryMenu";
import SuccessOrder from "./SuccessOrder";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";

const Home = () => {
  const dispatch = useDispatch();
 
  return (
    <>
      <Header />
      <div className="max-w-screen-2xl mx-auto p-4">
        <Cart/>
        <CategoryMenu />
        <FoodItem />
      </div>
    </>
  );
};

export default Home;
