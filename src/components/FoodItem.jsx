import React from "react";
import FoodData from "../data/FoodData";
import FoodCart from "./FoodCart";

const FoodItem = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mx-6 my-10">
      {FoodData.map((item)=>(
        
        <FoodCart
        id={item.id} 
        key={item.id}
        name={item.name}
        price={item.price}
        img={item.img}
        desc={item.desc}
        category={item.category}
        rating={item.rating}
        />
      ))
      }      
    </div>
  );
};

export default FoodItem;
