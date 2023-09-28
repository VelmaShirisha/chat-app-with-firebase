import React from "react";
import { auth } from "../firebase";

function SignOut() {
  return (
    <>
      <div
        style={{
          display: "flex",
          position: "fixed",
          justifyContent: "end",
          width: "98%",
          backgroundColor: "#FAFAFA",
          top: 0,
          borderBottom: "solid 1px lightgray",
          zIndex: "10",
        }}
      >
        <button
          style={{
            padding: "20px",
            cursor: "pointer",
            border: "2px solid white",
            fontSize: "15px",
            borderRadius: "30px",
            fontWeight: "600",
          }}
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </>
  );
}

export default SignOut;
