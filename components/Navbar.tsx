import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { NAV_LINKS } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-maroon/95 backdrop-blur-md py-4 border-white/10 shadow-lg"
            : "bg-transparent py-6 border-transparent"
        }
        ${
          location.pathname !== "/"
            ? "bg-maroon/95 backdrop-blur-md py-4 border-white/10 shadow-lg"
            : ""
        }

        `}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gold/10 rounded-full group-hover:bg-gold/20 transition-colors">
              <UtensilsCrossed className="w-6 h-6 text-gold" />
            </div>
            <span
              className={`text-2xl font-serif font-bold tracking-wider ${isScrolled ? "text-white" : "text-white"}`}
            >
              NAVRATNA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide transition-colors relative group ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? "w-full" : ""}`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-40 bg-maroon flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-3xl font-serif text-white hover:text-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/menu" className="mt-8">
              <Button>Order Online</Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
