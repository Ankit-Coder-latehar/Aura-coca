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
    } else {
      document.body.classList.remove("menu-open");
      gsap.to(menuRef.current, {
        x: "100%",
        duration: 0.4,
        ease: "power3.in",
      });
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isOpen]);

  const activeClass = (path) =>
    location.pathname === path
      ? "text-brandgreen font-semibold border-b-2 border-brandgreen text-lg md:text-xl"
      : "text-darkbrown hover:text-brandgreen transition-all duration-300 font-medium text-lg md:text-xl";

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
          <Link to="/" className="flex items-center space-x-3">
            <img src="/Screenshot 2026-07-07 154733.png" alt="logo" className="w-12 h-12 md:w-14 md:h-14 object-contain rounded-full" />
            <span className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-darkbrown">
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
        <div className="hidden xl:flex items-center flex-shrink-0">
          <a
            href="tel:+917483261771"
            className="flex items-center space-x-2 bg-[#0F3D26] hover:bg-brandgreen text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span className="whitespace-nowrap">Call +91 74832 61771</span>
          </a>
        </div>
      </div>

      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Drawer Navigation */}
      <div
        ref={menuRef}
        className="fixed inset-y-0 right-0 w-full md:w-80 shadow-2xl z-50 lg:hidden flex flex-col p-8 transform translate-x-full border-l border-[#0F3D26]/10"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          pointerEvents: isOpen ? "auto" : "none",
          backgroundColor: "#ffffff"
        }}
      >
        <div className="flex justify-between items-center mb-8">
          <span className="font-serif text-xl font-bold text-darkbrown">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-[#0F3D26]/5 text-darkbrown hover:text-brandgreen transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col space-y-4 text-lg font-serif">
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
                className={`py-3 border-b border-[#0F3D26]/5 transition-all duration-300 flex items-center justify-between ${isActive ? "text-brandgreen font-bold pl-2" : "text-darkbrown hover:text-brandgreen hover:pl-2"
                  }`}
              >
                <span>{item}</span>
                <span className={`text-xs transition-transform duration-300 ${isActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>➔</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-auto pt-6">
          <a
            href="tel:+917483261771"
            className="flex items-center justify-center space-x-2 bg-brandgreen hover:bg-[#0F3D26] text-white py-3.5 rounded-xl font-semibold transition-colors shadow-md hover:shadow-lg"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
