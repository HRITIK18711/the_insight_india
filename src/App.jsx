// news_portal App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Component/Header';
import MenuBar from './Component/MenuBar';
import Advertisement from './Component/Advertisment';
import Main_News_Section from './Component/Main_News_Section';
import Home_Trending_News from './Component/Home_Trending_News';
import Home_Sports_News from './Component/Home_Sports_News';
import Latest_News from './Component/Latest_News';
import Home_Entertainment_News from './Component/Home_Entertainment_News';
import Footer from './Component/Footer';
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
import Mass_comm from './Component/Mass_comm';
import Miscal from "./Component/Miscal";

function MainContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      {isHome ? (
        // Homepage Layout
        <>
          {/* <MenuBar /> */}
          <Advertisement />
          <Main_News_Section />
          <Home_Trending_News />
          <Home_Sports_News />
          <Home_Entertainment_News />
          
        </>
      ) : (
        // Other Routes
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
        </Routes>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <MenuBar />
      <MainContent />
      <Footer/>
    </Router>
  );
}

export default App;
