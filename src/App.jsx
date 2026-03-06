import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";   // ✅ SEO Import

import MenuBar from "./Component/MenuBar";
import About from "./Component/About";
import Privacy from "./Component/Privacy";
import Disc from "./Component/Disc";
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
useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://gc.zgo.at/count.js";
  script.async = true;
  document.body.appendChild(script);
}, []);

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
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/disc" element={<Disc />} />
        </Routes>
      )}
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* ✅ SEO META TAGS */}
      <Helmet>
        <script
          data-goatcounter="https://ruexplores.goatcounter.com/count"
          async
          src="//gc.zgo.at/count.js"
        ></script>

        <title>RU Explores | Latest News, Web Stories & Updates</title>
        <meta
          name="description"
          content="RU Explores brings you the latest news, sports updates, entertainment news, and web stories in one place."
        />
        <meta
          name="keywords"
          content="RU Explores, news, sports news, entertainment news, web stories, latest updates"
        />
        <meta name="author" content="RU Explores" />
      </Helmet>

      {/* 🌄 FULL SITE BACKGROUND */}
      <div className="relative min-h-screen">

        {/* Background Image */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-top -z-20 opacity-40"
          style={{ backgroundImage: "url('/Image/hero.jpeg')" }}
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