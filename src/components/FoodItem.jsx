import React from "react";
import FoodData from "../data/FoodData";
import FoodCart from "./FoodCart";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItem = () => {
  const handleToast = (name) => toast.success(`${name} Added to cart`);
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8 mx-6 my-10">
        {FoodData.filter((item) => {
          if (category === "All") {
            return item.name.toLowerCase().includes(search.toLowerCase());
          } else {
            return (
              category === item.category &&
              item.name.toLowerCase().includes(search.toLowerCase())
            );
          }
        }).map((item) => (
          <FoodCart
            id={item.id}
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
            desc={item.desc}
            category={item.category}
            rating={item.rating}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItem;
