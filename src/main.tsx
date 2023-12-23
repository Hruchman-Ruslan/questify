import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./styles/global.module.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/questify">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
