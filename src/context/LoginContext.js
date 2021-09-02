import React, { createContext, useEffect, useState } from "react";
import { getFirestore, getFireAuth } from "../firebase/firebase";

export const LoginContext = createContext([]);

export const LoginProvider = ({ defaultValue = false, children }) => {
  //const [email, setEmail] = useState(null);
  //const [password, setPassword] = useState(null);
  const firebaseAuth = getFireAuth();

  const registrar = async ({ buyer, email, password }) => {
    console.log(email + "- " + password);
    await firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        console.log(error);
        return { success: false, mensage: error.message };
      });
    return { success: true, mensage: "Usuario registrado con éxito" };
  };

  const login = async (email, password) => {
    let mensaje = '';
    let success = true;

    await firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .catch(function (error) {  
        mensaje = error.message;
        success = false;                
      });      
      return { success:success,mensaje:mensaje};
  };

  const logout = async () => {
    await firebaseAuth.signOut();

  };

  return (
    <LoginContext.Provider value={{ registrar, login, logout }}>
      {children}
    </LoginContext.Provider>
  );
};
