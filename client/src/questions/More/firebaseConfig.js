import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import firebase from "firebase/app";
// import "firebaseConfig/storage";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Config = {
  apiKey: "AIzaSyDG2fyszjYeJeekXDEUeTc25n7p13WAwP0",
  authDomain: "uploaddoc-3ebbd.firebaseapp.com",
  projectId: "uploaddoc-3ebbd",
  storageBucket: "uploaddoc-3ebbd.appspot.com",
  messagingSenderId: "225884639046",
  appId: "1:225884639046:web:2d9d83a9858a0998259f47",
  measurementId: "G-QGJHQEW6B8",
};


firebase.initializeApp(Config);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

export default Config;