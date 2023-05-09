import * as React from "react";
import Box from "../../common/Box";
import Button from "../../common/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Text from "../../common/Text";

export default function DialogConfirmation({
  open,
  handleClose,
  message1,
  onConfirm,
}) {
  return (
    <React.Fragment>
      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            boxSizing: "border-box",
            justifyContent: "center",
            alignItems: "center",
            width: "20rem",
            height: "10rem",
            background: "#FFFFFF",
            borderRadius: "8px",
          }}
        >
          <DialogContent>
            <DialogContentText>
              <Text
                sx={{
                  fontFamily: "inherit",
                  fontStyle: "normal",
                  fontWeight: "600",
                  fontSize: "16px",
                  textAlign: "center",
                  letterSpacing: "-0.01em",
                  color: "#111111",
                  flex: "none",
                  order: "0",
                  flexGrow: "0",
                  marginTop: "20px",
                }}
              >
                {message1}
              </Text>
            </DialogContentText>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center" }}>
            <Box sx={{ display: "flex" }}>
              <Button
                sx={{
                  alignItems: "center",
                  width: "120px",
                  margin: "10px",
                  flex: "none",
                  order: "0",
                  flexGrow: "0",
                  textTransform: "none",
                }}
                onClick={() => {
                  handleClose();
                }}
              >
                Cancel
              </Button>
              <Button
                sx={{
                  alignItems: "center",
                  width: "120px",
                  margin: "10px",
                  background: "#0D0D0D !important",
                  flex: "none",
                  order: "0",
                  flexGrow: "0",
                  textTransform: "none",
                }}
                onClick={() => onConfirm()}
              >
                <Text sx={{ color: "#FFFFFF" }}>Yes</Text>
              </Button>
            </Box>
          </DialogActions>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
