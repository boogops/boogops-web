import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./app";
import getRootStore from "./store";
import reportWebVitals from "./report-web-vitals";

export const store = getRootStore();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// eslint-disable-next-line no-console
reportWebVitals(console.log);
