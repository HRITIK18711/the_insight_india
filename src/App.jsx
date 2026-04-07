import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

import Stories from "./Component/Stories";
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
import LatestNews from "./Component/LatestNews";
import Kedar from "./Component/Kedar";
import JamaNews from "./Component/JamaNews";
import Mahabhodi from "./Component/Mahabhodi";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return null;
}

function Layout({ children }) {
  const location = useLocation();
  const hideNavbar = location.pathname.startsWith("/webstories/");

  return (
    <>
      {!hideNavbar && (
        <div className="sticky top-0 z-50 bg-black/70 backdrop-blur">
          <MenuBar />
        </div>
      )}

      <div className="flex-grow">{children}</div>

      {!hideNavbar && <Footer />}
    </>
  );
}

function HomePage() {
  return (
    <>
      <Content />
      <LatestNews />
      <Main_News_Section />
      <Home_Sports_News />
      <Home_Entertainment_News />
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Helmet>
        <title>RU Explores</title>
      </Helmet>

      <div className="relative min-h-screen">
        <div
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-top -z-20 opacity-40"
          style={{ backgroundImage: "url('/Image/hero.jpeg')" }}
        ></div>

        <div className="fixed top-0 left-0 w-full h-screen bg-black/20 -z-10"></div>

        <div className="relative z-10 flex flex-col min-h-screen">
          <Layout>
            <Routes>
              {/* HOME */}
              <Route path="/" element={<HomePage />} />

              {/* OTHER */}
              <Route path="/webstories" element={<Webstories />} />
              <Route path="/webstories/:slug" element={<Stories />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disc" element={<Disc />} />
              <Route path="/kedar" element={<Kedar />} />

              {/* IMPORTANT */}
              <Route
                path="/jama-masjid-delhi-travel-guide"
                element={<JamaNews />}
              />
              <Route
                path="/mahabodhi-temple-travel-guide"
                element={<Mahabhodi />}
              />
            </Routes>
          </Layout>
        </div>
      </div>
    </Router>
  );
}

export default App;