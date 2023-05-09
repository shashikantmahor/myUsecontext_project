// import React from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
// import { Container } from "@mui/material";
// import { useContext } from "react";
// import { FormContext } from "../../../store/formsData/formDataContext";

// const ReviewData = () => {
//   const { formData } = useContext(FormContext);
//   return (
//     <>
//       <Container>
//         <Document>
//           <Page size="A4" style={styles.page}>
//             <View style={styles.section}>
//               <div style={{ display: "flex" }}>
//                 <div style={styles.table_div}>
//                   <table style={styles.table1}>
//                     <th>
//                       Objective: Sign offs of all those who have been trained on
//                       the PMI Marketing Policy
//                     </th>
//                   </table>
//                   <table style={styles.table2}>
//                     <th>
//                       THE FOLLOWING HAVE ATTENDED THE TRAINING ON PMI C4 & PMI
//                       40 POLICY
//                     </th>
//                   </table>

//                   <table style={styles.table3}>
//                     <tr>
//                       <th style={styles.table_head}>s.no</th>
//                       <th style={styles.table_head}>name</th>
//                       <th style={styles.table_head}> signature</th>
//                     </tr>

//                     {Object.keys(formData).length > 0
//                       ? formData.member_details.map((item, i) => {
//                           return (
//                             <tr key={i}>
//                               <td style={styles.table_data}>{i + 1}</td>
//                               <td
//                                 style={styles.table_data}
//                               >{`${item?.first_name} ${item?.middle_name} ${item?.last_name}`}</td>
//                               <td style={styles.table_data}></td>
//                             </tr>
//                           );
//                         })
//                       : null}
//                   </table>

//                   <table style={styles.table4}>
//                     <tr>
//                       I hereby declare and acknowledge that I am 21/over 21
//                       years of age and will comply with the PMI Marketing C4 &
//                       40 Policy.
//                     </tr>
//                   </table>

//                   <div style={styles.footer_div}>
//                     <Text>Date : </Text>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________________________
//                   </div>
//                   <div style={styles.footer_div}>
//                     <Text>Trained By: </Text>_________________________
//                   </div>
//                   <div style={styles.footer_div}>
//                     <Text>City:</Text>
//                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_________________________
//                   </div>
//                 </div>
//               </div>
//             </View>
//           </Page>
//         </Document>
//       </Container>
//     </>
//   );
// };

// export default ReviewData;
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//   },
//   section: {
//     width: "80%",
//   },
//   table1: {
//     borderTop: "1px solid black",
//     borderLeft: "1px solid black",
//     borderRight: "1px solid black",
//     width: "80%",
//   },
//   table2: {
//     borderTop: "1px solid black",
//     borderLeft: "1px solid black",
//     borderRight: "1px solid black",
//     width: "80%",
//   },

//   table3: {
//     border: "1px solid black",
//     width: "80%",
//   },
//   table4: {
//     borderBottom: "1px solid black",
//     borderLeft: "1px solid black",
//     borderRight: "1px solid black",
//     width: "80%",
//   },

//   table_div: {
//     width: "70%",
//     padding: "20px",
//   },
//   table_head: {
//     border: "1px solid black",
//   },
//   table_data: {
//     border: "1px solid black",
//   },
//   footer_div: {
//     marginTop: "20px",
//   },
//   button_div: {
//     marginTop: "20px",
//   },
//   button: {
//     width: "140px",
//   },
// });
// const data = [
//   {
//     number: "1",
//     name: "Atul",
//     signature: "",
//   },
//   {
//     number: "2",
//     name: "Abhay",
//     signature: "",
//   },
//   {
//     number: "3",
//     name: "Yuvan",
//     signature: "",
//   },
//   {
//     number: "4",
//     name: "Raj",
//     signature: "",
//   },
//   {
//     number: "5",
//     name: "Sahil",
//     signature: "",
//   },
//   {
//     number: "6",
//     name: "Ankit",
//     signature: "",
//   },

//   {
//     number: "8",
//     name: "Satyam",
//     signature: "",
//   },
//   {
//     number: "9",
//     name: "Subham",
//     signature: "",
//   },
//   {
//     number: "10",
//     name: "Mahima",
//     signature: "",
//   },
// ];
