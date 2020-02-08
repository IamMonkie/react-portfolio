import firebase from "firebase/app";
import "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxX_Tg9yDCCPtA3KNAAFKZkg35QZPOuSM",
  authDomain: "react-portfolio-e3954.firebaseapp.com",
  databaseURL: "https://react-portfolio-e3954.firebaseio.com",
  projectId: "react-portfolio-e3954",
  storageBucket: "react-portfolio-e3954.appspot.com",
  messagingSenderId: "327955492754",
  appId: "1:327955492754:web:87bd43945ac8fec53f1b4b",
  measurementId: "G-PME1E863VM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase.auth();
