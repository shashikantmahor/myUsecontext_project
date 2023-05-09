import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

export default function MDatePicker(props) {
  const yesterday = dayjs().subtract(2, "day");
  console.log("vsalue", props);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          {...props}
          sx={{ ...props.sx, marginTop: "15px",  width: "100%", zIndex: 4000 }}
          format="DD-MM-YYYY"
          minDate={props.name == "date" ? yesterday : ""}
          slotProps={{
            textField: {
              size: "small",
              error: false,
            },
          }}
          maxDate={dayjs(new Date())}
        />
        <input
          style={{
            marginTop: "15px",
            zIndex: -4000,
            borderColor: "transparent",
            color: "transparent",
            fontSize: "0px",
          }}
          value={new Date(props.value)}
          type="date"
          required={props.value.isValid() ? false : true}
        />
      </LocalizationProvider>
    </>
  );
}
