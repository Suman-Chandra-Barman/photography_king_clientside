import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { Oval } from "react-loader-spinner";

export const AuthContext = createContext();
const auth = getAuth(app);

console.log(auth);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [spinner, setSpinner] = useState(false);

  const createUser = (email, password) => {
    setLoading(true);
    setSpinner(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoading(true);
    setSpinner(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = (provider) => {
    setLoading(true);
    setSpinner(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, photoURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL,
    });
  };

  const logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const loadingSpinner = () => {
    if (spinner) {
      return <Oval visible={true} height="60" width="60" color="red" />;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      console.log(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    spinner,
    setSpinner,
    loadingSpinner,
    createUser,
    updateUserProfile,
    login,
    googleLogin,
    logout,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
