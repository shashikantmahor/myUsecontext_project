import React from "react";
import { useState } from "react";
import { FormContext } from "./formDataContext";

export default function FormDataProvider({ children }) {
  const [formContent, setFormContent] = useState({});
  const [submittedData, setSubmittedData] = useState([]);
  const [cityTableData, setCityTableData] = useState([]);
  const [formData, setFormData] = useState([]);
  const [updated, setUpdated] = useState(false);

  return (
    <>
      <FormContext.Provider
        value={{
          formContent,
          setFormContent,
          submittedData,
          setSubmittedData,
          cityTableData,
          setCityTableData,
          setFormData,
          formData,
          setUpdated,
          updated
        }}
      >
        {children}
      </FormContext.Provider>
    </>
  );
}
