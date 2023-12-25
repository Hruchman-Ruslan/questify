import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import { useAuth } from "../../redux/auth/useAuth";

export const Layout = () => {
  const { isAuth } = useAuth();

  return (
    <>
      {isAuth && <Header />}
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer></footer> */}
    </>
  );
};
