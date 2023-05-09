import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../component/cityTeam/Home";
import RejectedByMisPage from "../pages/RejectedByMisPage";
import FormDataProvider from "../store/formsData/formDataProvider";
import Formtab from "../component/cityTeam/Formtab";
import CaseID from "../component/cityTeam/CaseID";
import ReviewDataCity from "../container/cityTeamContainer/ReviewDataCity";
import ReviewPDFViewer from "../component/cityTeam/ReviewData/index";
import TableViewdata from "../container/cityTeamContainer/TableViewdata";
export default function CityteamRoute() {
  return (
    <FormDataProvider>
      <Routes>
        <Route exact path="/formpage" element={<Formtab />} />
        <Route exact path="/dashboard" element={<Home />} />
        <Route exact path="/rejected/mis" element={<RejectedByMisPage />} />
        <Route exact path="/tabelview" element={<TableViewdata />} />
        <Route exact path="/review" element={<ReviewPDFViewer />} />
        <Route exact path="/final" element={<ReviewDataCity />} />
        <Route exact path="/submitted" element={<CaseID />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </FormDataProvider>
  );
}
