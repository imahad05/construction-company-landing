import React, { Suspense, lazy } from "react";
import Header from "./components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { useApp } from "./context/AppContext";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const News = lazy(() => import("./pages/News"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Contact = lazy(() => import("./pages/Contact"));
const CommingSoon = lazy(() => import("./pages/CommingSoon"));
const Auth = lazy(() => import("./pages/Auth"));

const App = () => {
  const { isAuthenticated } = useApp();

  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
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
            element={
              isAuthenticated ? <Portfolio /> : <Navigate to={"/login"} />
            }
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
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
