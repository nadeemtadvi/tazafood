import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const FoodCart = ({ id, img, price, rating, name, desc ,handleToast}) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-72 rounded overflow-hidden  p-1 bg-orange-100">
        <img className="w-72 h-64 object-fit" src={img} alt="{name}" />
        <div className="p-4">
          <h2>{name}</h2>
          <p className="text-gray-700 text-base">{desc.slice(0, 50)}...</p>
          <div className="flex justify-between items-center">
            <span className="flex justify-center items-center">
              <AiFillStar className="mr-1 text-yellow-400" /> {rating}
            </span>
            <p className="text-gray-900 font-bold text-xl mb-2 text-end">
              ${price}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={() => {
                dispatch(addToCart({ id, price, rating, name, img, qty: 1 }));
                handleToast(name)
              }}
              className="inline-block py-1.5 w-full  text-white bg-green-500 hover:bg-green-600 rounded-sm text-sm"
            >
              Add to cart
            </button>
            <button className="inline-block py-1.5 mx-2 w-full text-white bg-green-500 hover:bg-green-600 rounded-sm text-sm ">
              + wishlist
            </button>
            <button className="inline-block py-1.5 w-full text-white bg-green-500 hover:bg-green-600 rounded-sm text-sm ">
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
