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
import Metro from "./Component/Metro";
import IndiaGate from "./Component/IndiaGate";
import GreatBuddha from "./Component/GreatBuddha";
import DelhiMysterious from "./Component/DelhiMysterious";
import MalchaMahal from "./Component/MalchaMahal";
import QutubMinar from "./Component/QutubMinar";
import Events from "./Component/Events";
import CP from "./Component/CP";
import Lotus from "./Component/Lotus";
import Nizamuddin from "./Component/Nizamuddin";
import PhotoStory from "./Component/PhotoStory";
import MetroData from "./Component/Metrodata";
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
        <div className="sticky top-0 z-50 bg-black/70 backdrop-blur px-2 sm:px-4">
          <MenuBar />
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="flex-grow w-full">
  {children}
</div>

      {!hideNavbar && <Footer />}
    </>
  );
}

function HomePage() {
  return (
    <>
      <Content />
      <LatestNews />
      <PhotoStory />
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

      <div className="relative min-h-screen overflow-x-hidden">

        {/* BACKGROUND IMAGE */}
        <div
          className="fixed top-0 left-0 w-full h-screen bg-cover bg-top -z-20 opacity-40"
          style={{ backgroundImage: "url('/Image/hero.jpeg')" }}
        ></div>

        {/* OVERLAY */}
        <div className="fixed top-0 left-0 w-full h-screen bg-black/20 -z-10"></div>

        {/* MAIN WRAPPER */}
        <div className="relative z-10 flex flex-col min-h-screen">

          <Layout>
            <Routes>

              {/* HOME */}
              <Route path="/" element={<HomePage />} />

              {/* OTHER */}
              <Route path="/webstories" element={<Webstories />} />
              <Route path="/webstories/:slug" element={<Stories />} />

              {/* EVENTS FIXED */}
              <Route path="/events" element={<Events />} />
              <Route path="/events/:slug" element={<Events />} />

              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disc" element={<Disc />} />
              <Route path="/kedar" element={<Kedar />} />
              <Route path="/metro" element={<Metro />} />

              {/* IMPORTANT */}
              <Route
                path="/jama-masjid-delhi-travel-guide"
                element={<JamaNews />}
              />
              <Route path="/metro/:slug" element={<MetroData />} />

              <Route
                path="/mahabodhi-temple-bihar-travel-guide"
                element={<Mahabhodi />}
              />

              <Route
                path="/india-gate-delhi-travel-guide"
                element={<IndiaGate />}
              />

              <Route
                path="/great-buddha-statue-bihar-travel-guide"
                element={<GreatBuddha />}
              />

              <Route
                path="/delhi-mysterious-place-travel-guide"
                element={<DelhiMysterious />}
              />

              <Route
                path="/malcha-mahal-delhi-travel-guide"
                element={<MalchaMahal />}
              />

              <Route
                path="/qutub-minar-delhi-travel-guide"
                element={<QutubMinar />}
              />

              <Route
                path="/connaught-place-new-delhi-travel-guide"
                element={<CP />}
              />

              <Route
                path="/lotus-temple-delhi-travel-guide"
                element={<Lotus />}
              />

              <Route
                path="/hazrat-nizamuddin-dargah-delhi-travel-guide"
                element={<Nizamuddin />}
              />

            </Routes>
          </Layout>

        </div>
      </div>
    </Router>
  );
}

export default App;