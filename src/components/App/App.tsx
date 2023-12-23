import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "..";

const AuthPage = lazy(() => import("../../pages/AuthPage"));
const MainPage = lazy(() => import("../../pages/MainPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/register" />} />
          <Route path="/register" element={<AuthPage />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
