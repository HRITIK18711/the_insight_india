import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const MenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Scroll effect for sticky navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Travel Guide", path: "/editoral" },
    { name: "Hotels", path: "/travel" },
    { name: "Blog", path: "/factcheck" },
    { name: "About us", path: "/audio" },
    { name: "Contact us", path: "/jobs" },
  ];

  const destinations = ["Uttrakhand", "Delhi", "Uttar Pradesh"];

  return (
    <>
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-[1000] transition-all duration-500 rounded-full border ${scrolled || isOpen
            ? "bg-white shadow-xl border-slate-100"
            : "bg-white/90 backdrop-blur-md border-white/20"
          } py-2 md:py-3`}
      >
        <div className="px-6 flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2 z-[1010]">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900 uppercase">
              RU <span className="text-[#FF6B35]">Explore</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Home Link */}
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-bold transition-all ${location.pathname === "/" ? "text-[#FF6B35]" : "text-slate-600 hover:text-[#FF6B35]"
                }`}
            >
              Home
            </Link>

            {/* Destination Dropdown */}
            {/* Destination Dropdown */}
            <div className="relative group px-4 py-2 text-sm font-bold text-slate-600 cursor-pointer flex items-center gap-1 hover:text-[#FF6B35] transition-all">
              <span>Destination</span>
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />

              {/* --- Invisible Bridge & Dropdown Container --- */}
              <div className="absolute top-full left-0 pt-4 hidden group-hover:block transition-all">
                {/* pt-4 yahan "bridge" ka kaam karega taaki menu band na ho */}

                <ul className="w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
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

            {/* Dynamic Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 text-sm font-bold transition-all relative group ${location.pathname === link.path ? "text-[#FF6B35]" : "text-slate-600 hover:text-[#FF6B35]"
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              to="/donate"
              className="ml-4 px-6 py-2.5 bg-[#FF6B35] text-white text-sm font-extrabold rounded-full hover:bg-[#e85a20] hover:scale-105 transition-all shadow-lg shadow-orange-200"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-slate-900 hover:bg-slate-50 rounded-full z-[1010]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="text-[#FF6B35]" /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[999] lg:hidden pt-28 px-8 pb-10 flex flex-col justify-between"
          >
            <div className=" bg-white w-full space-y-1">
              <p className="text-[10px] font-black tracking-[0.2em] text-slate-400 uppercase mb-4 ml-2">
                Explore Destinations
              </p>

              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between py-4 px-4 rounded-2xl transition-all ${location.pathname === link.path ? "bg-orange-50 text-[#FF6B35]" : "text-slate-800"
                    }`}
                >
                  <span className="text-xl font-bold">{link.name}</span>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>

            <div className="space-y-4">
              <Link
                to="/donate"
                className="w-full py-4 bg-[#FF6B35] text-white text-center text-lg font-black rounded-2xl shadow-lg shadow-orange-100 block"
              >
                Book Your Trip Now
              </Link>
              <p className="text-center text-slate-400 text-[10px] font-bold tracking-widest uppercase">
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