// import React, { useState } from "react";
// import firebase from "firebase/app";
// import "firebase/storage";
// from firebase_admin import storage;
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { useState } from "react";
import Config from "./firebaseConfig";
function PrescriptionUpload() {
  const [prescriptionFile, setPrescriptionFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  // Function to handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setPrescriptionFile(file);
  };

  // Function to upload file to Firebase Storage
  const uploadFile = () => {
    if (!prescriptionFile) return;
    setUploading(true);

    // Create a storage reference
    // const storageRef = firebase.storage().ref(`${prescriptionFile.name}`);

    const storageRef = Config.storageBucket
      .ref()
      .child(`prescriptions/${prescriptionFile.name}`);

    // Upload file
    const uploadTask = storageRef.put(prescriptionFile);

    // Update progress
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadProgress(progress);
      },
      (error) => {
        console.error("Error uploading file: ", error);
        setUploading(false);
      },
      () => {
        // Upload successful
        setUploading(false);
        setUploadProgress(0);
        console.log("File uploaded successfully");
        // You can add further logic here, like updating a database with the file URL
      }
    );
  };

  // Remove the unused variable
  // eslint-disable-next-line

  return (
    <div className="max-w-md mx-auto">
      <input type="file" onChange={handleFileUpload} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        onClick={uploadFile}
        disabled={!prescriptionFile || uploading}
      >
        {uploading
          ? `Uploading ${uploadProgress.toFixed(2)}%`
          : "Upload Prescription"}
      </button>
    </div>
  );
}

export default PrescriptionUpload;
