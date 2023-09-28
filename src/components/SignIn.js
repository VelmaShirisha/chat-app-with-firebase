import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../firebase";

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <button
        style={{
          padding: "30px",
          fontSize: "20px",
          borderRadius: "10px",
          fontWeight: "550",
          borderColor: "white",
        }}
        onClick={signInWithGoogle}
      >
        Sign In with Google
      </button>
    </div>
  );
}

export default SignIn;
