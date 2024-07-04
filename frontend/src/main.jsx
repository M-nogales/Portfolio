import React from "react";
import ReactDOM from "react-dom/client";
import { ModalProvider } from "./context/Modal";

import App from "./App";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { EmailModal } from "./components/EmailModal";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalProvider>
      {/* class="dark" */}
      <EmailModal/>
      <Navbar />
      <App />
      <Footer />
    </ModalProvider>
  </React.StrictMode>
);
