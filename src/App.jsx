import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CommingSoon from "./pages/CommingSoon";
import Footer from "./components/Footer/Footer";
import Auth from "./pages/Auth";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<CommingSoon />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
