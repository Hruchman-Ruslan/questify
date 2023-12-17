import { lazy } from "react";

const AuthPage = lazy(() => import("../../pages/AuthPage"));

function App() {
  return (
    <>
      <AuthPage />
    </>
  );
}

export default App;
