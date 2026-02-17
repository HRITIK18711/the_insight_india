import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Travel Guide", path: "/" },
    { name: "Web Stories", path: "/webstories" },
    { name: "Events", path: "/" },
    { name: "About us", path: "/" },
    
  ];

  const destinations = ["Delhi", "Uttarakhand", "Uttar Pradesh"];

  return (
    <>
      <nav
        className={`fixed  left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[1000] transition-all duration-500 rounded-full border ${
          scrolled || isOpen
            ? "bg-black shadow-xl border-slate-100"
            : "bg-black/60 backdrop-blur-md border-white/20"
        } py-2 md:py-3`}
      >
        <div className="px-6 flex justify-between items-center">
          
          <Link to="/" className="flex items-center gap-2 z-[1010]">
            <img
              src="/Image/logo1.png"
              alt="logo"
              className="w-20 md:w-32 h-12 md:h-14 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            
            {/* Home */}
            <Link
              to="/"
              className="px-4 py-2 text-sm font-bold text-white hover:text-[#FF6B35] transition-all"
            >
              Home
            </Link>

            {/* Destination Dropdown */}
            <div className="relative group px-4 py-2 text-sm font-bold text-white cursor-pointer flex items-center gap-1 hover:text-[#FF6B35] transition-all">
              <span>Destination</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />

              <div className="absolute top-full left-0 pt-4 hidden group-hover:block transition-all">
                <ul className="w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                  {destinations.map((city) => (
                    <li key={city}>
                      <Link
                        to={`/destination/${city.toLowerCase().replace(" ", "-")}`}
                        className="block px-5 py-3 text-sm font-medium text-slate-700 hover:bg-orange-50 hover:text-[#FF6B35] transition-colors"
                      >
                        {city}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Other Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="px-4 py-2 text-sm font-bold text-white hover:text-[#FF6B35] transition-all"
              >
                {link.name}
              </Link>
            ))}

            {/* CTA */}
            {/* <Link
              to="/donate"
              className="ml-4 px-6 py-2.5 bg-[#FF6B35] text-white text-sm font-extrabold rounded-full hover:bg-[#e85a20] hover:scale-105 transition-all shadow-lg shadow-orange-200"
            >
              Book Now
            </Link> */}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-white rounded-full z-[1010]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 h-screen bg-[#4198db] z-[999] lg:hidden pt-28 px-8 pb-10 flex flex-col justify-between"
          >
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center justify-between py-4 px-4 rounded-2xl text-white hover:bg-white/10 transition-all"
                >
                  <span className="text-xl font-bold">{link.name}</span>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                to="/donate"
                className="w-full py-4 bg-[#FF6B35] text-white text-center text-lg font-black rounded-2xl shadow-lg block"
              >
                Book Your Trip Now
              </Link>
              <p className="text-center text-white text-[10px] font-bold tracking-widest uppercase">
                RU Explore • Travel with Passion
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuBar;