import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CommingSoon from "./pages/CommingSoon";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import Projects from "./pages/Projects";
import News from "./pages/News";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { useApp } from "./context/AppContext";

const App = () => {
  const { isAuthenticated } = useApp();

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/about"
          element={isAuthenticated ? <About /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/project"
          element={isAuthenticated ? <Projects /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/blog"
          element={isAuthenticated ? <News /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/portfolio"
          element={isAuthenticated ? <Portfolio /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/contact"
          element={isAuthenticated ? <Contact /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/*"
          element={
            isAuthenticated ? <CommingSoon /> : <Navigate to={"/login"} />
          }
        />
        <Route path="/login" element={<Auth />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
