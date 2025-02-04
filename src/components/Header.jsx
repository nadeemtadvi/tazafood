import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">My Website</h1>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        className="p-2 rounded-md border-none w-1/3"
      />
      <h4 className="text-xl font-bold">Cart</h4>
    </header>
  );
};

export default Header;
