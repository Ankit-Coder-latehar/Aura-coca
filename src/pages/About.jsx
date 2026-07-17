import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Award, ShieldAlert, HeartHandshake, ArrowRight, Sparkles, Star, Calendar, TreePine, Flame, Snowflake, CheckCircle } from "lucide-react";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function About() {
  const [activeYear, setActiveYear] = useState("2023");
  const narrativeRef = useRef(null);

  const milestones = {
    "2023": {
      title: "The Germination",
      subtitle: "First Sourcing & Thermal Etch Trials",
      desc: "Aura-coca began in a backyard laboratory in Bangalore. We wanted to replace artificial mocktails with a healthy, premium alternative. We spent months testing thermal etching lasers on coconut shells without compromising the fresh coconut water inside, culminating in our first direct contract with organic farmers in Maddur.",
      stat: "1,000+ test shells",
      highlight: "Perfected safe thermal engraving."
    },
    "2024": {
      title: "Unveiling the Cart",
      subtitle: "First Luxury Hotel Collaborations",
      desc: "We introduced our signature Bamboo Tiki Bar counter at high-society welcome drinks in JW Marriott and The Leela Palace. Planners and banquets directors recognized the immediate visual 'wow' factor. We expanded our custom library to include corporate logos and complex wedding crests.",
      stat: "15,000+ coconuts shaven",
      highlight: "Partnered with 10+ hotel brands."
    },
    "2025": {
      title: "Sustained Scale",
      subtitle: "100% Eco-Friendly Framework",
      desc: "To honor our ecological commitment, we eliminated all plastics. We integrated bio-compostable bamboo straws, zero-waste shell disposal bags, and modular wooden carts. We partnered with over 40 destination wedding designers across South India.",
      stat: "35,000+ plastic straws avoided",
      highlight: "Achieved Net-Zero plastic footprints."
    },
    "2026": {
      title: "Aura Design Studio",
      subtitle: "The Gold Standard in Event Hydration",
      desc: "Today, Aura-coca is Bangalore's most requested welcome drink experience. We launched our interactive B2B design portal, introduced themed floral coordinates, and operate multiple custom laser engraving stations simultaneously, serving high-throughput events.",
      stat: "50,000+ custom engravings",
      highlight: "Bangalore's #1 custom welcome drink."
    }
  };

  const steps = [
    {
      icon: <TreePine className="w-6 h-6 text-brandgreen" />,
      title: "1. Elite Palm Selection",
      desc: "We source coconuts solely from organic palm estates in Mandya. Only coconuts of specific weight and water volume are selected, ensuring sweet, refreshing water."
    },
    {
      icon: <Award className="w-6 h-6 text-gold" />,
      title: "2. Handcrafted Trimming",
      desc: "Our trained artisans trim the outer green fibers by hand, shaping the coconut into a clean, ivory pentagon shell that serves as the perfect canvas."
    },
    {
      icon: <Flame className="w-6 h-6 text-brandgreen" />,
      title: "3. High-Fidelity Laser Etching",
      desc: "Using safe, food-grade laser beams, we etch custom names, dates, or company logos directly onto the shell surface, without using harmful dyes or inks."
    },
    {
      icon: <Snowflake className="w-6 h-6 text-gold" />,
      title: "4. Insulated Chill & Serving",
      desc: "Coconuts are transported and staged in insulated ice crates, then served chilled at our customized bars with metallic gold paper or organic bamboo straws."
    }
  ];

  // GSAP animations on load
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".animate-tag", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
    tl.fromTo(".animate-title",
      { opacity: 0, y: 30, letterSpacing: "-0.04em" },
      { opacity: 1, y: 0, letterSpacing: "normal", duration: 0.8, ease: "power4.out" },
      "-=0.4"
    );
    tl.fromTo(".animate-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    );
    tl.fromTo(".animate-intro-text",
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.7, ease: "power3.out" },
      "-=0.3"
    );
    tl.fromTo(".animate-intro-img",
      { opacity: 0, scale: 0.9, rotate: 2 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.8, ease: "back.out(1.3)" },
      "-=0.6"
    );
  }, []);

  // GSAP animation for year milestone switch
  useEffect(() => {
    gsap.fromTo(".milestone-card",
      { opacity: 0, x: 20, scale: 0.98 },
      { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power2.out" }
    );
  }, [activeYear]);

  return (
    <div className="relative min-h-screen bg-cream text-darkbrown pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      <FloatingLeaves />

      {/* Ambient background glows */}
      <div className="glow-blob w-[450px] h-[450px] bg-brandgreen/10 top-10 left-[-10%]"></div>
      <div className="glow-blob w-[500px] h-[500px] bg-gold/5 bottom-20 right-[-10%]"></div>
      <div className="glow-blob w-[300px] h-[300px] bg-brandgreen/5 top-[45%] right-[25%]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="animate-tag opacity-0 bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase inline-block border border-gold/20 mb-6">
            Our Ethos & Origin
          </span>
          <h1 className="animate-title opacity-0 font-serif text-5xl md:text-7xl font-bold text-darkbrown mb-8 leading-[1.1] tracking-tight">
            Crafting Luxury Hydration for <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F6E3B4] to-gold">Elite Events</span>
          </h1>
          <p className="animate-desc opacity-0 text-lg md:text-xl text-darkbrown/70 leading-relaxed max-w-2xl mx-auto">
            How a humble tropical staple was elevated into a bespoke branding experience for India's high-society celebrations.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-32">
          {/* Narrative text column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 animate-intro-text opacity-0">
            <span className="text-xs font-bold text-brandgreen uppercase tracking-widest flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold fill-gold" /> Re-imagining Welcome Drinks
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-darkbrown leading-tight">
              A Vision of Pure, Sustainable Hospitality
            </h2>
            <p className="text-darkbrown/85 leading-relaxed text-base md:text-lg">
              Founded in Bangalore, Aura-coca emerged to replace high-sugar processed mocktails and generic plastic water bottles with natural luxury. We recognized that the welcome drink sets the tone for weddings and receptions, yet was often treated as an afterthought.
            </p>
            <p className="text-darkbrown/75 leading-relaxed text-sm md:text-base">
              By precision-engraving couple monograms, corporate branding logos, and custom hashtags directly onto hand-trimmed organic coconuts, we create an immediate visual 'wow' factor. It is refreshing, personalized, and leaves a lasting impression on your guests.
            </p>

            {/* List checklist */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brandgreen mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-darkbrown">Direct Sourcing</h4>
                  <p className="text-xs text-darkbrown/60 leading-normal mt-0.5">Harvested directly from certified organic palm estates in Maddur.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brandgreen mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-darkbrown">Safe Laser Etching</h4>
                  <p className="text-xs text-darkbrown/60 leading-normal mt-0.5">High-precision laser engraving. Dyes-free, ink-free, chemical-free.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brandgreen mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-darkbrown">100% Eco-Friendly</h4>
                  <p className="text-xs text-darkbrown/60 leading-normal mt-0.5">Served with bamboo/paper straws. Shells gathered in zero-waste bags.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-brandgreen mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-xs uppercase tracking-wider font-bold text-darkbrown">Hospitality Integrity</h4>
                  <p className="text-xs text-darkbrown/60 leading-normal mt-0.5">Host staff wearing clean service uniforms, gloves, and masks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Image mockup column */}
          <div className="lg:col-span-5 flex justify-center animate-intro-img opacity-0">
            <div className="award-card-container w-full max-w-[400px]">
              <div className="glass-card rounded-[2.5rem] p-4 flex flex-col relative overflow-hidden">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5]">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
                    style={{ backgroundImage: `url('/Screenshot 2026-07-07 154424.png')` }}
                  >
                    {/* Shadow gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-cream/95 via-transparent to-transparent"></div>
                  </div>
                  
                  {/* Overlay vision card */}
                  <div className="absolute inset-x-6 bottom-6 bg-cream/90 backdrop-blur-md border border-white/10 rounded-[1.8rem] p-6 text-center shadow-lg">
                    <p className="font-serif text-sm italic text-gold leading-relaxed">
                      "Luxury is not about complexity; it is about pure, simple elements executed to absolute perfection."
                    </p>
                    <span className="block text-[9px] uppercase tracking-widest text-darkbrown/40 font-bold mt-3">
                      Aura Ethos Statement
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive "Our Journey" Timeline */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Progress Timeline</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mt-2">Our Journey</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#050D0A]/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative backdrop-blur-md">
            
            {/* Year selector columns */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col justify-center gap-3 overflow-x-auto lg:overflow-x-visible pb-4 lg:pb-0 no-scrollbar">
              {Object.keys(milestones).map((year) => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-8 py-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 flex-shrink-0 lg:flex-shrink-1 ${
                    activeYear === year
                      ? "bg-gold text-cream font-bold scale-102 shadow-lg"
                      : "bg-white/5 border border-white/10 hover:border-gold/30 text-darkbrown/70"
                  }`}
                >
                  <span className="font-serif text-xl tracking-wider">{year}</span>
                  <Calendar className="w-5 h-5 hidden lg:block opacity-60" />
                </button>
              ))}
            </div>

            {/* Year milestone content display columns */}
            <div className="lg:col-span-8">
              <div className="award-card-container">
                <div className="glass-card rounded-[1.4rem] p-8 md:p-12 min-h-[300px] flex flex-col justify-between milestone-card">
                  <div>
                    <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-5 mb-6 gap-2">
                      <div>
                        <span className="text-[10px] uppercase text-brandgreen tracking-widest font-bold font-semibold block mb-1">
                          Milestone Year {activeYear}
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl font-bold text-darkbrown">
                          {milestones[activeYear].title}
                        </h3>
                      </div>
                      <span className="bg-gold/15 border border-gold/25 text-gold text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider w-max">
                        {milestones[activeYear].highlight}
                      </span>
                    </div>

                    <p className="text-darkbrown/85 leading-relaxed text-sm md:text-base mb-6">
                      {milestones[activeYear].desc}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-6 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase text-darkbrown/40 block tracking-widest font-semibold">Volume Index</span>
                      <p className="text-lg font-bold text-gold mt-0.5">{milestones[activeYear].stat}</p>
                    </div>
                    <Sparkles className="w-6 h-6 text-brandgreen opacity-40 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Artisanal Craftsmanship Step-by-Step */}
        <div className="mb-32">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-gold font-bold">Standard of Excellence</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mt-2">The Farm-to-Stall Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="award-card-container group">
                <div className="glass-card rounded-[1.8rem] p-8 flex flex-col justify-between min-h-[300px]">
                  <div>
                    <div className="bg-brandgreen/10 text-brandgreen w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/10 group-hover:text-gold transition-colors duration-300">
                      {step.icon}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-darkbrown mb-3 group-hover:text-gold transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-xs text-darkbrown/65 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="w-8 h-1 bg-brandgreen/20 group-hover:bg-gold transition-colors duration-300 mt-6 rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Pillars / Commitments */}
        <div className="bg-[#050D0A]/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative backdrop-blur-md mb-20 text-center">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mb-3">Our Core Commitments</h2>
            <p className="text-darkbrown/60">The foundation of our luxurious event refreshment services.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 glass-card rounded-[2rem] border border-white/5 flex flex-col items-center">
              <div className="bg-brandgreen/10 text-brandgreen w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-brandgreen/20">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-gold">Pristine Hygiene</h3>
              <p className="text-sm text-darkbrown/70 leading-relaxed max-w-xs">
                Every coconut is pre-trimmed, thoroughly cleaned, and handled exclusively by event hosts wearing sanitary gloves, caps, and masks.
              </p>
            </div>

            <div className="text-center p-8 glass-card rounded-[2rem] border border-white/5 flex flex-col items-center">
              <div className="bg-brandgreen/10 text-brandgreen w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-brandgreen/20">
                <HeartHandshake className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-gold">100% Sustainable</h3>
              <p className="text-sm text-darkbrown/70 leading-relaxed max-w-xs">
                Absolutely zero plastics. We serve refreshing welcome drinks with organic compostable bamboo straws, leaving a zero-waste event footprint.
              </p>
            </div>

            <div className="text-center p-8 glass-card rounded-[2rem] border border-white/5 flex flex-col items-center">
              <div className="bg-brandgreen/10 text-brandgreen w-16 h-16 rounded-full flex items-center justify-center mb-6 border border-brandgreen/20">
                <ShieldAlert className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-3 text-gold">Food-Safe Laser</h3>
              <p className="text-sm text-darkbrown/70 leading-relaxed max-w-xs">
                No chemical inks. Branding is laser-etched directly onto trimmed coco shells using precise thermal shading, keeping water completely safe.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-brandgreen to-[#10B981] hover:from-gold hover:to-[#F6E3B4] text-cream hover:text-cream font-bold py-4 px-10 rounded-full transition-all duration-500 shadow-lg inline-flex items-center gap-2 tracking-wide uppercase text-xs cursor-pointer"
            >
              Collaborate With Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

