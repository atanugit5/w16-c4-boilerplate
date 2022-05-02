import React from "react";
import { Routes, Route } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Products } from "../components/Products";
import { CategoryCard } from "../components/CategoryCard";
import { Navbar } from "../components/Navbar";

const MainRoutes = () => {
  return (
    <>
      {/* Navbar and all the routes */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/men" element={<CategoryCard />} />
        <Route path="/products/women" element={<CategoryCard />} />
        <Route path="/products/kids" element={<CategoryCard />} />
        <Route path="/products/homedecor" element={<CategoryCard />} />
      </Routes>
    </>
  );
};
export { MainRoutes };
