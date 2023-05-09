import React from "react";
import Select from "./Select";
import InputLabel from "./InputLabel";
import { Input } from "@mui/material";

const SelectBuilder = (attributes) => {
  let drop =
    (attributes.attributes.contentvalue ?? []).map((e) => e.props.innerHTML) ||
    [];
  console.log("selectBox", attributes);
  //   return drop
  return (
    <>
      <InputLabel id={attributes.attributes.props.name}>
        {attributes.label}
      </InputLabel>
      <Select
        id={attributes.attributes.props.name}
        placeholder={attributes.label}
        required={attributes.attributes.props.required}
        onChange={(e) =>{
          console.log("eeee", e,  attributes.attributes.props.name)
          attributes.handleOnChange(e, attributes.attributes.props.name)}
        }
        value={attributes.inputValue[attributes.attributes.props.name]}
        disabled={attributes.disabled}
        data={drop}
        defaultValue={attributes.attributes.defaultValue}
        // input={<Input  id={attributes.attributes.props.name} />}
        sx={{ marginTop: "10px" }}
      />
      <input
        defaultValue={attributes.attributes.defaultValue}
        value={attributes.inputValue[attributes.attributes.props.name]}
        required={attributes.attributes.props.required}
        style={{
          position: "absolute",
          borderColor: "transparent",
          left: "30px",
          zIndex: -4000,
          marginTop: "20px",
          color: "transparent",
          fontSize: "0px",
          borderWidth: 0,
        }}
      />
    </>
  );
};

export default SelectBuilder;
