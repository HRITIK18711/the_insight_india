import React from "react";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
    <nav className="w-full bg-white border text-black shadow-md mt-35 z-40">
      <ul className="flex flex-wrap items-center justify-center gap-6 py-4 font-bold">
        <Link
          to="/"
          className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"
        >
          Home
        </Link>
        <Link
          to="/latest-news"
          className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"
        >
          Trending
        </Link>
        <Link to="/insight " className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200">
          Insight Videos
        </Link>

        {/* News Digest Dropdown */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-blue-600 hover:text-xl transition-all duration-200">
            News Digest
          </span>
          <ul className="absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white rounded shadow-lg w-40 z-50 font-normal">
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/politics">Politics</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/national">National</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/international">International</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/bussines">Business</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/sports">Sports</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/miscal">Miscellaneous</Link></li>
          </ul>
        </li>

        <li className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"><Link to="/editoral">Editorial</Link></li>

        {/* Lifestyle Dropdown */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-blue-600 hover:text-xl transition-all duration-200">Lifestyle</span>
          <ul className="absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white rounded shadow-lg w-36 z-50 font-normal">
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/fashion">Fashion</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/health">Health</Link></li>
          </ul>
        </li>

        <li className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"><Link to="/travel">Travel</Link></li>
        <li className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"><Link to="/factcheck">Fact-Check</Link></li>

        {/* Entertainment Dropdown */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-blue-600 hover:text-xl transition-all duration-200">Entertainment</span>
          <ul className="absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white rounded shadow-lg w-44 z-50 font-normal">
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/latest_enter">Latest Releases</Link></li>
            <li className="hover:bg-gray-100 hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/film_review">Film Reviews</Link></li>
          </ul>
        </li>
 
        <li className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"><Link to="/audio">Audio</Link></li>
        <li className="hover:text-blue-600 hover:text-xl cursor-pointer transition-all duration-200"><Link to="/jobs">Jobs</Link></li>

        {/* Notes Dropdown */}
        <li className="relative group cursor-pointer">
          <span className="hover:text-blue-600 hover:text-xl transition-all duration-200">Notes</span>
          <ul className="absolute left-0 top-full hidden group-hover:block group-focus-within:block bg-white text-black rounded shadow-lg w-48 z-50 font-normal">
            <li className="hover:bg-white hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/masscomm" >Mass Comm</Link></li>
            <li className="hover:bg-white hover:text-xl transition-all duration-200 px-3 py-2"><Link to="/current" >Current Affairs</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}