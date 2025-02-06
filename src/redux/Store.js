import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/CartSlice.jsx";
import CategorySlice from "./Slices/CategorySlice.jsx";
import SearchSlice from "./Slices/SearchSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    category : CategorySlice,
    search : SearchSlice,
  },
});

export default store;
