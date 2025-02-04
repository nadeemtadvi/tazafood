import React from "react";

const ItemCart = () => {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <div className="flex items-center">
        <img
          className="w-20 h-20 rounded-md object-cover"
          src="https://images.pexels.com/photos/6454809/pexels-photo-6454809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="{name}"
        />
        <div className="ml-4">
          <div className="font-bold text-lg">Cheeees</div>
          <div className="text-gray-600">$500</div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md">
          -
        </button>
        <span className="mx-2">2</span>
        <button className="bg-gray-300 text-gray-700 px-2 py-1 rounded-md">
          +
        </button>
      </div>
      <button className="bg-red-500 text-white px-3 py-1 rounded-md ml-4">
        Delete
      </button>
    </div>
  );
};

export default ItemCart;
