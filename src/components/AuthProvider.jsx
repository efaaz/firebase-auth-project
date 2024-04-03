import React, { createContext, useEffect, useState } from "react";
import auth from "./Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const authProvider = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      console.log("observing", user);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = { user, signUp, signIn, logOut, loading };
  return (
    <authProvider.Provider value={authInfo}>{children}</authProvider.Provider>
  );
}

export default AuthProvider;
