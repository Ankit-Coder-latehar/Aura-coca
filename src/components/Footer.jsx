import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, Clock, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F3D26] text-white pt-16 pb-8 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative leaf SVGs in footer */}
      <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
        <svg className="w-80 h-80" viewBox="0 0 100 100" fill="currentColor">
          <path d="M10,90 Q50,50 90,10 Q60,40 10,90" />
          <path d="M20,90 Q50,60 80,30" stroke="currentColor" strokeWidth="2" fill="none" />
          <path d="M30,90 Q50,70 70,50" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        
        {/* Brand Block */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <svg className="w-10 h-10 text-brandgreen" viewBox="0 0 100 100" fill="currentColor">
              <circle cx="50" cy="53" r="38" fill="#10B981" />
              <circle cx="50" cy="53" r="33" fill="#FCFBF7" />
              <path d="M45,20 C42,10 58,10 55,20 Z" fill="#D4AF37" />
              <rect x="58" y="10" width="4" height="30" transform="rotate(30 58 10)" fill="#0F3D26" />
            </svg>
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Aura <span className="text-brandgreen">coco</span>
            </span>
          </div>
          <p className="text-[#FCFBF7]/70 mb-6 leading-relaxed">
            Premium customized engraved tender coconuts bringing sustainable luxury and hydration to weddings, corporate functions, and events in Bangalore.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brandgreen p-3 rounded-full transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brandgreen p-3 rounded-full transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-brandgreen p-3 rounded-full transition-colors duration-300">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 text-brandgreen">Quick Links</h3>
          <ul className="space-y-4 text-[#FCFBF7]/80">
            {["Home", "Packages", "About Us", "Photos", "Our Partners", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item === "Home" ? "/" : `/${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-brandgreen transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2 text-brandgreen">•</span> {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 text-brandgreen">Contact Details</h3>
          <ul className="space-y-4 text-[#FCFBF7]/80">
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-brandgreen shrink-0" />
              <a href="tel:+917483261771" className="hover:text-brandgreen transition-colors">+91 74832 61771</a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-brandgreen shrink-0" />
              <a href="mailto:hello@auracoco.in" className="hover:text-brandgreen transition-colors break-all">hello@auracoco.in</a>
            </li>
            <li className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-brandgreen shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Working Hours:</p>
                <p className="text-sm text-[#FCFBF7]/70">Mon - Fri: 08:30 - 20:00</p>
                <p className="text-sm text-[#FCFBF7]/70">Sat - Sun: 09:30 - 21:30</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Location / CTA */}
        <div>
          <h3 className="font-serif text-xl font-bold mb-6 text-brandgreen">Event Location</h3>
          <p className="text-[#FCFBF7]/70 mb-4">
            Serving all wedding venues, luxury hotels, convention centers, and private residences in Bangalore and surrounding areas.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-xs text-[#FCFBF7]/60 uppercase tracking-widest mb-1">Status</p>
            <p className="text-sm font-semibold text-brandgreen flex items-center">
              <span className="w-2.5 h-2.5 bg-brandgreen rounded-full inline-block mr-2 animate-pulse"></span>
              Booking Events for 2026/2027
            </p>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#FCFBF7]/50 relative z-10">
        <p>© 2026 Aura coco. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link to="/privacy" className="hover:text-brandgreen transition-colors">Privacy Policy</Link>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 hover:text-brandgreen transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
