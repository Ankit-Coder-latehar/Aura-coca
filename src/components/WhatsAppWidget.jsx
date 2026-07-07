import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "917483261771";
    const message = "Hi Aura coco! I'd like to inquire about booking customized tender coconuts for my event.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Message */}
      {showTooltip && (
        <div className="bg-white text-darkbrown px-4 py-3 rounded-2xl shadow-2xl border border-brandgreen/10 mb-3 max-w-xs animate-fade-in relative transition-all duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-1.5 right-1.5 text-gray-400 hover:text-gray-600 p-0.5 rounded-full"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <p className="text-xs font-semibold text-brandgreen mb-0.5">Aura coco Concierge</p>
          <p className="text-sm font-medium leading-tight">🌴 Let's plan your custom event coconuts! Chat now.</p>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={openWhatsApp}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-brandgreen-dark"></span>
        </span>
        <MessageCircle className="w-7 h-7" />
      </button>
    </div>
  );
}
