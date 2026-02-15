import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

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
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Left Section */}
          <div>
            {/* <h2 className="text-2xl font-bold mb-4 text-yellow-400 tracking-wide">
              RU EXPLORES
            </h2> */}
            <img src="/Image/logo1.png" alt="logo" className="w-72 h-32 mb-4" />
            <p className="text-gray-200 leading-relaxed">
              Thank you for visiting our official Travel website.
              Stay connected with us on social media for the latest updates.
            </p>

            {/* <h3 className="mt-6 font-semibold text-lg text-yellow-400">
              Our Partners
            </h3>
            <div className="flex items-center space-x-4 mt-3">
              <img
                src="/Image/newl2.png"
                className="w-14 h-14 object-contain rounded-full bg-white p-2 shadow-md"
                alt="Partner 1"
              />
              <img
                src="/Image/l3.jpg"
                className="w-14 h-14 object-contain rounded-full bg-white p-1 shadow-md"
                alt="Partner 2"
              />
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Quick Links
            </h2>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
              <li><Link to="/latest-news" className="hover:text-yellow-400">About us</Link></li>
              <li><Link to="/insight" className="hover:text-yellow-400">Vlogs</Link></li>
              <li><Link to="/donate" className="hover:text-yellow-400">Donate</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Contact Us
            </h2>
            <p className="flex items-center gap-3 mb-4 text-gray-200">
              <FaEnvelope className="text-yellow-400" /> ruexplores02@gmail.com
            </p>

            {/* Social Links */}
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

        {/* Footer Bottom */}
        {/* <div className="border-t border-white/30 py-4 text-center text-sm text-gray-300">
          <span className="text-yellow-400 font-semibold">Developed By:</span>{" "}
          Hritik Upadhyay
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
