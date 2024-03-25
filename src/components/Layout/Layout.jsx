import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
