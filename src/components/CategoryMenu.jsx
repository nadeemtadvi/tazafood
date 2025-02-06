import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/Slices/CategorySlice";
import FoodData from "../data/FoodData";

const CategoryMenu = () => {
  const dispatch = useDispatch();
  const selecteCategory = useSelector((state) => state.category.category);
  const [categories, setCategories] = useState([]);

  const listUniqueCat = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCat();
  }, []);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
        <button
          onClick={() => setCategory("All")}
          className={`px-3 py-2  font-normal rounded-lg ${
            selecteCategory === "All"
              ? "bg-green-500 text-white  "
              : "bg-gray-200 text-black"
          } `}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(setCategory(category))}
              className={`px-3 py-2  font-normal rounded-lg ${
                selecteCategory === category
                  ? "bg-green-500 text-white  "
                  : "bg-gray-200 text-black"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
