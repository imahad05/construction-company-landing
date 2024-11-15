import React from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CommingSoon from "./pages/CommingSoon";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/blog" element={<News />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/*" element={<CommingSoon />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
