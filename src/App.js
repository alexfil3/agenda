import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import SignUp from "./pages/auth/SignUp/SignUp";
import SignIn from "./pages/auth/SignIn/SignIn";
import NotFound from "./pages/NotFound/NotFound";
import css from "./style.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
