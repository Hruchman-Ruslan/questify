import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      {/* <header></header> */}
      <main>
        <Suspense fallback={"Loading..."}>
          <Outlet />
        </Suspense>
      </main>
      {/* <footer></footer> */}
    </>
  );
};
