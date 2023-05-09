import React from "react";
import Box from "../../../common/Box";
import { imgBaseUrl } from "../../../helper/constants";

export default function MDropzoneDialog({ handleOnChange, value, required }) {
  const [imgUrl, setImgUrl] = React.useState("");

  const onChange = (val) => {
    var reader = new FileReader();

    reader.onload = function (e) {
      console.log("object, ", e);
      setImgUrl(e.target.result);
    };

    reader.readAsDataURL(val.target.files[0]);
    console.log("image", val);
    handleOnChange(val);
  };
  return (
    <div>
      {value ? (
        <Box
          sx={{
            border: "1px solid #c7c7c7",
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            padding: "10px",
            borderRadius: "7px",
            justifyContent: "center",
            alignItems: "center",
            width: "200px",
            height: "100px",
          }}
        >
          <img src={imgBaseUrl + value} height="100%" width="100%" />
        </Box>
      ) : null}
      <Box
        sx={{
          border: "1px solid #c7c7c7",
          marginTop: "20px",
          marginBottom: "20px",
          padding: "7px",
          borderRadius: "7px",
          paddingBottom: "9px",
        }}
      >
        <input required={required} onChange={onChange} type="file" />
      </Box>
    </div>
  );
}
