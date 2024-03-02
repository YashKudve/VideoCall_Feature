// firebase.js

// import firebase from 'firebase/app';
// import 'firebase/firestore';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdWNiIbGZ8Hpstpd2W5KpFHuSqSKPRvcQ",
    authDomain: "mental-health-tracker-9df35.firebaseapp.com",
    projectId: "mental-health-tracker-9df35",
    storageBucket: "mental-health-tracker-9df35.appspot.com",
    messagingSenderId: "413927001427",
    appId: "1:413927001427:web:f4bbee4fb71de5612625a6"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const db = firebase.firestore();
