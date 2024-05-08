// firebase.jsx
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore"; // Import firestore module
import { getStorage, ref, uploadString } from "firebase/storage"; // Import storage module

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
let storage;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  firestore = getFirestore(app); // Initialize firestore
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) return;

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // Function to upload images to Firebase Storage and save their URLs to Firestore
  const uploadImageAndSaveUrl = async (imageFile) => {
    try {
      const storageRef = ref(storage, `images/${imageFile.name}`);
      await uploadString(storageRef, imageFile, "data_url");

      // Get download URL
      const imageUrl = await getDownloadURL(storageRef);

      // Save the image URL to Firestore
      const imageDocRef = doc(firestore, "images", imageFile.name);
      await setDoc(imageDocRef, { imageUrl });

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, uploadImageAndSaveUrl }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export { auth, firestore, AuthContext }; // Export firestore along with auth and AuthContext
