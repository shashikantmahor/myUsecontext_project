import Stack from "../../common/Stack";
import React from "react";
import Text from "../../common/Text";
import Box from "../../common/Box";
import Table from "../../common/Table";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../../store/formsData/formDataContext";




const CaseID = () => {
  const navigate = useNavigate();
  const { submittedData } = useContext(FormContext);

  console.log("submittedData", submittedData);

  const columns = [
    {
      field: "city",
      headerName: "City",
    },
    {
      field: "c4_date",
      headerName: "C4-Date",
    },
    {
      field: "trained_by",
      headerName: "Trained By",
    },
    {
      field: "training_type",
      headerName: "Training Type",
    },
    {
      field: "program",
      headerName: "Program",
    },
    {
      field: "first_name",
      headerName: "First Name(as per ID)",
    },

    
    {
      field: "middle_name",
      headerName: "Middle Name(as per ID)",
    },
    {
      field: "last_name",
      headerName: "Last Name(as per ID)",
    },
    {
      field: "designation",
      headerName: "Designation",
    },
    {
      field: "date_of_birth",
      headerName: "Date of Birth(as per ID)",
    },
    {
      field: "age",
      headerName: "Age Completed(Today)",
    },
  ];
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={2}
      >
        <Box
          sx={{
            background: "#e5e5ed",
            padding: "20px",
            width: "100%",
            border: "1px solid black",
            borderRadius: "5px",
          }}
        >
          <Text
            sx={{
              color: "101828",
              fontSize: "26px",
              fontFamily: "sans-serif",
              fontWeight: "600",
            }}
          >
            Your Case ID {submittedData.resData[0].case_id} Submitted
            successfully
          </Text>
        </Box>
      </Stack>
      <Box sx={{ padding: "10px" }}>
        <Text
          sx={{
            color: "101828",
            fontSize: "22px",
            fontFamily: "sans-serif",
            marginLeft: "10px",
            fontWeight: "600",
          }}
        >
          (Display Details below)
        </Text>
      </Box>

      <Box sx={{ padding: "20px" }}>
        <Table
          columns={columns}
          isLoading={false}
          data={submittedData.resData}
        />
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Button
          onClick={() => {
            navigate("/home");
          }}
        >
          Back to Home
        </Button>
      </Box>
    </>
  );
};

export default CaseID;
