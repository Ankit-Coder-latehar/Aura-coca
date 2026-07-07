import React, { useState, useEffect, useRef } from "react";
import { X, ZoomIn } from "lucide-react";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Photos() {
  const [activeImage, setActiveImage] = useState(null);
  const galleryRef = useRef(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?auto=format&fit=crop&w=800&q=80",
      caption: "Custom Couple Name & Monogram Engraving",
    },
    {
      url: "https://images.unsplash.com/photo-1568383211756-3408a287900b?auto=format&fit=crop&w=800&q=80",
      caption: "Fresh Green Organic Coconuts Farm Harvest",
    },
    {
      url: "https://images.unsplash.com/photo-1548543594-5ef912d09855?auto=format&fit=crop&w=800&q=80",
      caption: "Exotic Coconut Refreshments Counter",
    },
    {
      url: "https://images.unsplash.com/photo-1508002882312-32b0a3eb7fa4?auto=format&fit=crop&w=800&q=80",
      caption: "High-yield Coconut Palm Plantation Sourcing",
    },
    {
      url: "https://images.unsplash.com/photo-1562916892-db5ec3b5ba53?auto=format&fit=crop&w=800&q=80",
      caption: "Stall Setup & Rustic Coconut Displays",
    },
    {
      url: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?auto=format&fit=crop&w=800&q=80",
      caption: "Trimmed Coconuts Served on Wooden Event Stands",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      galleryRef.current.querySelectorAll(".gallery-item"),
      { opacity: 0, scale: 0.9, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen pt-12 pb-24 px-6 md:px-12">
      <FloatingLeaves />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#0F3D26]/5 text-[#0F3D26] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase inline-block border border-[#0F3D26]/10 mb-4">
            Visual Gallery
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkbrown mb-6">
            Event Highlights & Setups
          </h1>
          <p className="text-lg text-darkbrown/70 leading-relaxed">
            Take a look at how our custom coconuts, carts, and setups bring luxury hydration to Bangalore's celebrations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div ref={galleryRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setActiveImage(img)}
              className="gallery-item group relative overflow-hidden rounded-[30px] shadow-md hover:shadow-2xl cursor-pointer aspect-square bg-[#0F3D26]/5 border border-[#0F3D26]/10"
            >
              {/* Photo Background */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${img.url}')` }}
              ></div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#0F3D26]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <ZoomIn className="w-8 h-8 text-brandgreen mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                <p className="font-serif text-lg font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 md:p-8 animate-fade-in">
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 text-white hover:text-brandgreen p-2 rounded-full cursor-pointer z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-[80vh] flex flex-col items-center">
              <img
                src={activeImage.url}
                alt={activeImage.caption}
                className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl border border-white/10"
              />
              <p className="text-white text-center mt-6 font-serif text-xl font-medium tracking-wide">
                {activeImage.caption}
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
