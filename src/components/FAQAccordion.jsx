import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="glass-card border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 text-left font-serif text-lg font-bold text-[#ECEFEF] hover:text-gold transition-colors duration-300"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-gold transition-transform duration-500 shrink-0 ml-4 ${
                  isOpen ? "transform rotate-180" : ""
                }`}
              />
            </button>

            {/* Answer wrapper with smooth max-height transition */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-96 opacity-100 border-t border-white/5" : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <div className="p-6 text-[#ECEFEF]/80 leading-relaxed text-base font-normal">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
