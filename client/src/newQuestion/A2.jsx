import React, { useState } from "react";
import styles from "../questions/Depress3.module.css";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";

const A2 = () => {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const history = useNavigate();

  const handleChange = (questionId, value, questionText) => {
    setAnswers({ ...answers, [questionId]: { value, text: questionText } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let score = Object.values(answers).reduce(
      (acc, val) => acc + parseInt(val.value),
      0
    );
    let depressionLevel = "";
    if (score <= 10) {
      depressionLevel = "No Indication of Addiction";
    } else if (score <= 20) {
      depressionLevel = "Mild or Moderate Risk of Addiction";
    } else if (score <= 30) {
      depressionLevel = "High Risk of Addiction";
    } else {
      depressionLevel = "High Risk of Addiction";
    }
    setResult(depressionLevel);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    history.push("/next-page"); // Navigate to next page
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Addiction Test Report", 10, 10);
    doc.text("Result: " + result, 10, 20);
    doc.text("Question Responses:", 10, 30);
    Object.entries(answers).forEach(([questionId, { value, text }]) => {
      doc.text(`${text}: ${value}`, 10, doc.autoTable.previous.finalY + 10);
    });
    doc.save("AddictionTestReport.pdf");
  };

  return (
    <div className="container mx-auto mt-8">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-100 p-6 rounded-lg shadow-md text-justify"
      >
        <div className="mb-4">
          <label className="text-lg font-semibold mb-2">
            In the past year, have you found that you needed to consume larger
            amounts of a substance to achieve the same effect (tolerance)?
          </label>
          <div>
            <button
              type="button"
              className={`${styles["option-button"]} ${
                answers["q1"] === "1" ? styles["selected"] : ""
              }`}
              onClick={() => handleChange("q1", "1", "Option 1")}
            >
              Not at all
            </button>
            <button
              type="button"
              className={`${styles["option-button"]} ${
                answers["q1"] === "2" ? styles["selected"] : ""
              }`}
              onClick={() => handleChange("q1", "2", "Option 2")}
            >
              Rarely
            </button>
            {/* Repeat similar logic for other options */}
          </div>
        </div>
        {/* Repeat similar structure for other questions */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10"
        >
          Submit
        </button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <h2 className="text-2xl font-bold mb-4">Result</h2>
        <p className="mb-4">{result}</p>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-10"
          onClick={downloadPDF}
        >
          Download PDF Report
        </button>
        <button
          className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-2"
          onClick={closeModal}
        >
          Close
        </button>
      </Modal>
    </div>
  );
};

export default A2;
