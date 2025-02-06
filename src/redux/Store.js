import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
