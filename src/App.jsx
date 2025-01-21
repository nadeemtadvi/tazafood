import React from "react";
import "./App.css";
import Error from "./components/Error";
import Home from "./pages/Home";
import SuccessOrder from "./pages/SuccessOrder";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/success" element={<SuccessOrder />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
