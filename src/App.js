import { lazy, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import PrivateRoute from "./components/Routes/PrivateRoute";
import css from "./style.css";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const SignUp = lazy(() => import("./pages/auth/SignUp/SignUp.jsx"));
const SignIn = lazy(() => import("./pages/auth/SignIn/SignIn.jsx"));
const Goals = lazy(() => import("./pages/Goals/Goals.jsx"));
const Fortune = lazy(() => import("./pages/Fortune/Fortune.jsx"));
const Month = lazy(() => import("./pages/Month/Month.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

function App() {
  // need to work on login logic
  const [isLogin, setIsLogin] = useState(true);

  const handleLogOutClick = () => {
    setIsLogin(false);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout isLogin={isLogin} logOut={handleLogOutClick} />}
      >
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path="goals"
          element={<PrivateRoute isLogin={isLogin} Component={Goals} />}
        />
        <Route
          path="fortune"
          element={<PrivateRoute isLogin={isLogin} Component={Fortune} />}
        />
        <Route
          path="month"
          element={<PrivateRoute isLogin={isLogin} Component={Month} />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
