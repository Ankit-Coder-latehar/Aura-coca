import React, { useState, useEffect, useRef } from "react";
import { X, ZoomIn, MapPin, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Check, Calendar, Award } from "lucide-react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Photos() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeImageIdx, setActiveImageIdx] = useState(null);
  const [isHoveringGallery, setIsHoveringGallery] = useState(false);
  const [cursorHovered, setCursorHovered] = useState(false);

  // Setup Customizer State
  const [customTheme, setCustomTheme] = useState("tiki");
  const [customBranding, setCustomBranding] = useState("monogram");
  const [customAddon, setCustomAddon] = useState("palm");
  const [customizerPulse, setCustomizerPulse] = useState(false);

  const galleryRef = useRef(null);
  const customCursorRef = useRef(null);

  const images = [
    {
      url: "/Screenshot 2026-07-07 154452.png",
      title: "Monogram Laser Engraving",
      caption: "Custom Couple Name & Monogram Engraving",
      description: "Elegant, food-safe engraving of couple monograms onto clean, custom-trimmed tender coconuts. A perfect welcome gesture for luxury wedding guests.",
      category: "Weddings & Engravings",
      location: "JW Marriott, Bangalore",
      date: "Spring 2026",
      specs: "Precision laser etching • Trimmed shells",
    },
    {
      url: "/Screenshot 2026-07-07 154536.png",
      title: "Organic Harvest Sourcing",
      caption: "Fresh Green Organic Coconuts Farm Harvest",
      description: "Handpicked premium green coconuts sourced from local, organic farms in Karnataka. Quality checks ensure maximum water volume and sweet natural taste.",
      category: "Farm & Sourcing",
      location: "Mandya Farm Estate, Karnataka",
      date: "All Seasons",
      specs: "100% Organic • Direct sourcing",
    },
    {
      url: "/Screenshot 2026-07-07 154555.png",
      title: "Tiki Refreshments Counter",
      caption: "Exotic Coconut Refreshments Counter",
      description: "A beautifully styled refreshment stand featuring fresh palm leaves, wooden steps, and tropical details. Adds a beachside resort vibe to any high-end party.",
      category: "Live Counter & Setup",
      location: "The Leela Palace, Bangalore",
      date: "Summer 2026",
      specs: "Uniformed service • Floral coordinates",
    },
    {
      url: "/Screenshot 2026-07-07 154615.png",
      title: "High-Yield Coconut Plantation",
      caption: "High-yield Coconut Palm Plantation Sourcing",
      description: "Our dedicated palm plantation where each coconut tree is nurtured using natural farming methods to harvest high-water-volume coconuts for our events.",
      category: "Farm & Sourcing",
      location: "Maddur Palms, Karnataka",
      date: "All Seasons",
      specs: "Monitored palm care • Eco-friendly",
    },
    {
      url: "/Screenshot 2026-07-07 154424.png",
      title: "Rustic Wooden Cart Setup",
      caption: "Stall Setup & Rustic Coconut Displays",
      description: "An eco-friendly rustic wooden stall featuring step-tiered coconut displays. Perfect for traditional, boho-chic, or green-themed wedding events.",
      category: "Live Counter & Setup",
      location: "Taj West End, Bangalore",
      date: "Autumn 2025",
      specs: "Modular wood display • Zero waste",
    },
    {
      url: "/Screenshot 2026-07-07 154342.png",
      title: "Polished Wooden Stand Display",
      caption: "Trimmed Coconuts Served on Wooden Event Stands",
      description: "Precisely trimmed coconuts resting on handcrafted wooden event stands, accented with gold straws. Made to match high-society reception styling.",
      category: "Live Counter & Setup",
      location: "Shangri-La Hotel, Bangalore",
      date: "Winter 2025",
      specs: "Handcrafted stands • Gold eco-straws",
    },
    {
      url: "/Screenshot 2026-07-07 154355.png",
      title: "Exotic Floral Tiki Setup",
      caption: "Tiki-Bar Exotic Counter Setup with Flora",
      description: "Our premium Tiki Bar setup, boasting rich floral integrations, warm glowing lights, and a full bamboo structure for transportive outdoor themes.",
      category: "Live Counter & Setup",
      location: "Adora Resorts, Bangalore outskirts",
      date: "Spring 2026",
      specs: "Bamboo structure • Tailored florals",
    },
    {
      url: "/Screenshot 2026-07-07 154733.png",
      title: "Premium Laser Etched Branding",
      caption: "Premium Laser Engraving Custom Logo Detail",
      description: "Detailed look at the high-fidelity branding results. Safe, clean, and stunningly precise vector prints directly on the coconut surface without ink.",
      category: "Weddings & Engravings",
      location: "Aura Design Lab, Bangalore",
      date: "Constant",
      specs: "No ink/chemicals • Food-grade",
    },
    {
      url: "/two_tender_coconuts.png",
      title: "Artisanal Double Coco Feature",
      caption: "Artisanal Double Coconut Display",
      description: "A showcase of two beautifully trimmed coconuts with custom names and dates. Perfect as a couple photo prop or a VIP table feature.",
      category: "Weddings & Engravings",
      location: "Courtyard by Marriott, Bangalore",
      date: "Summer 2025",
      specs: "High-contrast finish • Table props",
    },
    {
      url: "/Screenshot 2026-07-07 141457.png",
      title: "Luxury Reception Welcome Setup",
      caption: "Luxury Wedding Welcome Drink Setup",
      description: "A grand reception entryway welcome-drink counter, serving chilled custom-branded coconuts to over 500 guests upon their arrival.",
      category: "Weddings & Engravings",
      location: "Sheraton Grand, Whitefield",
      date: "Winter 2025",
      specs: "High-throughput serving • Ice chilled",
    }
  ];

  const categories = ["All", "Weddings & Engravings", "Live Counter & Setup", "Farm & Sourcing"];

  const stats = [
    { number: "150+", label: "Luxury Events Hosted" },
    { number: "50k+", label: "Coconuts Laser Engraved" },
    { number: "100%", label: "Natural & Eco-Friendly" },
    { number: "10+", label: "Top Hotel Partnerships" }
  ];

  // Customizer Options
  const themes = [
    {
      id: "tiki",
      name: "Bamboo Tiki Bar",
      vibe: "Tropical Paradise",
      time: "2.0 Hours Setup",
      desc: "Sustainable premium bamboo structure with lush palm leaves, tropical flower garlands, warm overhead hanging lights, and an integrated ice-chilling bin."
    },
    {
      id: "rustic",
      name: "Minimalist Rustic Wood",
      vibe: "Organic & Earthy",
      time: "1.5 Hours Setup",
      desc: "A clean, natural timber counter with rustic wooden crates, cascading ivy and eucalyptus garlands, and blackboard event signs. Great for garden receptions."
    },
    {
      id: "gold",
      name: "Grand Gold Display",
      vibe: "Regal Luxury",
      time: "3.0 Hours Setup",
      desc: "High-polish champagne gold framing, mirrored service tops, formal botanical displays, and warm LED backlight glows. Best for indoor luxury ballrooms."
    }
  ];

  const brandings = [
    {
      id: "monogram",
      name: "Custom Initials & Monograms",
      detail: "Elegant monogram logo designed around the couple's initials and event date, laser-engraved onto the coconut front."
    },
    {
      id: "full_logo",
      name: "Intricate Wedding/Event Logo",
      detail: "A full detailed wedding crest, custom graphic, or wedding invitation pattern laser-engraved with extreme precision."
    },
    {
      id: "corporate",
      name: "Corporate Branding & Logo",
      detail: "Perfect, vector-sharp company logo engraving, excellent for press meets, corporate product launches, and gala welcomes."
    }
  ];

  const addons = [
    {
      id: "palm",
      name: "Tropical Palm Fronds",
      desc: "Rich green palm leaves lining the stall columns and table skirts for a full coastal jungle appearance."
    },
    {
      id: "floral",
      name: "Champagne Floral Clusters",
      desc: "Cascading floral coordinates customized to match your wedding color scheme (roses, orchids, carnations)."
    },
    {
      id: "neon",
      name: "LED Neon Custom Backdrop",
      desc: "A custom 3D glowing sign centered on the backdrop (e.g. 'Aura of Love' or brand name) for night events."
    }
  ];

  const filteredImages = activeFilter === "All" 
    ? images 
    : images.filter((img) => img.category === activeFilter);

  // Intro entry animations
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".animate-header-tag", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
    tl.fromTo(".animate-header-title",
      { opacity: 0, y: 30, letterSpacing: "-0.05em" },
      { opacity: 1, y: 0, letterSpacing: "normal", duration: 0.8, ease: "power4.out" },
      "-=0.4"
    );
    tl.fromTo(".animate-header-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    );
    tl.fromTo(".animate-stat-item",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.5)" },
      "-=0.4"
    );
    tl.fromTo(".animate-filter-btn",
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4, stagger: 0.05, ease: "power2.out" },
      "-=0.3"
    );
    tl.fromTo(".gallery-item",
      { opacity: 0, y: 40, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  // Category switch animations
  const handleFilterChange = (filter) => {
    if (filter === activeFilter) return;
    
    gsap.to(".gallery-item", {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.3,
      stagger: 0.02,
      ease: "power2.in",
      onComplete: () => {
        setActiveFilter(filter);
      }
    });
  };

  useEffect(() => {
    gsap.fromTo(".gallery-item",
      { opacity: 0, scale: 0.95, y: 30 },
      { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.06, ease: "power3.out" }
    );
  }, [activeFilter]);

  // Custom cursor follower
  useEffect(() => {
    const cursor = customCursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const onMouseMove = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  // Lightbox Navigation
  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveImageIdx((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIdx === null) return;
      if (e.key === "ArrowLeft") handlePrev(e);
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "Escape") setActiveImageIdx(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImageIdx, filteredImages]);

  // Pulse customizer highlights
  const triggerCustomizerPulse = () => {
    setCustomizerPulse(true);
    setTimeout(() => setCustomizerPulse(false), 500);
  };

  const selectedThemeObj = themes.find(t => t.id === customTheme);
  const selectedBrandingObj = brandings.find(b => b.id === customBranding);
  const selectedAddonObj = addons.find(a => a.id === customAddon);

  return (
    <div className="relative min-h-screen bg-cream text-darkbrown pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      <FloatingLeaves />

      {/* Ambient background glows */}
      <div className="glow-blob w-[450px] h-[450px] bg-brandgreen/10 top-10 left-[-10%]"></div>
      <div className="glow-blob w-[550px] h-[550px] bg-gold/5 bottom-20 right-[-10%]"></div>
      <div className="glow-blob w-[300px] h-[300px] bg-brandgreen/5 top-[40%] right-[20%]"></div>

      {/* Custom follower cursor */}
      <div
        ref={customCursorRef}
        className={`fixed pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40 flex items-center justify-center transition-all duration-300 ${
          isHoveringGallery ? "opacity-100 scale-100" : "opacity-0 scale-0"
        } ${
          cursorHovered ? "w-24 h-24 bg-gold text-[#030806]" : "w-12 h-12 bg-white/5 backdrop-blur-[3px] text-transparent"
        }`}
        style={{ left: 0, top: 0 }}
      >
        <span className="font-serif text-xs font-bold tracking-widest uppercase">View</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="animate-header-tag opacity-0 bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase inline-block border border-gold/20 mb-6">
            Aura Visual Showcase
          </span>
          <h1 className="animate-header-title opacity-0 font-serif text-5xl md:text-7xl font-bold text-darkbrown mb-8 leading-[1.1] tracking-tight">
            Curated Event Highlights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F6E3B4] to-gold">Setups</span>
          </h1>
          <p className="animate-header-desc opacity-0 text-lg md:text-xl text-darkbrown/70 leading-relaxed max-w-2xl mx-auto mb-12">
            Witness how custom-branded coconuts, exotic Tiki-bars, and organic sourcing combine to elevate hydration in Bangalore's premier celebrations.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto py-8 px-4 rounded-[2rem] border border-white/5 bg-white/[0.01] backdrop-blur-md">
            {stats.map((stat, idx) => (
              <div key={idx} className="animate-stat-item opacity-0 text-center border-r border-white/5 last:border-0">
                <p className="font-serif text-3xl md:text-4xl font-extrabold text-gold mb-1">{stat.number}</p>
                <p className="text-[11px] uppercase tracking-widest text-darkbrown/50 font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilterChange(cat)}
              className={`animate-filter-btn opacity-0 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wider transition-all duration-500 cursor-pointer relative overflow-hidden ${
                activeFilter === cat
                  ? "bg-gradient-to-r from-brandgreen to-[#10B981] text-cream shadow-lg shadow-brandgreen/20"
                  : "bg-white/[0.02] border border-white/10 hover:border-gold/30 hover:bg-white/[0.04] text-darkbrown/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Container (Activates Custom Cursor) */}
        <div 
          ref={galleryRef}
          onMouseEnter={() => setIsHoveringGallery(true)}
          onMouseLeave={() => {
            setIsHoveringGallery(false);
            setCursorHovered(false);
          }}
          className={`columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 transition-all ${
            isHoveringGallery ? "cursor-none" : ""
          }`}
        >
          {filteredImages.map((img, idx) => {
            // Find absolute index in the parent images array for lightbox slide matching
            const parentIdx = images.findIndex((i) => i.url === img.url);

            return (
              <div
                key={img.url}
                onClick={() => setActiveImageIdx(parentIdx)}
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="gallery-item group break-inside-avoid relative overflow-hidden rounded-[2rem] border border-white/5 bg-[#050D0A]/30 hover:border-gold/35 transition-all duration-500 cursor-pointer p-3"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-[1.5rem] w-full bg-cream">
                  <img
                    src={img.url}
                    alt={img.title}
                    className="w-full object-cover transition-transform duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle Top Left Tag */}
                  <div className="absolute top-4 left-4 z-20 bg-[#030806]/60 backdrop-blur-md border border-white/10 rounded-full px-3 py-1 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-gold" />
                    <span className="text-[10px] tracking-widest text-gold uppercase font-bold">{img.category}</span>
                  </div>
                </div>

                {/* Card Info Overlay always partially visible, fully revealed on hover */}
                <div className="mt-4 px-3 pb-2 flex flex-col">
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3 className="font-serif text-xl font-bold text-darkbrown group-hover:text-gold transition-colors duration-300">
                      {img.title}
                    </h3>
                    <ZoomIn className="w-4 h-4 text-darkbrown/40 group-hover:text-gold group-hover:scale-110 transition-all duration-300 mt-1 flex-shrink-0" />
                  </div>
                  
                  <p className="text-sm text-darkbrown/60 leading-relaxed mb-3 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                    {img.description}
                  </p>

                  <div className="flex flex-wrap gap-y-2 gap-x-4 pt-3 border-t border-white/5 text-[11px] text-darkbrown/40 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-brandgreen" /> {img.location}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-gold" /> {img.date}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Divider */}
        <div className="relative my-32">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-white/5"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-cream px-6 text-gold">
              <Award className="w-8 h-8 opacity-40 animate-pulse" />
            </span>
          </div>
        </div>

        {/* Interactive Stall Setup Customizer Section */}
        <div className="bg-[#050D0A]/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative z-10 backdrop-blur-md mb-32">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brandgreen/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Customizer Info */}
            <div className="lg:col-span-7">
              <span className="bg-gold/10 text-gold px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase inline-block border border-gold/20 mb-6">
                Interactive Design Studio
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-darkbrown mb-6 leading-tight">
                Visualize Your Custom <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F6E3B4]">Aura Bar Setup</span>
              </h2>
              <p className="text-darkbrown/70 leading-relaxed mb-10 max-w-xl">
                Configure your tailored welcoming beverage counter. Pick your setup style, design engraving layout, and select premium organic embellishments to see your customized package specifications.
              </p>

              {/* Selector Steps */}
              <div className="space-y-8">
                {/* Step 1: Theme selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold font-bold mb-3">1. Select Stall Counter Theme</label>
                  <div className="flex flex-wrap gap-3">
                    {themes.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => {
                          setCustomTheme(t.id);
                          triggerCustomizerPulse();
                        }}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          customTheme === t.id
                            ? "bg-gold text-cream font-bold"
                            : "bg-white/5 border border-white/10 hover:border-gold/40 text-darkbrown/70"
                        }`}
                      >
                        {t.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Branding Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold font-bold mb-3">2. Select Engraving Design</label>
                  <div className="flex flex-wrap gap-3">
                    {brandings.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => {
                          setCustomBranding(b.id);
                          triggerCustomizerPulse();
                        }}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          customBranding === b.id
                            ? "bg-gold text-cream font-bold"
                            : "bg-white/5 border border-white/10 hover:border-gold/40 text-darkbrown/70"
                        }`}
                      >
                        {b.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Add-on Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold font-bold mb-3">3. Choose Organic Styling Add-on</label>
                  <div className="flex flex-wrap gap-3">
                    {addons.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          setCustomAddon(a.id);
                          triggerCustomizerPulse();
                        }}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                          customAddon === a.id
                            ? "bg-gold text-cream font-bold"
                            : "bg-white/5 border border-white/10 hover:border-gold/40 text-darkbrown/70"
                        }`}
                      >
                        {a.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Preview Box */}
            <div className="lg:col-span-5">
              <div 
                className={`award-card-container transition-all duration-500 ${
                  customizerPulse ? "glow-card-active scale-102" : ""
                }`}
              >
                <div className="glass-card rounded-[1.4rem] p-8 flex flex-col min-h-[420px] justify-between relative overflow-hidden">
                  
                  {/* Glass Card Header */}
                  <div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
                      <div>
                        <span className="text-[9px] font-bold tracking-widest uppercase text-brandgreen bg-brandgreen/10 border border-brandgreen/20 px-2.5 py-1 rounded-full flex items-center gap-1.5 w-max">
                          <span className="w-1.5 h-1.5 bg-brandgreen rounded-full animate-ping"></span> Live Configuration
                        </span>
                      </div>
                      <p className="text-xs text-gold/80 font-bold uppercase tracking-wider">{selectedThemeObj?.vibe}</p>
                    </div>

                    {/* Summary list */}
                    <div className="space-y-6">
                      <div>
                        <span className="text-[10px] uppercase text-darkbrown/40 block tracking-widest font-semibold">Stall Theme</span>
                        <p className="font-serif text-xl font-bold text-darkbrown mt-1 flex items-center gap-2">
                          <Check className="w-4.5 h-4.5 text-brandgreen" /> {selectedThemeObj?.name}
                        </p>
                        <p className="text-xs text-darkbrown/60 leading-relaxed mt-1.5">{selectedThemeObj?.desc}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                        <div>
                          <span className="text-[10px] uppercase text-darkbrown/40 block tracking-widest font-semibold">Custom Branding</span>
                          <p className="text-sm font-bold text-gold mt-1 leading-snug">{selectedBrandingObj?.name}</p>
                        </div>
                        <div>
                          <span className="text-[10px] uppercase text-darkbrown/40 block tracking-widest font-semibold">Visual Styling</span>
                          <p className="text-sm font-bold text-gold mt-1 leading-snug">{selectedAddonObj?.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Glass Card Footer */}
                  <div className="border-t border-white/10 pt-6 mt-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between text-xs font-semibold text-darkbrown/50 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-brandgreen" /> Prep: {selectedThemeObj?.time}
                      </span>
                      <span>•</span>
                      <span>Staff: 2 Uniformed</span>
                    </div>

                    <Link
                      to="/contact"
                      state={{ 
                        theme: selectedThemeObj?.name, 
                        branding: selectedBrandingObj?.name, 
                        addon: selectedAddonObj?.name 
                      }}
                      className="w-full bg-gradient-to-r from-gold to-[#F6E3B4] hover:from-brandgreen hover:to-brandgreen text-cream hover:text-cream font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all duration-500 tracking-wider text-xs uppercase"
                    >
                      Inquire For This Setup <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Block */}
        <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#072216]/60 via-cream to-[#072216]/40 border border-white/5 p-12 md:p-24 text-center z-10">
          {/* Decorative glowing blobs */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-brandgreen/10 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-gold/5 rounded-full blur-[80px] pointer-events-none"></div>

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="bg-brandgreen/15 text-brandgreen px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase inline-block border border-brandgreen/20 mb-6">
              Exquisite Hydration Experiences
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-darkbrown mb-8 leading-tight">
              Ready to Upgrade <br className="hidden md:inline" /> Your Event Aesthetics?
            </h2>
            <p className="text-lg text-darkbrown/70 leading-relaxed mb-12 max-w-xl mx-auto">
              Transform your welcome drinks with organic, laser-branded fresh coconuts. Inquire about rates, customization, and packages.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-brandgreen to-[#10B981] hover:from-gold hover:to-[#F6E3B4] text-cream font-bold py-4 px-8 rounded-full transition-all duration-500 shadow-lg shadow-brandgreen/10 flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase text-xs"
              >
                Book Custom Setup Now <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/packages"
                className="bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10 text-darkbrown py-4 px-8 rounded-full transition-all duration-500 flex items-center justify-center gap-2 tracking-wide cursor-pointer uppercase text-xs"
              >
                View Packages List
              </Link>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Screen Immersive Lightbox Modal */}
      {activeImageIdx !== null && (
        <div 
          onClick={() => setActiveImageIdx(null)}
          className="fixed inset-0 z-50 bg-black/98 backdrop-blur-lg flex items-center justify-center p-4 md:p-12 animate-fade-in transition-all duration-500"
        >
          {/* Close button */}
          <button
            onClick={() => setActiveImageIdx(null)}
            className="absolute top-6 right-6 text-white/50 hover:text-gold p-3 rounded-full cursor-pointer z-50 transition-colors bg-white/5 border border-white/10 hover:border-gold/40"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-6 text-white/50 hover:text-gold p-3 rounded-full cursor-pointer z-50 transition-colors bg-white/5 border border-white/10 hover:border-gold/40 hidden md:block"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-6 text-white/50 hover:text-gold p-3 rounded-full cursor-pointer z-50 transition-colors bg-white/5 border border-white/10 hover:border-gold/40 hidden md:block"
          >
            <ChevronRight className="w-7 h-7" />
          </button>

          {/* Central Modal Content Box */}
          <div 
            onClick={(e) => e.stopPropagation()} 
            className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#050D0A]/40 border border-white/5 rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden backdrop-blur-md"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brandgreen/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Left Column: Interactive Image Frame */}
            <div className="lg:col-span-7 flex items-center justify-center relative group min-h-[300px] md:min-h-[450px]">
              <img
                key={activeImageIdx}
                src={images[activeImageIdx].url}
                alt={images[activeImageIdx].title}
                className="max-h-[60vh] rounded-[1.8rem] object-contain shadow-2xl border border-white/10 animate-fade-in"
              />
              
              {/* Mobile Prev/Next Swipe Indicators Overlay */}
              <div className="absolute inset-x-0 bottom-4 flex justify-center gap-4 md:hidden">
                <button
                  onClick={handlePrev}
                  className="bg-black/60 text-gold p-2.5 rounded-full border border-gold/30"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-black/60 text-gold p-2.5 rounded-full border border-gold/30"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Column: Metadata Panel */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full p-2 text-left">
              <div>
                <span className="text-[10px] tracking-widest text-brandgreen uppercase font-bold bg-brandgreen/10 border border-brandgreen/20 px-3 py-1 rounded-full w-max inline-block mb-6">
                  {images[activeImageIdx].category}
                </span>
                
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mb-4">
                  {images[activeImageIdx].title}
                </h3>
                
                <p className="text-sm md:text-base text-darkbrown/70 leading-relaxed mb-6">
                  {images[activeImageIdx].description}
                </p>

                <div className="space-y-4 pt-6 border-t border-white/5">
                  <div className="flex items-center gap-3 text-sm text-darkbrown/80 font-medium">
                    <MapPin className="w-5 h-5 text-brandgreen flex-shrink-0" />
                    <span>Venue: <strong className="text-darkbrown">{images[activeImageIdx].location}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-darkbrown/80 font-medium">
                    <Calendar className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>Hosting Period: <strong className="text-darkbrown">{images[activeImageIdx].date}</strong></span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-darkbrown/80 font-medium">
                    <Sparkles className="w-5 h-5 text-brandgreen flex-shrink-0" />
                    <span>Setup Specs: <span className="text-gold font-bold text-xs bg-gold/10 px-2 py-0.5 rounded border border-gold/20 ml-1">{images[activeImageIdx].specs}</span></span>
                  </div>
                </div>
              </div>

              {/* Lightbox CTA */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <Link
                  to="/contact"
                  onClick={() => setActiveImageIdx(null)}
                  className="w-full bg-gradient-to-r from-brandgreen to-[#10B981] hover:from-gold hover:to-[#F6E3B4] text-cream font-bold py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2 transition-all duration-500 text-xs tracking-wider uppercase"
                >
                  Book Setup Inquiries <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

