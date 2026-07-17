import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Check, Info, Calendar, ArrowRight, Star } from "lucide-react";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Packages() {
  const cardsRef = useRef([]);
  const promoTextRef = useRef(null);
  const promoImgRef = useRef(null);

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
    // Promo animations
    if (promoTextRef.current) {
      gsap.fromTo(
        promoTextRef.current.children,
        { x: -40, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7, stagger: 0.15, ease: "power2.out" }
      );
    }
    if (promoImgRef.current) {
      gsap.fromTo(
        promoImgRef.current,
        { scale: 0.8, opacity: 0, rotate: 5 },
        { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.5)" }
      );
    }

    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power3.out", delay: 0.4 }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030806] text-[#ECEFEF] pt-32 pb-24 px-6 md:px-12">
      <FloatingLeaves />

      {/* Ambient background glows */}
      <div className="glow-blob w-96 h-96 bg-brandgreen/15 top-10 left-10"></div>
      <div className="glow-blob w-96 h-96 bg-gold/5 bottom-10 right-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Promo Hero Banner Section */}
        <div className="bg-white rounded-[40px] p-8 md:p-16 border border-slate-100 shadow-2xl relative overflow-hidden mb-20 max-w-7xl mx-auto z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Subtle background palm tree watermark */}
          <div className="absolute right-[5%] top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none w-[500px] h-[500px]">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#10B981] fill-current">
              <path d="M50,10 C55,30 75,40 90,40 C70,45 60,55 50,90 C40,55 30,45 10,40 C25,40 45,30 50,10 Z" />
            </svg>
          </div>

          <div ref={promoTextRef} className="flex flex-col items-start text-left z-10">
            {/* 100% Organic & Fresh Badge */}
            <span className="bg-[#E6F4EA] text-[#137333] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-block border border-[#C2E7C9] mb-6">
              100% Organic & Fresh
            </span>

            {/* Fresh Tender Coconut Heading */}
            <h2 className="font-sans text-5xl md:text-6xl font-black tracking-tight leading-tight text-slate-900 mb-6">
              Fresh Tender <br />
              <span className="text-[#10B981]">Coconut</span>
            </h2>

            {/* Description */}
            <p className="text-slate-600 text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium">
              Your day starts with our fresh tender coconut. Nature's perfect hydration delivered straight to your doorstep.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8 w-full sm:w-auto">
              <Link
                to="/contact"
                className="bg-[#78C247] hover:bg-[#66A838] text-white px-8 py-4 rounded-full font-bold text-center transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-[#78C247]/20 hover:-translate-y-0.5"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>
              <Link
                to="/contact"
                className="border border-slate-200 hover:border-slate-400 text-slate-800 px-8 py-4 rounded-full font-bold text-center transition-all duration-300 bg-white hover:bg-slate-50 hover:-translate-y-0.5"
              >
                Subscribe
              </Link>
            </div>

            {/* Reviews Star Pill */}
            <div className="flex items-center space-x-3">
              <div className="bg-[#E6F4EA] px-3.5 py-1.5 rounded-full flex items-center space-x-1 border border-[#C2E7C9]">
                <Star className="w-3.5 h-3.5 fill-[#137333] text-[#137333]" />
                <Star className="w-3.5 h-3.5 fill-[#137333] text-[#137333]" />
                <Star className="w-3.5 h-3.5 fill-[#137333] text-[#137333]" />
              </div>
              <span className="text-sm font-semibold text-slate-600">
                4.9/5 from over 100+ reviews
              </span>
            </div>
          </div>

          {/* Coconut Image illustration on the right */}
          <div ref={promoImgRef} className="relative flex justify-center lg:justify-end z-10">
            {/* Ambient circular soft background shadow */}
            <div className="absolute w-72 h-72 bg-brandgreen/5 rounded-full blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <img
              src="/two_tender_coconuts.png"
              alt="Fresh Tender Coconuts"
              className="w-full max-w-[440px] h-auto object-contain animate-float drop-shadow-[0_20px_45px_rgba(0,0,0,0.06)] relative z-10"
            />
          </div>
        </div>

        {/* Event Packages Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 pt-10">
          <span className="bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase inline-block border border-gold/20 mb-4">
            Curated Offerings
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#ECEFEF] mb-6">
            Event Packages & Pricing
          </h2>
          <p className="text-base text-[#ECEFEF]/70 leading-relaxed">
            Select the perfect hydration package for your celebration. All coconuts feature food-safe laser customization.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className={`glass-card border rounded-[30px] p-8 relative flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 ${
                pkg.recommended ? "border-gold ring-2 ring-gold/20" : "border-white/5"
              }`}
            >
              {pkg.recommended && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-[#030806] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-serif text-2xl font-bold text-[#ECEFEF] mb-1">{pkg.name}</h3>
                <p className="text-sm font-semibold text-brandgreen mb-6">{pkg.count}</p>
                <div className="bg-white/[0.02] p-4 rounded-2xl border border-white/5 mb-6 text-center">
                  <span className="text-xs uppercase tracking-widest text-[#ECEFEF]/50 block mb-1">Pricing</span>
                  <span className="text-xl font-bold text-gold">Price on Request</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-[#ECEFEF]/85">
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
                    ? "bg-brandgreen hover:bg-gold hover:text-[#030806] text-white shadow-lg shadow-brandgreen/20"
                    : "bg-white/5 hover:bg-brandgreen text-white border border-white/10 hover:border-transparent"
                }`}
              >
                Book Package
              </Link>
            </div>
          ))}
        </div>

        {/* Disclaimers Box */}
        <div className="glass-card border border-white/10 rounded-3xl p-6 md:p-8 mt-16 max-w-4xl mx-auto flex items-start space-x-4">
          <Info className="w-6 h-6 text-gold shrink-0 mt-0.5" />
          <div className="text-sm leading-relaxed text-[#ECEFEF]/80">
            <h4 className="font-bold text-gold mb-1">Important Rental & Setup Details:</h4>
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
