import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { theme } from "./theme.tsx";
import { BrowserRouter, HashRouter } from "react-router-dom";

const themeStyle = createTheme(theme);

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={themeStyle}>
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  </ThemeProvider>
);
