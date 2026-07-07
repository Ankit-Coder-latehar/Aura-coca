import React, { useEffect, useRef } from "react";
import { Handshake, Star, CheckCircle } from "lucide-react";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Partners() {
  const contentRef = useRef(null);

  const partners = [
    { name: "JW Marriott Bangalore", type: "Luxury Hotel Venue" },
    { name: "The Leela Palace Bangalore", type: "Palatial Event Venue" },
    { name: "Taj West End", type: "Heritage Wedding Venue" },
    { name: "Shangri-La Hotel", type: "Corporate Retreat Location" },
    { name: "3Production Weddings", type: "Bespoke Event Planners" },
    { name: "Pledge to Be Green", type: "Eco-Friendly Supplier Partner" },
  ];

  useEffect(() => {
    gsap.fromTo(
      contentRef.current.children,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen pt-12 pb-24 px-6 md:px-12">
      <FloatingLeaves />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#0F3D26]/5 text-[#0F3D26] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase inline-block border border-[#0F3D26]/10 mb-4">
            Collaborations
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkbrown mb-6">
            Our Partners
          </h1>
          <p className="text-lg text-darkbrown/70 leading-relaxed">
            Working hand-in-hand with Bangalore's leading wedding planners, luxury caterers, and premium hotel brands.
          </p>
        </div>

        {/* Story Section */}
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex flex-col space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown leading-tight">
              Sustaining Partnerships, Serving Premium Quality
            </h2>
            <p className="text-darkbrown/80 leading-relaxed">
              At Aura coco, we believe in synergy. We work closely with event planners and coordinators to ensure that our setups merge seamlessly with the overall design, color theme, and layout of the celebration. 
            </p>
            <p className="text-darkbrown/80 leading-relaxed">
              Whether it is setting up next to an elegant banquet lawn at the Taj West End or custom-coordinating with wedding designers to drape our coco carts in matching floral garlands, we ensure a perfect visual flow.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-center space-x-3 text-darkbrown/85">
                <CheckCircle className="w-5 h-5 text-brandgreen" />
                <span>Custom stall decoration matching theme floral patterns</span>
              </li>
              <li className="flex items-center space-x-3 text-darkbrown/85">
                <CheckCircle className="w-5 h-5 text-brandgreen" />
                <span>Punctual coordination with venue managers & banquet directors</span>
              </li>
              <li className="flex items-center space-x-3 text-darkbrown/85">
                <CheckCircle className="w-5 h-5 text-brandgreen" />
                <span>Hygienic setup adhering to 5-star hospitality standards</span>
              </li>
            </ul>
          </div>

          {/* Grid of Partners */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#0F3D26]/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-brandgreen/10 text-brandgreen w-10 h-10 rounded-lg flex items-center justify-center mb-4">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-darkbrown mb-1">{partner.name}</h3>
                <p className="text-xs text-brandgreen font-medium uppercase tracking-wider">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action for planners */}
        <div className="bg-[#0F3D26] text-white rounded-[30px] p-8 md:p-12 text-center shadow-xl">
          <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">Are you an Event Planner or Venue Manager?</h2>
          <p className="text-[#FCFBF7]/80 max-w-2xl mx-auto mb-6 text-sm md:text-base">
            Partner with us to offer your clients an eco-friendly welcome refreshment upgrade. We provide special pricing rates and priority scheduling for recurring planner partners.
          </p>
          <a
            href="mailto:hello@auracoco.in?subject=Partnership Enquiry"
            className="bg-brandgreen hover:bg-white hover:text-darkgreen text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-md inline-block"
          >
            Inquire for Partnerships
          </a>
        </div>

      </div>
    </div>
  );
}
