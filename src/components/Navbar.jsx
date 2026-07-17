import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Detect scroll to shrink navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Sync isRendered state when menu is opened
  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isOpen && menuRef.current) {
      document.body.classList.add("menu-open");
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.08, delay: 0.1, ease: "power2.out" }
      );
    } else if (!isOpen && isRendered && menuRef.current) {
      document.body.classList.remove("menu-open");
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          setIsRendered(false);
        }
      });
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen, isRendered]);

  const activeClass = (path) =>
    location.pathname === path
      ? "text-gold font-semibold relative py-1.5 text-[15px] md:text-[16px] tracking-wide transition-all after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1.5 after:h-1.5 after:rounded-full after:bg-gold"
      : "text-[#ECEFEF]/85 hover:text-gold font-medium relative py-1.5 text-[15px] md:text-[16px] tracking-wide transition-all duration-300 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-1.5 after:rounded-full after:bg-gold hover:after:w-1.5";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 md:px-8 py-3 transition-all duration-300">
      <div 
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full border border-white/10 bg-[#030806]/85 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.4)] ${
          scrolled ? "py-2.5 px-6 md:px-8 mt-1 border-white/15 bg-[#030806]/95" : "py-3.5 px-8 md:px-10 mt-3"
        }`}
      >
        {/* Desktop Left Links */}
        <div className="hidden lg:flex items-center space-x-8 w-1/3 justify-end pr-8">
          <Link to="/" className={activeClass("/")}>Home</Link>
          <Link to="/packages" className={activeClass("/packages")}>Packages</Link>
          <Link to="/about" className={activeClass("/about")}>About Us</Link>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-between lg:justify-center w-full lg:w-1/3">
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/Screenshot 2026-07-07 154733.png" 
              alt="logo" 
              className="w-10 h-10 md:w-11 md:h-11 object-contain rounded-full border border-white/10 group-hover:border-gold/30 transition-colors duration-300" 
            />
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight text-[#ECEFEF]">
              Aura <span className="bg-gradient-to-r from-brandgreen via-gold to-brandgreen bg-clip-text text-transparent group-hover:brightness-110 transition-all duration-300">coco</span>
            </span>
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#ECEFEF] hover:text-gold transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Right Links */}
        <div className="hidden lg:flex items-center space-x-8 w-1/3 justify-start pl-8">
          <Link to="/photos" className={activeClass("/photos")}>Photos</Link>
          <Link to="/partners" className={activeClass("/partners")}>Our Partners</Link>
          <Link to="/contact" className={activeClass("/contact")}>Contact</Link>
        </div>

        {/* Call CTA Button */}
        <div className="hidden xl:flex items-center flex-shrink-0">
          <a
            href="tel:+917483261771"
            className="flex items-center space-x-2 bg-gradient-to-r from-brandgreen to-brandgreen-dark hover:from-gold hover:to-gold hover:text-[#030806] text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-[0_5px_15px_rgba(16,185,129,0.2)] hover:shadow-[0_5px_20px_rgba(226,195,117,0.3)] whitespace-nowrap flex-shrink-0"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Call +91 74832 61771</span>
          </a>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Navigation */}
      {isRendered && (
        <div
          ref={menuRef}
          className="fixed inset-y-0 right-0 w-full md:w-80 shadow-2xl z-50 lg:hidden flex flex-col p-8 transform translate-x-full border-l border-white/10 bg-[#030806]/95 backdrop-blur-xl"
        >
          {/* Animated glow blobs inside drawer */}
          <div className="absolute top-1/4 left-1/2 w-48 h-48 bg-brandgreen/5 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 z-0" />
          <div className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gold/5 rounded-full blur-[60px] pointer-events-none -translate-x-1/2 z-0" />

          <div className="flex justify-between items-center mb-8 relative z-10">
            <span className="font-serif text-xl font-bold text-[#ECEFEF]">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-white/5 text-[#ECEFEF] hover:text-gold transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col space-y-4 text-lg font-serif relative z-10">
            {["Home", "Packages", "About Us", "Photos", "Our Partners", "Contact"].map((item, index) => {
              const pathMap = {
                "Home": "/",
                "Packages": "/packages",
                "About Us": "/about",
                "Photos": "/photos",
                "Our Partners": "/partners",
                "Contact": "/contact",
              };
              const path = pathMap[item] || "/";
              const isActive = location.pathname === path;
              return (
                <Link
                  key={item}
                  ref={(el) => (linksRef.current[index] = el)}
                  to={path}
                  className={`py-3 border-b border-white/5 transition-all duration-300 flex items-center justify-between ${
                    isActive ? "text-gold font-bold pl-2 border-gold/20" : "text-[#ECEFEF] hover:text-gold hover:pl-2"
                  }`}
                >
                  <span>{item}</span>
                  <span className={`text-xs transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0 text-gold" : "opacity-0 -translate-x-2"}`}>➔</span>
                </Link>
              );
            })}
          </div>

          <div className="mt-auto pt-6 relative z-10">
            <a
              href="tel:+917483261771"
              className="flex items-center justify-center space-x-2 bg-brandgreen hover:bg-gold hover:text-[#030806] text-white py-3.5 rounded-xl font-semibold transition-all duration-300 shadow-md"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
