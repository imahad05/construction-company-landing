import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CommingSoon from "./pages/CommingSoon";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Projects from "./pages/Projects";
import News from "./pages/News";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<News />} />
        <Route path="/*" element={<CommingSoon />} />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
