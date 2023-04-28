import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TakeAction from "./pages/TakeAction";
import LoginRegister from "./pages/LoginRegister";
import Donate from "./pages/Donate";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import User from "./pages/User";

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="takeaction" element={<TakeAction />} />
          <Route path="loginregister" element={<LoginRegister />} />
          <Route path="donate" element={<Donate />} />
          <Route path="user/*" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}