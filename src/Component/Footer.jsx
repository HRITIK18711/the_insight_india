import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#050028] text-white pt-12 pb-6 relative">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">THE INSIGHT INDIA</h2>
          <img src="/Image/l1.png" alt="" className="w-80 h-40" />
          <p className="text-gray-300">
            Thank you for visiting our official News Portal website.
            Connect with us over socials.
          </p>

          <h3 className="mt-4 font-semibold">Our Patner:</h3>

          {/* Logos in a row */}
          <div className="w-30 h-35 md:w-35 md:h-35 flex flex-row space-x-4 mt-2">
            <img
              src="/Image/newl2.png"
              className="w-full h-full object-contain rounded-full bg-white p-1"
              alt="Logo1"
            />
            <img
              src="/Image/l3.jpg"
              className="w-full h-full object-contain rounded-full p-1"
              alt="Logo2"
            />
          </div>
        </div>


        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-3">
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/">Home</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/latest-news">Trending</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/insight">Insight Video</Link></li>
            <li className="hover:text-yellow-400 cursor-pointer"><Link to="/travel">Travel</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="flex items-center gap-3 mb-3">
            <FaPhoneAlt className="text-yellow-400" /> +91 9795145504
          </p>
          <p className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-yellow-400" /> insight22@gmail.com
          </p>
          <p className="flex items-center gap-3 mb-5">
            <FaMapMarkerAlt className="text-yellow-400" />
            Sector 8, Indira Nagar, Lucknow, Uttar Pradesh 226016
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <h1 className="whitespace-nowrap text-lg font-semibold">
              Follow Us on:
            </h1>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-white"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div className="absolute right-8 bottom-8">
        <a
          href="#top"
          className="bg-yellow-500 hover:bg-yellow-600 text-black p-3 rounded-full"
        >
          ↑
        </a>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        <span className="text-yellow-400 font-semibold">Developed By:</span>{" "}
        Hritik Upadhyay
      </div>
    </footer>
  );
};

export default Footer;
