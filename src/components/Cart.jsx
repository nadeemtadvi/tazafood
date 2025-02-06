import React from "react";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state)=>state.cart.cart)
  const totalItems = cartItems.reduce((totalQty , item)=> totalQty + item.qty ,0)
  const totalPrice = cartItems.reduce((total , item)=> total + item.qty * item.price ,0)
  
  return (
    <div className="mx-4 my-10 p-4 ">
      <h1 className="text-2xl font-bold mb-4 ">My Order</h1>
      <div className="mb-4">
        {cartItems.length > 0 ? (cartItems.map((item) => (
          <ItemCart
            key={item.id}
            id={item.id}
            img={item.img}
            name={item.name}
            price={item.price}
            qty={item.qty}
          />
        ))) : <h2 className="italic text-center  text-lg bg-yellow-400 p-2  ">Your Cart is empty</h2>}
      </div>
      <div className="grid grid-cols-[50%_auto_auto] items-center border-t p-4">
        <div className="text-lg">
          <span className="font-bold inline-block ml-24">Items:</span> {totalItems}
        </div>
        <div className="text-lg text-end">
          <span className="font-bold">Total Amount: ${totalPrice}</span>
        </div>
        <div className="text-end">
        <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md">
          Checkout
        </button></div>
      </div>
    </div>
  );
};

export default Cart;
