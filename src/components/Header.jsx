import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/Slices/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
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
        className="p-2 rounded-md border-none w-1/3 text-black"
      />
      <h4 className="text-xl font-bold">Cart</h4>
    </header>
  );
};

export default Header;
