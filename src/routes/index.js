import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "../pages/Home";
import Navbar from "../layout/Navbar";
import Register from "../pages/users/Register";
import Login from "../pages/users/Login";
import Activate from "../pages/users/Activate";
import ForgetPassword from "../pages/users/ForgetPassword";
import ResetPassword from "../pages/users/Resetpassword";
import Profile from "../pages/users/Profile";
import Footer from "../layout/Footer";
import Blog from "../pages/Blog";
import CreatePost from "../pages/CreatePost";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <div className="flex-grow">
        <BrowserRouter>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/blog" element={<Blog />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/new" element={<CreatePost />}></Route>
            <Route path="/forget-password" element={<ForgetPassword />}></Route>
            <Route
              path="/activate/:token"
              element={<Activate />}
            ></Route>
            <Route
              path="/reset-password/:token"
              element={<ResetPassword />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
