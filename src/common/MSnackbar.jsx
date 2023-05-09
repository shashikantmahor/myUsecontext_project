import { Alert, Snackbar } from "@mui/material";
import { handleBreakpoints } from "@mui/system";
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../store/authContext/AuthContext";

export default function MSnackbar() {
  const { setSnackbar, snackbar } = useContext(AuthContext);
  const handleClose = () => {
    setSnackbar({
      ...snackbar,
      open: false,
    });
  };
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}
