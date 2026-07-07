import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Info, Calendar } from "lucide-react";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Packages() {
  const cardsRef = useRef([]);

  const packages = [
    {
      name: "Package A",
      count: "100 Custom Coconuts",
      features: [
        "100 Custom Engraved Coconuts",
        "Bio-degradable Straws & Tissues",
        "Mini Coconut Decorative Umbrellas",
        "Elegant Coconut Table Décor",
        "Coco Cart Set Up (Aligned with theme)",
        "1 Professional Coco Assistant",
      ],
      recommended: false,
    },
    {
      name: "Package B",
      count: "200 Custom Coconuts",
      features: [
        "200 Custom Engraved Coconuts",
        "Bio-degradable Straws & Tissues",
        "Mini Coconut Decorative Umbrellas",
        "Elegant Coconut Table Décor",
        "Coco Cart Set Up (Aligned with theme)",
        "1 Professional Coco Assistant",
        "Customized Straw Tags (Hashtag/Initials)",
      ],
      recommended: true,
    },
    {
      name: "DIY Package",
      count: "Only Coconuts & Basics",
      features: [
        "Custom Engraved Coconuts",
        "Bio-degradable Straws",
        "Plain Tissues",
        "Mini Coconut Decorative Umbrellas",
        "Delivered directly to your venue",
        "No cart setup or assistant included",
      ],
      recommended: false,
    },
    {
      name: "DIY Décor Package",
      count: "Coconuts + Stall Rental",
      features: [
        "Custom Engraved Coconuts",
        "Bio-degradable Straws & Tissues",
        "Mini Coconut Decorative Umbrellas",
        "Stall/Cart rental & rustic event props",
        "Theme decorations",
        "1 Coco Assistant to handle openings",
      ],
      recommended: false,
    },
    {
      name: "DIY Coco Assistant",
      count: "Coconuts + Assistant",
      features: [
        "Custom Engraved Coconuts",
        "Bio-degradable Straws & Tissues",
        "Mini Coconut Decorative Umbrellas",
        "1 Coco Assistant for hygienic cutting",
        "Standard tablespace décor",
        "No cart rental included",
      ],
      recommended: false,
    },
    {
      name: "Brand Partnerships",
      count: "For Hotels & Resorts",
      features: [
        "Weekly/Monthly bulk supply of Coconuts",
        "Hotel/Resort logo stamp engraving",
        "Welcome drink alternative for premium lobbies",
        "Eco-friendly guest greetings",
        "Custom billing cycles",
      ],
      recommended: false,
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative min-h-screen pt-12 pb-24 px-6 md:px-12">
      <FloatingLeaves />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-[#0F3D26]/5 text-[#0F3D26] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase inline-block border border-[#0F3D26]/10 mb-4">
            Curated Offerings
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkbrown mb-6">
            Event Packages & Pricing
          </h1>
          <p className="text-lg text-darkbrown/70 leading-relaxed">
            Select the perfect hydration package for your celebration. All coconuts feature food-safe laser customization.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`bg-white border rounded-[30px] p-8 relative flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 ${
                pkg.recommended ? "border-brandgreen ring-2 ring-brandgreen/20" : "border-[#0F3D26]/10"
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brandgreen text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-darkbrown mb-1">{pkg.name}</h3>
                <p className="text-sm font-semibold text-brandgreen mb-6">{pkg.count}</p>
                <div className="bg-[#FCFBF7] p-4 rounded-2xl border border-[#0F3D26]/5 mb-6 text-center">
                  <span className="text-xs uppercase tracking-widest text-darkbrown/50 block mb-1">Pricing</span>
                  <span className="text-xl font-bold text-[#0F3D26]">Price on Request</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-darkbrown/85">
                      <Check className="w-4 h-4 text-brandgreen shrink-0 mt-0.5 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className={`w-full py-3.5 rounded-full font-bold text-center block transition-all duration-300 ${
                  pkg.recommended
                    ? "bg-brandgreen hover:bg-[#0F3D26] text-white shadow-lg shadow-brandgreen/20"
                    : "bg-[#0F3D26] hover:bg-brandgreen text-white"
                }`}
              >
                Book Package
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimers Box */}
        <div className="bg-[#0F3D26]/5 border border-[#0F3D26]/10 rounded-3xl p-6 md:p-8 mt-16 max-w-4xl mx-auto flex items-start space-x-4">
          <Info className="w-6 h-6 text-brandgreen shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed text-darkbrown/80">
            <h4 className="font-bold text-darkbrown mb-1">Important Rental & Setup Details:</h4>
            <ul className="list-disc pl-4 space-y-1 text-xs md:text-sm">
              <li><strong>Transportation:</strong> Charged on actuals based on the distance to the venue.</li>
              <li><strong>Packaging Costs:</strong> A 5% packaging fee is added on the total transaction amount.</li>
              <li><strong>Coconut Shell Disposal:</strong> Must be managed and carried out by the service taker / event planners according to local municipal guidelines.</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
