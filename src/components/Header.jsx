import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/Slices/SearchSlice";
import { FaShoppingCart } from "react-icons/fa";
import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch();
  const [showcart, setShowcart] = useState(false)
  const cartItems = useSelector((state)=>state.cart.cart)
  const totalItems = cartItems.reduce((totalQty , item)=> totalQty + item.qty ,0)

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-50">
      <h1 className="text-xl font-bold">
        My Website
        <p className="bg-red-600 mt-1.5 px-2 border-t border-gray-100 text-xs font-medium text-gray-100">
          {new Date().toUTCString().slice(0, 16)}
        </p>
      </h1>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        autoComplete="off"
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="p-2 rounded-md outline-none w-1/3 text-black border border-gray-100"
      />
      <h4 className="text-xl font-bold">
        <button  className="relative" onClick={()=>setShowcart((prev) => !prev)}><FaShoppingCart/> 
        <span className="absolute top-[-0.61rem] right-[-0.81rem]  inline-block w-5 h-5 bg-red-600 text-white rounded-full text-sm">{totalItems}</span>
        </button>
      </h4>
      {showcart && <Cart setShowcart={setShowcart}/>}
    </header>
  );
};

export default Header;
