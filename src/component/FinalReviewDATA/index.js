import "./styles.css";
import { useRef } from "react";
import jsPDF from "jspdf";
import ReportTemplate from "./ReportTemplate";
import { useNavigate } from "react-router-dom";

function TestPDFViewer({ handleNext, data }) {
  console.log(data, "dataform");
  const reportTemplateRef = useRef(null);
  const navigate = useNavigate();

  const handleGeneratePdf = () => {
    const doc = new jsPDF("l", "mm", [1320, 980]);
    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        doc.save("document");
      },
      x: 12,
      y: 12,
    });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <button className="buttons" onClick={handleGeneratePdf}>
          Download PDF
        </button>
        <button
          className="button"
          onClick={() => {
            handleNext();
          }}
        >
          Next
        </button>
      </div>
      <div ref={reportTemplateRef}>
        {data.map((item, v) => {
          return <ReportTemplate item={item} />;
        })}
      </div>
    </div>
  );
}

export default TestPDFViewer;
