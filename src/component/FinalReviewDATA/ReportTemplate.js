import React from "react";
import { imgBaseUrl } from "../../helper/constants";
import { makeStyles } from "@mui/styles";
import "./styles.css";

const ReportTemplate = ({ item }) => {
  const classes = useStyles();
  console.log("item", item);
  return (
    <>
      <div
        className="table"
        style={{ padding: 0, border: "none !important", margin: "20px" }}
      >
        <table
          className={classes.table}
          cellspacing="0"
          cellpadding="0"
          style={{ border: "1px solid black" }}
        >
          <tr className={classes.borderless}>
            <td
              style={{
                verticalAlign: "top",
                borderLeft: "none",
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <table cellspacing="0" cellpadding="0">
                <thead>
                  <tr className={classes.borderless}>
                    <th
                      colspan="2"
                      style={{
                        borderBottom: "1px solid black",
                        padding: "15px",
                        fontSize: "1.3rem",
                      }}
                    >
                      Sign Of Sheet
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "1px",
                  }}
                >
                  <tr className={classes.borderless}>
                    <td className={classes.borderless} align="center">
                      <div style={{ width: "250px", height: "250px" }}>
                        <img
                          src={imgBaseUrl + item.signoff_sheet_doc}
                          style={{ width: "230px", marginTop: "10px" }}
                          alt="person"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td className={classes.borderless} style={{ verticalAlign: "top" }}>
              <table
                style={{ borderRight: "1px solid black" }}
                cellspacing="0"
                cellpadding="0"
              >
                <thead>
                  <tr className={classes.borderless}>
                    <th
                      colspan="2"
                      style={{
                        borderBottom: "1px solid black",
                        padding: "15px",
                        fontSize: "1.3rem",
                      }}
                    >
                      Candidate
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: "12px", fontWeight: 500 }}>
                  <tr className={classes.borderless}>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      {" "}
                      Name
                    </td>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      {item.first_name} {item.middle_name} {item.last_name}
                    </td>
                  </tr>
                  <tr className={classes.borderless}>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      DOB
                    </td>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      {item.date_of_birth}
                    </td>
                  </tr>
                  <tr className={classes.borderless}>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      Age
                    </td>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      {item.age}
                    </td>
                  </tr>
                  <tr className={classes.borderless}>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      City
                    </td>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      {item.city}
                    </td>
                  </tr>
                  <tr className={classes.borderless}>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      Designation
                    </td>
                    <td
                      className={classes.borderless}
                      style={{ padding: "15px 10px" }}
                    >
                      {item.designation}
                    </td>
                  </tr>
                  <tr className={classes.borderless}>
                    <td
                      className={classes.borderless}
                      colspan="2"
                      align="center"
                    >
                      <div style={{ width: "250px", minHeight: "270px" }}>
                        <img
                          src={imgBaseUrl + item.candidate_image}
                          style={{ width: "230px", height: "230px" }}
                          alt="person"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td
              style={{
                verticalAlign: "top",
                borderLeft: "none",
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <table cellspacing="0" cellpadding="0">
                <thead>
                  <tr className={classes.borderless}>
                    <th
                      colspan="2"
                      style={{
                        borderBottom: "1px solid black",
                        padding: "15px",
                        fontSize: "1.3rem",
                      }}
                    >
                      ID proof
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "1px",
                  }}
                >
                  <tr className={classes.borderless}>
                    <td className={classes.borderless} align="center">
                      <div style={{ width: "250px", height: "250px" }}>
                        <img
                          src={imgBaseUrl + item.id_proof_1}
                          style={{
                            width: "220px",
                            height: "230px",
                            marginTop: "10px",
                          }}
                          alt="person"
                        />
                      </div>
                    </td>
                  </tr>
                  <tr className={classes.borderless}>
                    <td className={classes.borderless} align="center">
                      <div style={{ width: "250px", height: "250px" }}>
                        <img
                          src={imgBaseUrl + item.id_proof_2}
                          style={{
                            width: "220px",
                            height: "230px",
                            marginTop: "10px",
                          }}
                          alt="person"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td
              style={{
                verticalAlign: "top",
                borderLeft: "none",
                borderTop: "none",
                borderBottom: "none",
              }}
            >
              <table cellspacing="0" cellpadding="0">
                <thead>
                  <tr className={classes.borderless}>
                    <th
                      colspan="2"
                      style={{
                        borderBottom: "1px solid black",
                        padding: " 15px",
                        fontSize: " 1.3rem",
                      }}
                    >
                      Self attested copy
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "1px",
                  }}
                >
                  <tr className={classes.borderless}>
                    <td className={classes.borderless} align="center">
                      <div style={{ width: "250px", height: "250px" }}>
                        <img
                          src={imgBaseUrl + item.self_attested_copy}
                          style={{ width: "220px", marginTop: "10px" }}
                          alt="person"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>

            <td className={classes.borderless} style={{ verticalAlign: "top" }}>
              <table cellspacing="0" cellpadding="0">
                <thead>
                  <tr className={classes.borderless}>
                    <th
                      colspan="2"
                      style={{
                        borderBottom: "1px solid black",
                        padding: "15px",
                        fontSize: "1.3rem",
                      }}
                    >
                      Vaccine certificate
                    </th>
                  </tr>
                </thead>
                <tbody
                  style={{
                    fontSize: "12px",
                    fontWeight: "500",
                    lineHeight: "1px",
                  }}
                >
                  <tr className={classes.borderless}>
                    <td className={classes.borderless} align="center">
                      <div style={{ width: "230px", height: "250px" }}>
                        <img
                          src={imgBaseUrl + item.vaccination_certificate}
                          style={{ width: "220px", marginTop: "10px" }}
                          alt="person"
                        />
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </table>
      </div>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  borderless: {
    border: "unset",
  },
  table: {
    width: "400px",
  },
}));
export default ReportTemplate;
