import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";

let app;

onAuthStateChanged(auth, () => {
  if (!app) {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById("root")
    );
  }
});
