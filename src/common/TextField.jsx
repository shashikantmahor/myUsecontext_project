import React from "react";
import MTextField from "@mui/material/TextField";
import { makeStyles, createStyles } from "@mui/styles";

const TextField = ({
  InputProps = {},
  FormHelperTextProps = {},
  InputLabelProps = {},
  SelectProps = {},
  error = false,
  hasField = true,
  ...restProps
}) => {
  

  if (hasField) {
    return <MTextField on error={error} {...restProps} />;
  } else {
    return <></>;
  }
};

export default React.memo(TextField);
