import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "..";
import { useAuth } from "../../redux/auth/useAuth";
import { refresh } from "../../redux/auth/authOperations";

const AuthPage = lazy(() => import("../../pages/AuthPage"));
const MainPage = lazy(() => import("../../pages/MainPage"));

function App() {
  const { dispatch, idUser } = useAuth();

  useEffect(() => {
    dispatch(refresh({ sid: `${idUser}` }));
  }, [dispatch, idUser]);

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
