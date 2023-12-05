import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BudgetsProvider } from "./contexts/BudgetsContext.jsx";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BudgetsProvider>
      <App />
    </BudgetsProvider>
  </React.StrictMode>
);
