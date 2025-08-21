import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to handle click and close menu
  const handleMenuClick = () => setMenuOpen(false);

  return (
    <nav
      className="
        w-full bg-white border text-black shadow-md 
        mt-[100px] md:mt-40   /* mobile ~100px, desktop ~160px */
        z-50 relative
      "
    >
      {/* Mobile toggle button */}
      <div className="flex justify-between items-center px-4 py-3 md:hidden">
        <h1 className="font-bold text-xl">Menu</h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menu List */}
      <ul
        className={`flex flex-col md:flex-row md:items-center md:justify-center gap-4 md:gap-6 font-bold 
        transition-all duration-300 
        ${menuOpen ? "block px-6 pb-6" : "hidden md:flex"}`}
      >
        <Link to="/" onClick={handleMenuClick} className="hover:text-blue-600 transition-all">Home</Link>
        <Link to="/latest-news" onClick={handleMenuClick} className="hover:text-blue-600 transition-all">Trending</Link>
        <Link to="/insight" onClick={handleMenuClick} className="hover:text-blue-600 transition-all">Insight Videos</Link>

        {/* News Digest Dropdown */}
        <li className="relative group">
          <span className="hover:text-blue-600 cursor-pointer">News Digest</span>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-40 z-50 font-normal">
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/politics" onClick={handleMenuClick}>Politics</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/national" onClick={handleMenuClick}>National</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/international" onClick={handleMenuClick}>International</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/bussines" onClick={handleMenuClick}>Business</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/sports" onClick={handleMenuClick}>Sports</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/miscal" onClick={handleMenuClick}>Miscellaneous</Link></li>
          </ul>
        </li>

        <li><Link to="/editoral" onClick={handleMenuClick} className="hover:text-blue-600">Editorial</Link></li>

        {/* Lifestyle Dropdown */}
        <li className="relative group">
          <span className="hover:text-blue-600 cursor-pointer">Lifestyle</span>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-36 z-50 font-normal">
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/fashion" onClick={handleMenuClick}>Fashion</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/health" onClick={handleMenuClick}>Health</Link></li>
          </ul>
        </li>

        <li><Link to="/travel" onClick={handleMenuClick} className="hover:text-blue-600">Travel</Link></li>
        <li><Link to="/factcheck" onClick={handleMenuClick} className="hover:text-blue-600">Fact-Check</Link></li>

        {/* Entertainment Dropdown */}
        <li className="relative group">
          <span className="hover:text-blue-600 cursor-pointer">Entertainment</span>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-44 z-50 font-normal">
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/latest_enter" onClick={handleMenuClick}>Latest Releases</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/film_review" onClick={handleMenuClick}>Film Reviews</Link></li>
          </ul>
        </li>

        <li><Link to="/audio" onClick={handleMenuClick} className="hover:text-blue-600">Audio</Link></li>
        <li><Link to="/jobs" onClick={handleMenuClick} className="hover:text-blue-600">Jobs</Link></li>

        {/* Notes Dropdown */}
        <li className="relative group">
          <span className="hover:text-blue-600 cursor-pointer">Notes</span>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-48 z-50 font-normal">
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/masscomm" onClick={handleMenuClick}>Mass Comm</Link></li>
            <li className="hover:bg-gray-100 px-3 py-2"><Link to="/current" onClick={handleMenuClick}>Current Affairs</Link></li>
          </ul>
        </li>

        {/* Donate Button */}
        <Link
          to="/donate"
          onClick={handleMenuClick}
          className="md:ml-6 px-6 py-3 bg-red-600 text-white font-extrabold text-lg rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300"
        >
          DONATE 
        </Link>
      </ul>
    </nav>
  );
}