import React, { useState } from "react";
import firebase from "firebase/compat/app";
import { auth, db } from "../firebase";

function SendMessage({ scroll }) {
  const [msg, setMsg] = useState("");

  async function sendMessage(e) {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await db.collection("messages").add({
      text: msg,
      photoURL,
      uid,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setMsg("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg">
          <input
            style={{
              width: "78%",
              padding: "30px",
              fontSize: "15px",
              fontWeight: "550",
              marginLeft: "5px",
              marginBottom: "-1px",
            }}
            placeholder="Message..."
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <button
            style={{
              width: "58%",
              borderColor: "white",
              fontSize: "18px",
              fontWeight: "550",
              maxWidth: "200px",
              marginRight: "0px",
              cursor: "pointer",
            }}
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;

