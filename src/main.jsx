import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./index.css";
import App from "./App";

document.title = "GadgetHeaven - Your Tech Shopping Destination";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Toaster position="bottom-right" />
  </StrictMode>
);
