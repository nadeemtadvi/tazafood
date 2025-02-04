import React from "react";
import ItemCart from "./ItemCart";

const Cart = () => {
  const cartItems = [
    {
      id: 1,
      name: "Delicious Burger",
      price: 8.99,
      quantity: 1,
      img: "https://example.com/burger.jpg", 
    },
    {
      id: 2,
      name: "Tasty Pizza",
      price: 12.99,
      quantity: 2,
      img: "https://example.com/pizza.jpg", 
    },
  ];
  return (
    <div className="mx-4 my-10 p-4 ">
      <h1 className="text-2xl font-bold mb-4 ">My Order</h1>
      <div className="mb-4">
        {cartItems.map((item) => (
          <ItemCart
            key={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
      </div>
      <div className="flex justify-between items-center border-t p-4">
        <div className="text-lg">
          <span className="font-bold">Items:</span> 1
        </div>
        <div className="text-lg">
          <span className="font-bold">Total Amount:</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
