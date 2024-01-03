import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Layout, PrivateRoute, PublicRoute } from "..";
import { useAuth } from "../../redux/auth/useAuth";
import { refresh } from "../../redux/auth/authOperations";

const AuthPage = lazy(() => import("../../pages/AuthPage"));
const MainPage = lazy(() => import("../../pages/MainPage"));

function App() {
  const { dispatch, isRefresh } = useAuth();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return isRefresh ? (
    <p>Loading...</p>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/register" />} />
          <Route
            path="/register"
            element={
              <PublicRoute redirectTo="/main">
                <AuthPage />
              </PublicRoute>
            }
          />
          <Route
            path="/main"
            element={
              <PrivateRoute redirectTo="/register">
                <MainPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
