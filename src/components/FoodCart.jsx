import React from "react";

const FoodCart = () => {
  return (
    <div>
      <div className="w-72 rounded overflow-hidden shadow-lg">
        <img className="w-72 h-64 object-cover" src='https://images.pexels.com/photos/6454809/pexels-photo-6454809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="{name}" />
        <div className="p-4">
          <div className="font-bold text-xl mb-2">Chesse</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            veritatis?
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2 text-end">$234</div>
          <button  className="inline-block py-1.5 px-2.5 text-white bg-green-500 hover:bg-green-600 rounded-sm text-sm">Add to cart</button>
          <button  className="inline-block py-1.5 px-2.5 text-white bg-green-500 hover:bg-green-600 rounded-sm text-sm ml-2 ">+ wishlist</button>
          <button  className="inline-block py-1.5 px-2.5 text-white bg-green-500 hover:bg-green-600 rounded-sm text-sm ml-2 ">Buy</button>
        </div>
         
      </div>
    </div>
  );
};

export default FoodCart;
