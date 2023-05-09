import React, { useEffect } from "react";
import MNativeSelect from "@mui/material/NativeSelect";
import { useFetcher } from "react-router-dom";

const Select = (props) => {
  const {
    label,
    data = [],
    dataKey = "key",
    dataValue = "value",
    value,
    defaultValue,
    multiple = 0,
    onChange = () => {},
    disabled = false,
    ...restProps
  } = props;
console.log("data", data)
  let list = data || [];

  if (list.constructor === Object) {
    list = list[1] || [];
  }

  if (list.constructor === Array) {
    let isListValid = list[0] && list[0].constructor === Object;
    list = isListValid
      ? list
      : list.map((l) => ({ key: l.toString(), value: l.toString() }));
  }
  useEffect(() => {
    if(!value){
      onChange(list[0].value)
    }
  }, [value]);

  const onChangeInside = (e) => {
    onChange(e.target.value);
  };

  return (
    <MNativeSelect
      multiple={multiple}
      defaultValue={defaultValue}
      value={value}
      onChange={onChangeInside}
      disabled={disabled}
      {...restProps}
      sx={{ marginTop: "0px", marginBottom:"20px", width: "100%" }}
    >
      {list.map((l, i) => (
        <option
          key={`option-${l[dataKey]}-${i}`}
          style={{ p: 1 }}
          value={l[dataKey]}
        >
          {l[dataValue]}
        </option>
      ))}
    </MNativeSelect>
  );
};

export default Select;
