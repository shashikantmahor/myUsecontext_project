import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LoginCity from "../pages/LoginCity";

export default function PublicRoute() {
  return (
    <Routes>
      <Route exact path="/login" element={<LoginCity />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
}
