import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // GSAP animation for mobile menu
  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.2, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [isOpen]);

  const activeClass = (path) =>
    location.pathname === path
      ? "text-brandgreen font-semibold border-b-2 border-brandgreen"
      : "text-darkbrown hover:text-brandgreen transition-all duration-300 font-medium";

  return (
    <nav className="sticky top-0 z-50 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-[#0F3D26]/5 py-4 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Desktop Left Links */}
        <div className="hidden lg:flex items-center space-x-8 w-1/3 justify-end pr-8">
          <Link to="/" className={activeClass("/")}>Home</Link>
          <Link to="/packages" className={activeClass("/packages")}>Packages</Link>
          <Link to="/about" className={activeClass("/about")}>About Us</Link>
        </div>

        {/* Center Logo */}
        <div className="flex items-center justify-between lg:justify-center w-full lg:w-1/3">
          <Link to="/" className="flex items-center space-x-2">
            {/* Coconut Logo Icon SVG */}
            <svg className="w-10 h-10 text-brandgreen animate-bounce-slow" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="53" r="38" fill="#10B981" />
              <circle cx="50" cy="53" r="33" fill="#0F3D26" />
              <path d="M45,20 C42,10 58,10 55,20 Z" fill="#D4AF37" />
              {/* Straw */}
              <rect x="58" y="10" width="4" height="30" transform="rotate(30 58 10)" fill="#FCFBF7" />
              <rect x="58" y="10" width="4" height="8" transform="rotate(30 58 10)" fill="#E11D48" />
              <circle cx="38" cy="45" r="4" fill="#FCFBF7" opacity="0.8" />
              <circle cx="48" cy="38" r="3" fill="#FCFBF7" opacity="0.8" />
            </svg>
            <span className="font-serif text-2xl font-bold tracking-tight text-darkbrown">
              Aura <span className="text-brandgreen">coco</span>
            </span>
          </Link>

          {/* Hamburger (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-darkbrown hover:text-brandgreen transition-colors"
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
        <div className="hidden xl:flex items-center">
          <a
            href="tel:+917483261771"
            className="flex items-center space-x-2 bg-[#0F3D26] hover:bg-brandgreen text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4" />
            <span>Call +91 74832 61771</span>
          </a>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full md:w-80 bg-[#FCFBF7] shadow-2xl z-40 lg:hidden flex flex-col p-8 transform translate-x-full border-l border-[#0F3D26]/10"
      >
        <div className="flex justify-end mb-8">
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 text-darkbrown hover:text-brandgreen"
          >
            <X className="w-8 h-8" />
          </button>
        </div>

        <div className="flex flex-col space-y-6 text-xl font-serif">
          {["Home", "Packages", "About Us", "Photos", "Our Partners", "Contact"].map((item, index) => {
            const path = item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`;
            return (
              <Link
                key={item}
                ref={(el) => (linksRef.current[index] = el)}
                to={path}
                className={`py-2 border-b border-[#0F3D26]/5 ${
                  location.pathname === path ? "text-brandgreen font-bold" : "text-darkbrown"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto">
          <a
            href="tel:+917483261771"
            className="flex items-center justify-center space-x-2 bg-brandgreen hover:bg-[#0F3D26] text-white py-3 rounded-xl font-semibold transition-colors shadow-md"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
