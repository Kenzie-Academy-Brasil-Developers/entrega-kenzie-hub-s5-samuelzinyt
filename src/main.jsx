import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./providers/context.jsx";
import { TecnologiesProvider } from "./providers/TechnologiesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <TecnologiesProvider>
          <App />
        </TecnologiesProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
