import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { userRoles } from "../helper/constants";
import { getUser } from "../helper/localStorage";
import CityteamRoute from "./CityteamRoute";
import PublicRoutes from "./publicRoute";

export default function Index() {
  const userAuth = getUser();
  const { city_team } = userRoles;
  const Validateuser = () => {
    switch (userAuth?.user_type) {
      case city_team:
        return <Route path="/*" element={<CityteamRoute />} />;
      default:
        return <Route path="/*" element={<PublicRoutes />} />;
    }
  };

  return (
    <>
      <Router>
        <Routes>{Validateuser()}</Routes>
      </Router>
    </>
  );
}
