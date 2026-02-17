import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import MenuBar from "./Component/MenuBar";
import Content from "./Component/Content";
import Main_News_Section from "./Component/Main_News_Section";
import Home_Sports_News from "./Component/Home_Sports_News";
import Webstories from "./Component/Webstories";
import Home_Entertainment_News from "./Component/Home_Entertainment_News";
import Footer from "./Component/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), [pathname]);
  return null;
}

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="flex flex-col gap-6">
      {isHome ? (
        <>
          <Content />
          <Main_News_Section />
          <Home_Sports_News />
          <Home_Entertainment_News />
        </>
      ) : (
        <Routes>
          <Route path="/webstories" element={<Webstories />} />
        </Routes>
      )}
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* 🌄 FULL SITE BACKGROUND */}
      <div className="relative min-h-screen">

        {/* Background Image */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-center -z-20"
          style={{ backgroundImage: "url('/Image/Background.png')" }}
        ></div>

        {/* Soft overlay */}
        <div className="fixed top-0 left-0 w-full h-screen bg-black/20 -z-10"></div>

        {/* APP CONTENT */}
        <div className="relative z-10 flex flex-col min-h-screen">

          {/* MENU */}
          <div className="sticky top-0 z-50 bg-black/70 backdrop-blur">
            <MenuBar />
          </div>

          {/* MAIN */}
          <div className="flex-grow">
            <MainContent />
          </div>

          {/* FOOTER */}
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
