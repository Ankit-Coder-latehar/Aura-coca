import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Award, ShieldAlert, HeartHandshake, ArrowRight } from "lucide-react";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function About() {
  const narrativeRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      narrativeRef.current.children,
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
            Our Story
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-darkbrown mb-6">
            About Aura coco
          </h1>
          <p className="text-lg text-darkbrown/70 leading-relaxed">
            Pioneering premium customized beverage experiences for modern Indian weddings and luxury corporate events.
          </p>
        </div>

        {/* Story Section */}
        <div ref={narrativeRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown leading-tight">
              Redefining Welcome Hydration with Style & Elegance
            </h2>
            <p className="text-darkbrown/80 leading-relaxed">
              Founded in Bangalore, Aura coco emerged from a simple desire: to replace generic welcomes like aerated syrups or bottled juices with pure, eco-friendly, and naturally refreshing tender coconut water. 
            </p>
            <p className="text-darkbrown/80 leading-relaxed">
              We elevated this humble tropical staple into a luxurious experience. By precision-engraving couple monograms, corporate branding logos, and custom wedding hashtags directly onto clean trimmed coconuts, we create an immediate visual wow-factor that sets the tone for premium events.
            </p>
            <div className="pt-4">
              <Link
                to="/contact"
                className="bg-brandgreen hover:bg-[#0F3D26] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 inline-flex items-center space-x-2 shadow-md"
              >
                <span>Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* About Image mockup */}
          <div className="relative flex justify-center">
            <div className="relative w-80 h-96 md:w-[450px] md:h-[500px] rounded-[40px] overflow-hidden shadow-2xl bg-[#0F3D26]/5 border border-[#0F3D26]/10">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/Screenshot 2026-07-07 154424.png')` }}
              >
                <div className="absolute inset-0 bg-[#0F3D26]/30 flex flex-col justify-end p-8 text-white">
                  <span className="font-serif text-sm italic">"Natural, Premium, & Unique Refreshments"</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars / Values Section */}
        <div className="bg-white/60 backdrop-blur-md rounded-[40px] p-8 md:p-16 border border-[#0F3D26]/5">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mb-3">Our Core Commitments</h2>
            <p className="text-darkbrown/70">The foundation of our luxurious event refreshment services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-[#FCFBF7] rounded-3xl border border-[#0F3D26]/5">
              <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">Pristine Hygiene</h3>
              <p className="text-sm text-darkbrown/75 leading-relaxed">
                Every coconut is pre-trimmed, cleaned, and handled by assistants wearing sanitary gloves and masks.
              </p>
            </div>

            <div className="text-center p-6 bg-[#FCFBF7] rounded-3xl border border-[#0F3D26]/5">
              <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">100% Sustainable</h3>
              <p className="text-sm text-darkbrown/75 leading-relaxed">
                Zero plastic. We serve drinks with organic bamboo or paper straws, maintaining a plastic-free counter footprint.
              </p>
            </div>

            <div className="text-center p-6 bg-[#FCFBF7] rounded-3xl border border-[#0F3D26]/5">
              <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold mb-2">High Quality Laser</h3>
              <p className="text-sm text-darkbrown/75 leading-relaxed">
                No inks or chemicals. Logo engraving is physically etched using precise thermal carbonization, keeping the drink inside entirely safe.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
