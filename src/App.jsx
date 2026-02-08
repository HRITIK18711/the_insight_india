// news_portal App.jsx
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
// import Header from "./Component/Header";
import MenuBar from "./Component/MenuBar";

import Main_News_Section from "./Component/Main_News_Section";
import Home_Trending_News from "./Component/Home_Trending_News";
import Home_Sports_News from "./Component/Home_Sports_News";

import Home_Entertainment_News from "./Component/Home_Entertainment_News";
import Footer from "./Component/Footer";
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
}

// Main content
function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="flex flex-col gap-6 px-2 sm:px-4 md:px-6 lg:px-12">
      {isHome ? (
        <>
          
          <Main_News_Section />
          <Home_Trending_News />
          <Home_Sports_News />
          <Home_Entertainment_News />
        </>
      ) : (
        <Routes>
          {/*  */}
        </Routes>
      )}
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🌄 Background Wrapper */}
      <div className="relative flex flex-col min-h-screen overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: "url('/Image/bg.png')" }}
        ></div>

        {/* Soft white fade */}
        <div className="absolute inset-0 bg-white/50"></div>

        {/* App content */}
        <div className="relative z-10 flex flex-col min-h-screen">

          {/* Header + Menu */}
          <div className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md">
            {/* <Header /> */}
            <MenuBar />
          </div>

          {/* Main */}
          <div className="flex-grow pt-4">
            <MainContent />
          </div>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
