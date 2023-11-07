import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <main className="relative overflow-hidden">
        <App />
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  </React.StrictMode>
);
