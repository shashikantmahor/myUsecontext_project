import React from "react";
import CTable from "../../common/CTable";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
import Box from "../../common/Box";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useContext } from "react";
import { FormContext } from "../../store/formsData/formDataContext";
import { searchKeyword } from "../../helper/constants";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../store/authContext/AuthContext";
import { getUser } from "../../helper/localStorage";

export default function RejectedCaseM() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { cityTableData, setCityTableData } = useContext(FormContext);
  const { setSnackbar } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const user = getUser();

  const [caseId, setCaseId] = useState("");
  useEffect(() => {
    if ((state && state.heading) || caseId) {
      if (state && state.heading) {
        setCaseId(state.heading);
        asyncApiCall(state.heading);
      } else {
        asyncApiCall(caseId);
      }
    } else {
      navigate(-1);
    }
  }, []);

  const asyncApiCall = async (selectedValue) => {
    setIsLoading(true);
  
  };

  const columns = [
    {
      field: "case_id",
      headerName: "Case Id",
    },
    {
      field: "trained_by",
      headerName: "Trained By",
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
      field: "action",
      headerName: "Actions",

      valueGetter: (v, d) => {
        return (
          <>
            <>
              <Box sx={{ display: "flex" }}>
                <Box sx={{ width: "20%" }}>
                  <RemoveRedEyeIcon
                    onClick={() => {
                      navigate("/tabelview", {
                        state: {
                          case_id: d.case_id,
                        },
                      });
                    }}
                  />
                </Box>
                {state.heading === "rejected_by_mis" ? (
                  <Box sx={{ width: "20%", marginLeft: "10px" }}>
                    <EditIcon
                      onClick={() => {
                        navigate("/formpage", {
                          state: {
                            case_id: d.case_id,
                          },
                        });
                      }}
                    />
                  </Box>
                ) : (
                  ""
                )}
              </Box>
            </>
          </>
        );
      },
    },
  ];
  const localHeading = searchKeyword.find((item, i) => {
    return item.value == state.heading;
  });

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        <Typography variant="h5" sx={{ marginBottom: "10px" }}>
          {localHeading.label ? localHeading.label : ""}
        </Typography>
        <CTable
          isLoading={isLoading}
          columns={columns}
          data={cityTableData.resData}
        />
      </Box>
    </>
  );
}
