import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import UrlList from "../pages/Url_list";
import Profile from "../pages/Profile";
import LogIn from "../pages/Log_in";
import SignUp from "../pages/Sign_up";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/log_in" element={<LogIn />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/urls" element={<UrlList />} />
    </Routes>
  );
}

export default AppRoutes;
