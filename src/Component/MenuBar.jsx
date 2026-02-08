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
        
        {/* News Digest Dropdown */}
        <li className="relative group">
          <span className="hover:text-blue-600 cursor-pointer">Destination</span>
          <ul className="absolute left-0 top-full hidden group-hover:block bg-white rounded shadow-lg w-40 z-50 font-normal">
            <li className="hover:bg-red-400 px-3 py-2"><Link to="/" onClick={handleMenuClick}>Uttrakhand</Link></li>
            <li className="hover:bg-red-400 px-3 py-2"><Link to="/" onClick={handleMenuClick}>Delhi</Link></li>
            <li className="hover:bg-red-400 px-3 py-2"><Link to="/" onClick={handleMenuClick}>Uttar Pradesh</Link></li>
            
          </ul>
        </li>

        <li><Link to="/editoral" onClick={handleMenuClick} className="hover:text-blue-600">Travel Guide.</Link></li>
        <li><Link to="/travel" onClick={handleMenuClick} className="hover:text-blue-600">Hotels</Link></li>
        <li><Link to="/factcheck" onClick={handleMenuClick} className="hover:text-blue-600">Blog</Link></li>
        <li><Link to="/audio" onClick={handleMenuClick} className="hover:text-blue-600">About us</Link></li>
        <li><Link to="/jobs" onClick={handleMenuClick} className="hover:text-blue-600">Contact us</Link></li>

        {/* Donate Button */}
        {/* <Link
          to="/donate"
          onClick={handleMenuClick}
          className="md:ml-6 px-6 py-3 bg-red-600 text-white font-extrabold text-lg rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300"
        >
          Support Us 
        </Link> */}
        <Link
          to="/donate"
          onClick={handleMenuClick}
          className="md:ml-6 px-6 py-3 bg-red-600 text-white font-extrabold text-lg rounded-full shadow-lg hover:bg-red-700 hover:scale-105 transition-transform duration-300"
        >
Book Now        
</Link>

      </ul>
    </nav>
  );
}