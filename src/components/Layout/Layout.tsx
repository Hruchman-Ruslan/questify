import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "..";
import { useAuth } from "../../redux/auth/useAuth";

import styles from "../../styles/container.module.css";
import { containerStyles } from "../shared/containerStyles";

export const Layout = () => {
  const { isAuth } = useAuth();

  return (
    <div
      className={styles.container}
      style={containerStyles.containerStyle(isAuth)}
    >
      {isAuth && <Header />}
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#F2F3F7",
        }}
      >
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer></footer> */}
    </div>
  );
};
