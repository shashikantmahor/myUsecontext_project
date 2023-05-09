import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import TestPDFViewer from "../../component/FinalReviewDATA";
import { AuthContext } from "../../store/authContext/AuthContext";
import { FormContext } from "../../store/formsData/formDataContext";
import {submitFormDataApi,updateFormApi,} from "../../apis/formsApis/formsApi";

export default function ReviewDataCity() {
  const submittedData = useContext(FormContext);
  const { setSnackbar, snackbar } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleNext = async () => {
    try {
      var response = "";
      if (submittedData.updated) {
        response = await updateFormApi(submittedData.formData);
      } else {
        response = await submitFormDataApi(submittedData.formData);
      }
      submittedData.setSubmittedData(response);
      navigate("/submitted");
    } catch (e) {
      setSnackbar({
        ...snackbar,
        open: true,
      });

      navigate("/");
    }
  };
  return (
    <>
      <TestPDFViewer
        data={submittedData.formData.member_details}
        handleNext={handleNext}
      />
    </>
  );
}
