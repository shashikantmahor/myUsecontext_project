import React from "react";
import InputLabel from "./InputLabel";
import Input from "./Input";
import Box from "./Box";
import MDatePicker from "./DatePicker";
import dayjs from "dayjs";
import MDropzoneDialog from "../component/cityTeam/internalAdmin/MDropzoneDialog";

const InputBuilder = (attributes) => {
  var value = attributes.inputValue[attributes.attributes.props.name];
  // if (attributes.attributes.props.type == "date") {
  //   value = new Date(
  //     attributes.inputValue[attributes.attributes.props.name]["answer"]
  //   );
  //   try {
  //     value.toISOString();
  //   } catch (e) {
  //     value = new Date(Date.now());
  //   }
  // }
  let tag;
  switch (attributes.attributes.props.type) {
    case "date":
      tag = (
        <Box sx={{ marginTop: "0px", marginBottom: "20px" }}>
          <MDatePicker
            disabled={attributes.disabled}
            name={attributes.attributes.props.name}
            value={dayjs(value)}
            onChange={(e) => {
              let date = dayjs(e).add(1, "day");
              console.log("date ", date.toISOString().substring(0, 10));

              attributes.handleOnChange(
                date.toISOString().substring(0, 10),
                // dayjs(e.toISOString().substring(0, 10)).add(1, "day"),
                attributes.attributes.props.name
              );
            }}
          />
        </Box>
      );
      break;
    case "text":
      tag = (
        <Input
          disabled={attributes.disabled}
          label={attributes.label}
          onChange={(e) =>
            attributes.handleOnChange(
              e.target.value,
              attributes.attributes.props.name
            )
          }
          // required={attributes.attributes.props.required}
          value={value}
          sx={{ marginTop: "10px", width: "100%", marginBottom: "10px" }}
        />
      );
      break;

    // Type-File :-
    case "file":
      tag = (
        <Box sx={{ marginTop: "10px" }}>
          <MDropzoneDialog
            // required={attributes.attributes.props.required}
            value={value}
            handleOnChange={(val) => {
              try {
                attributes.handleOnChange(
                  val.target.files,
                  attributes.attributes.props.name,
                  "image"
                );
              } catch (e) {
                console.log(e);
              }
            }}
          />
        </Box>
      );
      break;
    default:
      tag = (
        <Input
          label={attributes.label}
          onChange={(e) =>
            attributes.handleOnChange(
              e.target.value,
              attributes.attributes.props.name
            )
          }
          required={attributes.attributes.props.required}
          value={value}
          sx={{ marginTop: "10px", width: "100%" }}
        />
      );
  }

  return (
    <>
      <Box sx={{ marginTop: "5px" }}>
        <InputLabel>{attributes.label}</InputLabel>
        {tag}
      </Box>
    </>
  );
};

export default InputBuilder;
