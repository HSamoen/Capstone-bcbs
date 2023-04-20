
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TakeAction from "./pages/TakeAction";
import Login from "./pages/Login";
import Donate from "./pages/Donate";
import NoPage from "./pages/NoPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

export default function App() {
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} exact/>
          <Route path="takeaction" element={<TakeAction />} exact/>
          <Route path="login" element={<Login />} exact/>
          <Route path="donate" element={<Donate />} exact/>
          <Route path="*" element={<NoPage />} exact/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}