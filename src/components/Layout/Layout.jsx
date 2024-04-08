import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout({ isLogin, logOut }) {
  return (
    <div className="">
      <Header isLogin={isLogin} logOut={logOut} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
}

export default Layout;
