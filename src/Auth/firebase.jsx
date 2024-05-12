// firebase.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import firestore module
import { getAuth } from "firebase/auth";
// Firebase is available after the script is loaded
const firebaseConfig = {
  apiKey: "AIzaSyDF72681dY91QYzgqdTVnCf1EtOcGFeS-M",
  authDomain: "e-commerce-1f616.firebaseapp.com",
  projectId: "e-commerce-1f616",
  storageBucket: "e-commerce-1f616.appspot.com",
  messagingSenderId: "22868744350",
  appId: "1:22868744350:web:19f20d01385d9e097ac38f",
  measurementId: "G-0LFDPZ8CR9",
};
let app;
let auth;
let firestore; // Declare firestore variable

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  firestore = getFirestore(app); // Initialize firestore
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { auth, firestore, AuthContext }; // Export firestore along with auth and AuthContext
