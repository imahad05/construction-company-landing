import React from "react";
import { assets } from "./assets/assets";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CommingSoon from "./pages/CommingSoon";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<CommingSoon />} />
      </Routes>
    </div>
  );
};

export default App;
