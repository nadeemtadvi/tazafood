import React from "react";
import "./App.css";
import Error from "./components/Error";
import Home from "./pages/Home";
import SuccessOrder from "./pages/SuccessOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<ProtectedRoute element={<SuccessOrder />}/>} />
          <Route path="/checkout" element={<Cart />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
