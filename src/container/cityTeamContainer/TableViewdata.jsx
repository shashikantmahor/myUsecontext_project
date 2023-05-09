import React from "react";
import TestPDFViewer from "../../component/FinalReviewDATA";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Stack from "../../common/Stack";
import { CircularProgress } from "@mui/material";

export default function TableViewdata() {
  const [isLoading, setIsLoading] = useState(false);
  const [caseId, setCaseId] = useState("");

  const { state } = useLocation();
  const [tableData, setTableData] = useState([]);
  console.log("state", state);

  const handleNext = () => {
    Navigate("/approvelinterface");
  };

  useEffect(() => {
    if (state && state.case_id) {
      asyncApiCall(state.case_id);
      setCaseId(state.case_id);
    } else if (caseId) {
      asyncApiCall(caseId);
    }
  }, []);
  const asyncApiCall = async (case_id) => {
    try {
      setIsLoading(true);
      let res = await({ case_id: case_id });
      setTableData(res.pdfData);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
    }
  };
  console.log("tableData", tableData);
  if (isLoading) {
    return (
      <>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%" }}
        >
          <CircularProgress />
        </Stack>
      </>
    );
  }
  return (
    <>
      <TestPDFViewer data={tableData} handleNext={handleNext} />
    </>
  );
}
