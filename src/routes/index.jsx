import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddCars, Cars } from "../pages";

function CustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Cars />} />
      <Route path="/add-car" element={<AddCars />} />
    </Routes>
  );
}

export default CustomRoutes;
