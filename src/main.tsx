import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.tsx";
import "./styles/global.module.css";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.ts";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/questify">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
