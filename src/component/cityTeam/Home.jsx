import React, { useState } from "react";
import Select from "../../common/Select";
import Box from "../../common/Box";
import InputLabel from "../../common/InputLabel";
import Button from "../../common/Button";
import Stack from "../../common/Stack";
import ResponsiveAppBar from "../login/ResponsiveAppBar";
import { AppStyle } from "../../utils/colors";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { FormContext } from "../../store/formsData/formDataContext";

export default function Home() {
  const [selectedValue, setSelectedValue] = useState("1");
  const navigate = useNavigate();
  const { setCityTableData } = useContext(FormContext);

  const handleContinue = () => {
    switch (selectedValue) {
      case "1":
        navigate("/formpage");
        break;
      default:
        navigate("/rejected/mis", { state: { heading: selectedValue } });
    }
  };
  const accordionData = [
    {
      label: "New",
      value: "1",
    },
    {
      label: "PENDING FOR APPROVAL MIS case ID-Sent for APPROVAL ",
      value: "pending_for_approval_mis",
    },
    {
      label: " PENDING FOR APPROVAL CLIENT-case id sent for apporval by MIS ",
      value: "pending_for_approval_client",
    },
    {
      label: "REJECTED BY MIS (Case ID-Rejected by MIS- Editable)",
      value: "rejected_by_mis",
    },
  ];
  return (
    <>
      <ResponsiveAppBar />
      <Stack
        direction="column"
        justifyContent="center"
        spacing={2}
        alignItems="center"
        sx={{
          height: "100%",
          marginTop: "10%",
        }}
      >
        <InputLabel>Please select before you continue.</InputLabel>
        <Box sx={{ marginTop: "10px", width: "50%" }}>
          <Select
            placeholder={"Select"}
            dataKey="value"
            dataValue="label"
            required={true}
            onChange={(e) => {
              setSelectedValue(e);
            }}
            data={accordionData}
            value={selectedValue}
            sx={{ marginTop: "10px", width: "50%" }}
          />
        </Box>
        <Button
          sx={{
            marginTop: "8px",
            background: AppStyle.primaryBG,
            "&:hover": {
              backgroundColor: AppStyle.primaryBG,
            },
          }}
          onClick={handleContinue}
        >
          Continue
        </Button>
      </Stack>
    </>
  );
}
