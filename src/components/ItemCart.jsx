import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

const ItemCart = ({ img, name, price, qty, id }) => {
  const dispatch = useDispatch();
  return (
    <div className="grid grid-cols-[50%_auto_auto] items-center justify-between border-b p-4">
      <div className="flex items-center">
        <img
          className="w-20 h-20 rounded-md object-fit"
          src={img}
          alt="{name}"
        />
        <div className="ml-4 grow">
          <div className="font-bold text-lg">{name}</div>
          <div className="text-gray-600">${price}</div>
        </div>
      </div>
      <div className="flex items-center ">
        <button
          onClick={() => (qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0))}
          className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
        >
          -
        </button>
        <span className="mx-2">{qty}</span>
        <button
          onClick={() =>
            qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
          }
          className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md"
        >
          +
        </button>
      </div>
      <button
        onClick={() => {
          dispatch(removeFromCart({ img, name, price, qty, id }));
          toast(`${name} removed`, {
            icon: "👋",
          });
        }}
        className="bg-red-500 text-white px-3 py-1 rounded-md ml-4"
      >
        Delete
      </button>
    </div>
  );
};

export default ItemCart;
