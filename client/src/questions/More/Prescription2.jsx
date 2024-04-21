import React, { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG2fyszjYeJeekXDEUeTc25n7p13WAwP0",
  authDomain: "uploaddoc-3ebbd.firebaseapp.com",
  projectId: "uploaddoc-3ebbd",
  storageBucket: "uploaddoc-3ebbd.appspot.com",
  messagingSenderId: "225884639046",
  appId: "1:225884639046:web:2d9d83a9858a0998259f47",
  measurementId: "G-QGJHQEW6B8",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const storage = firebase.storage();
const firestore = firebase.firestore();

const Prescription2 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file && name && email && contactNumber) {
      const uploadTask = storage
        .ref()
        .child(
          `gs://uploaddoc-3ebbd.appspot.com/${file.name}
        `
        )
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Progress function
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          // Error function
          console.error(error);
        },
        () => {
          // Complete function
          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            console.log("File uploaded successfully. URL:", url);

            // Upload additional data to Firestore
            firestore
              .collection("prescriptions")
              .add({
                name: name,
                email: email,
                contactNumber: contactNumber,
                fileUrl: url,
              })
              .then(() => {
                console.log("Additional data uploaded successfully");
                setShowSuccessMessage(true); // Show success message
                // Reset form fields after successful upload
                setName("");
                setEmail("");
                setContactNumber("");
                setFile(null);
                setProgress(0);
              })
              .catch((error) => {
                console.error("Error uploading additional data: ", error);
              });
          });
        }
      );
    } else {
      console.error("Please fill in all fields and select a file");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-4">Upload Doctor's Prescription</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-2"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2"
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="mb-2"
        />
        <input type="file" onChange={handleChange} className="mb-2" />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      <progress value={progress} max="100" className="w-full mt-2"></progress>
      {showSuccessMessage && (
        <div className="bg-green-500 text-white p-2 rounded mt-2">
          Data uploaded successfully!
        </div>
      )}
    </div>
  );
};

export default Prescription2;
