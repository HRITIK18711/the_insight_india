import React, { useEffect, useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {

  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    fetch("https://ruexplores.goatcounter.com/counter/TOTAL.json")
      .then((res) => res.json())
      .then((data) => {
        setVisitors(data.count);
      })
      .catch(() => {
        setVisitors("0");
      });
  }, []);

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: "url('/Image/footer_02.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Left */}
          <div>
            <img src="/Image/logo1.png" alt="logo" className="w-72 h-32 mb-4" />
            <p className="text-gray-200">
              Thank you for visiting our official Travel website.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Quick Links
            </h2>

            <ul className="space-y-3">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/disc">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-yellow-400">
              Contact Us
            </h2>

            <p className="flex items-center gap-3 mb-4 text-gray-200">
              <FaEnvelope className="text-yellow-400" />
              ruexplores02@gmail.com
            </p>

            {/* Social */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/share/1HfU1MdzLm/" className="p-3 bg-black/60 rounded-full">
                <FaFacebookF />
              </a>

              <a href="#" className="p-3 bg-black/60 rounded-full">
                <FaInstagram />
              </a>

              <a href="https://www.youtube.com/@theinsightindia" className="p-3 bg-black/60 rounded-full">
                <FaYoutube />
              </a>
            </div>

            {/* Visitor Counter */}
            <div className="text-lg font-semibold text-yellow-400">
              👁 Visitors: {visitors}
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;