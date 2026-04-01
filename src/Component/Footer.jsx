import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Visitor from "./Visitor";

const Footer = () => {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/Image/footer_02.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative bg-transparent">
        {/* 🔥 GRID UPDATED (4 columns now) */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* LEFT */}
          <div>
            <img src="/Image/logo1.png" alt="logo" className="w-72 h-32 mb-4" />
            <p className="text-gray-200 leading-relaxed">
              Thank you for visiting our official Travel website.
              Stay connected with us on social media for the latest updates.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-yellow-400">About</Link></li>
              <li><Link to="/latest-news" className="hover:text-yellow-400">Privacy Policy</Link></li>
              <li><Link to="/insight" className="hover:text-yellow-400">Disclaimer</Link></li>
              <li><Link to="/donate" className="hover:text-yellow-400">Donate</Link></li>
            </ul>
          </div>

          {/* 🔥 NEW SECTION (FROM IMAGE) */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Book Trek Packages
            </h2>
            <ul className="space-y-2 text-gray-200">
              <li><Link to="Kedar" className="hover:text-yellow-400">Kedarkantha Trek Pacakage</Link></li>
              <li><Link to="#" className="hover:text-yellow-400">Kedarnath Trek Pacakage</Link></li>
              <li><Link to="#" className="hover:text-yellow-400">Tungnath Trek Pacakage</Link></li>
              <li><Link to="#" className="hover:text-yellow-400">Adai Kilash Trek Packages</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Contact Us
            </h2>
            <p className="flex items-center gap-3 mb-4 text-gray-200">
              <FaEnvelope className="text-yellow-400" /> ruexplores02@gmail.com
            </p>

            <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/1HfU1MdzLm/" className="bg-black/60 hover:bg-yellow-500 transition p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" className="bg-black/60 hover:bg-yellow-500 transition p-3 rounded-full">
                <FaInstagram />
              </a>
              <a href="https://www.youtube.com/@theinsightindia" className="bg-black/60 hover:bg-yellow-500 transition p-3 rounded-full">
                <FaYoutube />
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/30 py-4 text-center text-sm text-gray-300">
          <Visitor />
        </div>
      </div>
    </footer>
  );
};

export default Footer;