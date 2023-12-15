import { lazy } from "react";
import "./App.css";

const AuthPage = lazy(() => import("../../pages/AuthPage"));

function App() {
  return (
    <>
      <AuthPage />
    </>
  );
}

export default App;
