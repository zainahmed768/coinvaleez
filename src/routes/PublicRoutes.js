import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Signup from "../Pages/auth/Signup";
import SelectWallet from "../Pages/auth/selectWallet";

const PublicRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="signup" element={<Signup />} />
          <Route path="selectWallet" element={<SelectWallet />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default PublicRoutes;
