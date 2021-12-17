import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { Provider as ReduxProvider } from "react-redux";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

import App from "./app";
import getRootStore from "./store";
import theme from "./theme";

export const store = getRootStore();

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <ReduxProvider store={store}>
            <App />
          </ReduxProvider>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
