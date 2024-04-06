import React, { useState } from "react";

const PrescriptionUpload = () => {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    // Simulating upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setProgress(progress);
      if (progress >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Upload Doctor's Prescription</h1>
      <input type="file" onChange={handleChange} className="mb-2" />
      <button
        onClick={handleUpload}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Upload
      </button>
      <progress value={progress} max="100" className="w-full mt-2"></progress>
    </div>
  );
};

export default PrescriptionUpload;
