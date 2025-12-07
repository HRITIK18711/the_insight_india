// news_portal App.jsx
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import Header from "./Component/Header";
import MenuBar from "./Component/MenuBar";
import Advertisement from "./Component/Advertisment";
import Main_News_Section from "./Component/Main_News_Section";
import Home_Trending_News from "./Component/Home_Trending_News";
import Home_Sports_News from "./Component/Home_Sports_News";
import Latest_News from "./Component/Latest_News";
import Home_Entertainment_News from "./Component/Home_Entertainment_News";
import Footer from "./Component/Footer";
import InsightVideo from "./Component/InsightVideo";
import Politics from "./Component/Politics";
import National from "./Component/National";
import International from "./Component/International";
import Bussines from "./Component/Bussines";
import Sports from "./Component/Sports";
import Editoral from "./Component/Editoral";
import Fashion from "./Component/Fashion";
import Health from "./Component/Health";
import Travel from "./Component/Travel";
import FactCheck from "./Component/FactCheck";
import Latest_enter from "./Component/Latest_enter";
import Film_review from "./Component/Film_review";
import Audio from "./Component/Audio";
import Jobs from "./Component/Jobs";
import Current_Affair from "./Component/Current_Affair";
import Mass_comm from "./Component/Mass_comm";
import Miscal from "./Component/Miscal";
import Donate from "./Component/Donate";

// ✅ Component to auto-scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

// ✅ Main content: Home vs other routes
function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <main className="flex flex-col gap-6 px-2 sm:px-4 md:px-6 lg:px-12">
      {isHome ? (
        <>
          <Advertisement />
          <Main_News_Section />
          <Home_Trending_News />
          <Home_Sports_News />
          <Home_Entertainment_News />
        </>
      ) : (
        <Routes>
          <Route path="/latest-news" element={<Latest_News />} />
          <Route path="/insight" element={<InsightVideo />} />
          <Route path="/current" element={<Current_Affair />} />
          <Route path="/masscomm" element={<Mass_comm />} />
          <Route path="/politics" element={<Politics />} />
          <Route path="/national" element={<National />} />
          <Route path="/international" element={<International />} />
          <Route path="/bussines" element={<Bussines />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/editoral" element={<Editoral />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/health" element={<Health />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/factcheck" element={<FactCheck />} />
          <Route path="/latest_enter" element={<Latest_enter />} />
          <Route path="/film_review" element={<Film_review />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/miscal" element={<Miscal />} />
          {/* <Route path="/donate" element={<Donate />} /> */}
        </Routes>
      )}
    </main>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ Auto scroll on route change */}
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Sticky Header + MenuBar */}
        <div className="sticky top-0 z-50 bg-white shadow-md">
          <Header />
          <MenuBar />
        </div>

        {/* Main content grows and scrolls */}
        <div className="flex-grow pt-4">
          <MainContent />
        </div>

        {/* Footer stays at bottom (only visible after scroll end) */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
