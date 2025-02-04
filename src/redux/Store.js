import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../redux/Slices/CartSlice";


const store = configureStore({
  reducer: {
    cart : CartSlice
  },
});

export default store;
