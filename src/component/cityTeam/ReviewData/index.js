// import "./styles.css";
// import { useRef } from "react";
// import jsPDF from "jspdf";
// import { useNavigate } from "react-router-dom";
// import ReviewTemplate from "./ReviewTemplate";
// import { FormContext } from "../../../store/formsData/formDataContext";
// import { useState } from "react";
// import { useContext } from "react";
// import { uploadImagesApi } from "../../../apis/formsApis/formsApi";

// function ReviewPDFViewer({}) {
//   const reviewTemplateRef = useRef(null);
//   const navigate = useNavigate();
//   const form_data = useContext(FormContext);
//   const [file, setFile] = useState();

//   const handleGeneratePdf = () => {
//     const doc = new jsPDF("l", "mm", [1280, 950]);

//     doc.html(reviewTemplateRef.current, {
//       async callback(doc) {
//         doc.save("document");
//       },
//       x: 12,
//       y: 12,
//     });
//   };
//   const handleOnChange = async (val) => {
//     let formData = new FormData();
//     console.log("val", val);
//     formData.append("file", val.target.files[0]);
//     const imageResponse = await uploadImagesApi(formData);
//     console.log("mmm", imageResponse);
//     setFile(imageResponse.data.data.result.file.filename);
//   };
//   const handleNext = () => {
//     let form = JSON.parse(JSON.stringify(form_data.formData));
//     let res = form.member_details.map((item) => {
//       return {
//         ...item,
//         signoff_sheet_doc: file,
//       };
//     });
//     form.member_details = res;

//     form_data.setFormData(form);
//     navigate("/final");
//   };
//   console.log("formData", form_data);

//   return (
//     <form onSubmit={handleNext.bind(this)}>
//       <div>
//         <div ref={reviewTemplateRef}>
//           <ReviewTemplate />
//         </div>

//         <div style={{ display: "flex", marginLeft: "45px" }}>
//           <button className="button" onClick={handleGeneratePdf}>
//             Download PDF
//           </button>
//           <div
//             style={{
//               width: "220px",
//               marginLeft: "70px",
//               fontWeight: "600",
//               border: "1px solid grey",
//               marginTop: "10px",
//               paddingTop: "0px",
//             }}
//           >
//             <input
//               required={true}
//               style={{ marginTop: "9px", marginLeft: "12px" }}
//               type="file"
//               id="myFile"
//               name="filename"
//               placeholder="upload sign"
//               onChange={handleOnChange}
//             />
//           </div>
//           <div style={{ marginLeft: "40px" }}>
//             <button className="button" type="submit">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// }

// export default ReviewPDFViewer;
