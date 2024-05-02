// /* eslint-disable react/prop-types */
// import { createContext, useState, useEffect } from "react";
// import firebase from "./firebase"; // Import Firebase from local

// // Rest of your code remains the same
// // Create authentication context
// export const AuthContext = createContext();

// // AuthProvider component to provide authentication state
// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return unsubscribe;
//   }, []);

//   return (
//     <AuthContext.Provider value={{ currentUser }}>
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// };
