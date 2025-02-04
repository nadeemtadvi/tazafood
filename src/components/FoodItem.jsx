import React from "react";
import FoodCart from "./FoodCart";

const FoodItem = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      <FoodCart />
    </div>
  );
};

export default FoodItem;
