import React, { useEffect, useRef, useState } from "react";
import { Handshake, Star, CheckCircle, X, ArrowRight, ShieldCheck, Sparkles, Building, Calendar, Users, FileText, Send } from "lucide-react";
import gsap from "gsap";
import confetti from "canvas-confetti";
import FloatingLeaves from "../components/FloatingLeaves";

export default function Partners() {
  const pageRef = useRef(null);
  const [activePartnerIdx, setActivePartnerIdx] = useState(null);
  const [activeTab, setActiveTab] = useState("benefits"); // benefits, styling, logistics

  // Form State
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    partnerType: "Wedding Planner",
    eventFrequency: "5-15 events/year",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const partners = [
    {
      name: "JW Marriott Bangalore",
      type: "Luxury Hotel Venue",
      location: "Vittal Mallya Road, Bangalore",
      summary: "Strategic coordination for multi-day premium welcome drink counters during high-society gala events.",
      story: "For JW Marriott banquets, Aura-coca has designed a customized modular bamboo tiki stall that blends with their poolside brunch aesthetic. We manage high-throughput distribution serving up to 600 guests within short welcome windows.",
      setup: "Double Bamboo Tiki Bar Counter",
      metricScore: "98% Guest Rating",
      volume: "8,500+ Coconuts Served",
      highlight: "Seamless integration with 5-star kitchen hygiene audits.",
      quote: "Aura-coca's setup is always the star welcome drink. Clean, precise laser branding, and highly professional staff."
    },
    {
      name: "The Leela Palace Bangalore",
      type: "Palatial Event Venue",
      location: "Old Airport Road, Bangalore",
      summary: "Royal wedding welcoming stations matching grand Indo-Saracenic architectural backdrops.",
      story: "Operating in the grand corridors of The Leela Palace, our customizers align engraving initials directly with the couple's wedding invitations and monogram designs. We complement their floral layouts with custom rose-gold stands.",
      setup: "Regal Gold Trim Display & Easel",
      metricScore: "99% Quality Score",
      volume: "12,000+ Coconuts Served",
      highlight: "Ornate floral draping aligned to wedding theme colorways.",
      quote: "They coordinate perfectly with our flower vendor. It feels like a natural extension of our luxury wedding planning."
    },
    {
      name: "Taj West End",
      type: "Heritage Wedding Venue",
      location: "Race Course Road, Bangalore",
      summary: "Eco-friendly, rustic welcome tables suited for historic garden banquets and lawns.",
      story: "Set against the 150-year-old heritage trees of Taj West End, Aura-coca runs fully sustainable, zero-plastic drink stations. Coconuts are served chilled on natural wooden tables with bio-compostable straws and coconut leaf screens.",
      setup: "Minimalist Rustic Wood Cart",
      metricScore: "100% Green Rating",
      volume: "6,000+ Coconuts Served",
      highlight: "Zero waste policy: All shells bagged and recycled.",
      quote: "Our clients love the sustainability commitment. The rustic carts are a perfect fit for our forest lawns."
    },
    {
      name: "Shangri-La Hotel",
      type: "Corporate Retreat Location",
      location: "Palace Road, Bangalore",
      summary: "Brand logo embossing and high-speed serving during corporate leadership summits.",
      story: "Serving tech giants and leadership retreats at Shangri-La, Aura-coca laser-etches complex company logos with vector-level detail. Coconuts serve as refreshing, healthy brain food welcoming executive members.",
      setup: "Sleek Black Corporate Bar",
      metricScore: "97% Client Score",
      volume: "4,200+ Corporate Drinks",
      highlight: "Fast-pass queue layout serving 200 delegates per 15 minutes.",
      quote: "Excellent branding precision. Our corporate clients were amazed to see their logos etched cleanly on fresh fruit."
    },
    {
      name: "3Production Weddings",
      type: "Bespoke Event Planners",
      location: "Pan-India Planners",
      summary: "Close co-creative styling projects for destination and theme-focused luxury weddings.",
      story: "Working with the designers at 3Production, we brainstorm unique cart placements, signboards, and couple hashtag fonts weeks in advance. We provide digital proof sheets of the monogram before laser engraving.",
      setup: "Flexible custom styling",
      metricScore: "99% Coordinator Score",
      volume: "25+ Joint Weddings",
      highlight: "Digital monogram previews and font matches.",
      quote: "Having a partner that provides digital previews and respects typography is a dream. Highly recommended!"
    },
    {
      name: "Adora Resorts & Planners",
      type: "Outdoor Destination Venue",
      location: "Bangalore Outskirts",
      summary: "Warm, tropical refreshments setups at sprawling farmhouses and pool parties.",
      story: "For hot afternoon pool party events, Aura-coca establishes high-speed chilled dispensers. Coconuts are pre-cooled and stamped with quirky captions like 'Stay Wild' or tropical leaf icons for fun photo props.",
      setup: "Chilled Coconut Ice-Island Bar",
      metricScore: "96% Engagement Score",
      volume: "5,000+ Summer Drinks",
      highlight: "Double-ice chilled staging. Stamped caption series.",
      quote: "The guests loved taking pictures with the stamped quotes. It set the perfect tone for our pool parties."
    }
  ];

  const metrics = [
    { value: "15+", label: "Luxury Venues Served" },
    { value: "50+", label: "Planner Associations" },
    { value: "100%", label: "Plastic-Free Setup" },
    { value: "4.9★", label: "Partner Review Score" }
  ];

  // GSAP Entrance Animations
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(".animate-header-tag", 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
    );
    tl.fromTo(".animate-header-title",
      { opacity: 0, y: 30, letterSpacing: "-0.03em" },
      { opacity: 1, y: 0, letterSpacing: "normal", duration: 0.8, ease: "power4.out" },
      "-=0.4"
    );
    tl.fromTo(".animate-header-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
      "-=0.5"
    );
    tl.fromTo(".animate-metric-card",
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "back.out(1.4)" },
      "-=0.4"
    );
    tl.fromTo(".animate-partner-card",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
      "-=0.3"
    );
  }, []);

  // GSAP tab switch animation
  useEffect(() => {
    gsap.fromTo(".tab-content",
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
    );
  }, [activeTab]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const tempErrors = {};
    if (!formData.companyName.trim()) tempErrors.companyName = "Company name is required";
    if (!formData.contactName.trim()) tempErrors.contactName = "Contact name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone number is required";

    if (Object.keys(tempErrors).length > 0) {
      setErrors(tempErrors);
      // Shake animation for form container
      gsap.fromTo(".form-container", 
        { x: -10 },
        { x: 0, duration: 0.4, ease: "rough({template: none, strength: 2, points: 5, taper: none, randomize: true, clamp: false})" }
      );
      return;
    }

    // Success Actions
    setIsSubmitted(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#10B981", "#E2C375", "#ECEFEF", "#072216"]
    });

    // Reset Form after a delay
    setTimeout(() => {
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        partnerType: "Wedding Planner",
        eventFrequency: "5-15 events/year",
        message: ""
      });
      setIsSubmitted(false);
    }, 6000);
  };

  return (
    <div className="relative min-h-screen bg-cream text-darkbrown pt-32 pb-24 px-6 md:px-12 overflow-hidden">
      <FloatingLeaves />

      {/* Ambient background glows */}
      <div className="glow-blob w-[450px] h-[450px] bg-brandgreen/10 top-10 left-[-10%]"></div>
      <div className="glow-blob w-[500px] h-[500px] bg-gold/5 bottom-20 right-[-10%]"></div>
      <div className="glow-blob w-[300px] h-[300px] bg-[#10B981]/5 top-[50%] left-[20%]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="animate-header-tag opacity-0 bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase inline-block border border-gold/20 mb-6">
            B2B Collaborations
          </span>
          <h1 className="animate-header-title opacity-0 font-serif text-5xl md:text-7xl font-bold text-darkbrown mb-8 leading-[1.1] tracking-tight">
            Elite Hospitality & <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-[#F6E3B4] to-gold">Planners</span>
          </h1>
          <p className="animate-header-desc opacity-0 text-lg md:text-xl text-darkbrown/70 leading-relaxed max-w-2xl mx-auto mb-16">
            We collaborate with Bangalore's leading wedding planners, boutique agencies, and 5-star venue directors to curate signature refreshments.
          </p>

          {/* Metrics bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {metrics.map((m, idx) => (
              <div 
                key={idx} 
                className="animate-metric-card opacity-0 bg-white/[0.01] border border-white/5 rounded-2xl py-6 px-4 text-center backdrop-blur-md"
              >
                <h3 className="font-serif text-3xl md:text-4xl font-extrabold text-gold mb-1.5">{m.value}</h3>
                <p className="text-[10px] uppercase tracking-widest text-darkbrown/50 font-semibold">{m.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Showcase Section */}
        <div className="mb-32">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold font-bold">Featured Networks</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mt-2">Preferred Partners</h2>
            </div>
            <p className="text-sm text-darkbrown/50 hidden md:block max-w-xs text-right">
              Click on any venue or planner partner card to explore a collaborative case study.
            </p>
          </div>

          {/* Grid of Elite Partners */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                onClick={() => setActivePartnerIdx(idx)}
                className="animate-partner-card opacity-0 award-card-container cursor-pointer group"
              >
                <div className="glass-card rounded-[1.4rem] p-8 flex flex-col justify-between min-h-[220px]">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="bg-brandgreen/10 border border-brandgreen/20 text-brandgreen rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                        {partner.type}
                      </span>
                      <Building className="w-4 h-4 text-darkbrown/30 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    
                    <h3 className="font-serif text-2xl font-bold text-darkbrown mb-3 group-hover:text-gold transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-darkbrown/60 leading-relaxed mb-6 line-clamp-2">
                      {partner.summary}
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-gold font-bold uppercase tracking-wider pt-4 border-t border-white/5">
                    <span>Explore Case Study</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Partner Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-32 bg-[#050D0A]/30 border border-white/5 rounded-[3rem] p-8 md:p-16 relative backdrop-blur-md">
          
          {/* Benefits Info Selector */}
          <div className="lg:col-span-5">
            <span className="bg-gold/10 text-gold px-3.5 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase inline-block border border-gold/20 mb-6">
              Partner Perks
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-darkbrown mb-6 leading-tight">
              Why Organizers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-[#F6E3B4]">Trust Aura Coco</span>
            </h2>
            <p className="text-darkbrown/60 leading-relaxed mb-10">
              We provide streamlined operations, creative templates, and special commissions to planners who regularly integrate Aura Coco welcome stands.
            </p>

            <div className="flex flex-col gap-3">
              <button
                onClick={() => setActiveTab("benefits")}
                className={`w-full text-left px-6 py-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 ${
                  activeTab === "benefits"
                    ? "bg-gold text-cream font-bold"
                    : "bg-white/5 border border-white/10 hover:border-gold/30 text-darkbrown/70"
                }`}
              >
                <span className="text-xs uppercase tracking-wider font-semibold">Priority Booking & Commission</span>
                <CheckCircle className={`w-4 h-4 ${activeTab === "benefits" ? "text-cream" : "text-brandgreen"}`} />
              </button>

              <button
                onClick={() => setActiveTab("styling")}
                className={`w-full text-left px-6 py-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 ${
                  activeTab === "styling"
                    ? "bg-gold text-cream font-bold"
                    : "bg-white/5 border border-white/10 hover:border-gold/30 text-darkbrown/70"
                }`}
              >
                <span className="text-xs uppercase tracking-wider font-semibold">Bespoke Styling Alignments</span>
                <CheckCircle className={`w-4 h-4 ${activeTab === "styling" ? "text-cream" : "text-brandgreen"}`} />
              </button>

              <button
                onClick={() => setActiveTab("logistics")}
                className={`w-full text-left px-6 py-4 rounded-2xl flex items-center justify-between cursor-pointer transition-all duration-300 ${
                  activeTab === "logistics"
                    ? "bg-gold text-cream font-bold"
                    : "bg-white/5 border border-white/10 hover:border-gold/30 text-darkbrown/70"
                }`}
              >
                <span className="text-xs uppercase tracking-wider font-semibold">Operations & Shell Disposal</span>
                <CheckCircle className={`w-4 h-4 ${activeTab === "logistics" ? "text-cream" : "text-brandgreen"}`} />
              </button>
            </div>
          </div>

          {/* Benefits Content Display */}
          <div className="lg:col-span-7">
            <div className="award-card-container">
              <div className="glass-card rounded-[1.4rem] p-8 md:p-12 min-h-[380px] flex flex-col justify-between tab-content">
                
                {activeTab === "benefits" && (
                  <div>
                    <div className="bg-brandgreen/10 text-brandgreen w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Star className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-4">
                      Preferred Pricing Rates & Blocks
                    </h3>
                    <p className="text-darkbrown/85 leading-relaxed mb-6 text-sm md:text-base">
                      Event Planners receive dedicated B2B seasonal pricing cards and commissions. Additionally, we safeguard priority scheduling blocks for verified recurring planners during busy auspicious wedding seasons in India (Nov - Feb).
                    </p>
                    <ul className="space-y-3.5 text-xs text-darkbrown/70 font-medium uppercase tracking-wider">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Guaranteed date holds</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Volume commissions on bulk orders</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Multi-day destination package splits</li>
                    </ul>
                  </div>
                )}

                {activeTab === "styling" && (
                  <div>
                    <div className="bg-brandgreen/10 text-brandgreen w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-4">
                      Thematic & Monogram Coordinates
                    </h3>
                    <p className="text-darkbrown/85 leading-relaxed mb-6 text-sm md:text-base">
                      We coordinate aesthetic styling with decor vendor leads. From supplying digital mockups of custom couple monograms to draping wood carts in matching pastel floral coordinates or custom foliage, we guarantee visual harmony.
                    </p>
                    <ul className="space-y-3.5 text-xs text-darkbrown/70 font-medium uppercase tracking-wider">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Shared PNG/SVG monogram templates</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Customized wood signs & easel titles</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Theme floral coordinates on counter bases</li>
                    </ul>
                  </div>
                )}

                {activeTab === "logistics" && (
                  <div>
                    <div className="bg-brandgreen/10 text-brandgreen w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-gold mb-4">
                      5-Star Hospitality Compliance
                    </h3>
                    <p className="text-darkbrown/85 leading-relaxed mb-6 text-sm md:text-base">
                      Our trained service team operates in premium hotel environments with a focus on hygiene and punctuality. We handle shell packing in secure heavy-duty garbage bags at the counter base, fulfilling 5-star venue housekeeping codes.
                    </p>
                    <ul className="space-y-3.5 text-xs text-darkbrown/70 font-medium uppercase tracking-wider">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Uniformed host staff with service gloves</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Heavy-duty garbage bagging inclusion</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-brandgreen" /> Adherence to strict banquet time restrictions</li>
                    </ul>
                  </div>
                )}

                <div className="pt-6 border-t border-white/5 flex justify-end">
                  <a
                    href="#enquiry-form"
                    className="text-xs font-bold text-gold uppercase tracking-widest flex items-center gap-1.5 hover:text-brandgreen transition-colors"
                  >
                    Partner With Us Now <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Partnership Inquiry Portal Form */}
        <div id="enquiry-form" className="max-w-4xl mx-auto relative z-10">
          <div className="award-card-container form-container">
            <div className="glass-card rounded-[3rem] p-8 md:p-16 relative backdrop-blur-md">
              <div className="absolute top-0 left-0 w-64 h-64 bg-brandgreen/5 rounded-full blur-[80px] pointer-events-none"></div>

              <div className="text-center max-w-xl mx-auto mb-12">
                <span className="bg-brandgreen/15 text-brandgreen px-3.5 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase inline-block border border-brandgreen/20 mb-4">
                  Registration Desk
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mb-4">
                  Join Our Luxury Network
                </h2>
                <p className="text-sm text-darkbrown/60 leading-relaxed">
                  Submit your agency or hospitality brand details below to unlock wholesale catalogs, commission guidelines, and event styling guides.
                </p>
              </div>

              {isSubmitted ? (
                <div className="min-h-[300px] flex flex-col items-center justify-center text-center py-12 animate-fade-in">
                  <div className="bg-brandgreen/10 border border-brandgreen/20 text-brandgreen w-20 h-20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gold mb-3">Enquiry Lodged!</h3>
                  <p className="text-darkbrown/70 max-w-sm leading-relaxed mb-6">
                    Thank you. We have sent an introductory B2B partner packet to your email address. Our coordinator will contact you shortly.
                  </p>
                  <span className="text-[10px] uppercase text-darkbrown/40 tracking-widest font-bold">Auto-resets in a few seconds...</span>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Company Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">Company / Brand Name</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        className={`w-full bg-white/[0.02] border rounded-2xl py-3.5 px-5 text-sm text-darkbrown focus:outline-none focus:border-gold transition-colors ${
                          errors.companyName ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder="e.g. Dream Weddings Co."
                      />
                      {errors.companyName && <p className="text-red-500/70 text-xs mt-1.5 font-medium">{errors.companyName}</p>}
                    </div>

                    {/* Contact Person */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">Contact Name</label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        className={`w-full bg-white/[0.02] border rounded-2xl py-3.5 px-5 text-sm text-darkbrown focus:outline-none focus:border-gold transition-colors ${
                          errors.contactName ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder="e.g. Ramesh Kumar"
                      />
                      {errors.contactName && <p className="text-red-500/70 text-xs mt-1.5 font-medium">{errors.contactName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">B2B Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full bg-white/[0.02] border rounded-2xl py-3.5 px-5 text-sm text-darkbrown focus:outline-none focus:border-gold transition-colors ${
                          errors.email ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder="hello@company.com"
                      />
                      {errors.email && <p className="text-red-500/70 text-xs mt-1.5 font-medium">{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">Mobile Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full bg-white/[0.02] border rounded-2xl py-3.5 px-5 text-sm text-darkbrown focus:outline-none focus:border-gold transition-colors ${
                          errors.phone ? "border-red-500/50" : "border-white/10"
                        }`}
                        placeholder="e.g. +91 98765 43210"
                      />
                      {errors.phone && <p className="text-red-500/70 text-xs mt-1.5 font-medium">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    
                    {/* Partner Type */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">Partner Category</label>
                      <select
                        name="partnerType"
                        value={formData.partnerType}
                        onChange={handleInputChange}
                        className="w-full bg-[#030806] border border-white/10 rounded-2xl py-3.5 px-5 text-sm text-darkbrown/90 focus:outline-none focus:border-gold transition-colors cursor-pointer"
                      >
                        <option value="Wedding Planner">Wedding Planner / Event Director</option>
                        <option value="Hotel Manager">Hotel Banquets Manager</option>
                        <option value="Caterer">Luxury Caterer</option>
                        <option value="Corporate Marketer">Corporate Marketing Agent</option>
                        <option value="Other">Other / Individual Planner</option>
                      </select>
                    </div>

                    {/* Event Frequency */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">Estimated Event Volume</label>
                      <select
                        name="eventFrequency"
                        value={formData.eventFrequency}
                        onChange={handleInputChange}
                        className="w-full bg-[#030806] border border-white/10 rounded-2xl py-3.5 px-5 text-sm text-darkbrown/90 focus:outline-none focus:border-gold transition-colors cursor-pointer"
                      >
                        <option value="Less than 5 events/year">Less than 5 premium events/year</option>
                        <option value="5-15 events/year">5 to 15 premium events/year</option>
                        <option value="15+ events/year">15+ premium events/year</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-darkbrown/60 mb-2">Collaborative Notes / Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full bg-white/[0.02] border border-white/10 rounded-2xl py-3.5 px-5 text-sm text-darkbrown focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="Specify typical event venues, decor styles, or details you wish to discuss..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-brandgreen to-[#10B981] hover:from-gold hover:to-[#F6E3B4] text-cream hover:text-cream font-bold py-4 rounded-2xl transition-all duration-500 flex items-center justify-center gap-2 tracking-wide uppercase text-xs cursor-pointer shadow-lg shadow-brandgreen/10"
                  >
                    Submit Partnership Request <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>
        </div>

      </div>

      {/* Side-Drawer Modal for Collaboration Case Studies */}
      {activePartnerIdx !== null && (
        <div
          onClick={() => setActivePartnerIdx(null)}
          className="fixed inset-0 z-50 bg-black/96 backdrop-blur-md flex items-center justify-end transition-all duration-500"
        >
          {/* Drawer Body Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl h-screen bg-[#050D0A]/95 border-l border-white/10 backdrop-blur-lg flex flex-col justify-between p-8 md:p-12 relative overflow-y-auto no-scrollbar animate-fade-in"
          >
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandgreen/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Header / Close button */}
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
                <span className="text-[10px] tracking-widest text-gold uppercase font-bold bg-gold/10 border border-gold/20 px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                  <Handshake className="w-3.5 h-3.5" /> Collaboration Profile
                </span>
                
                <button
                  onClick={() => setActivePartnerIdx(null)}
                  className="text-white/50 hover:text-gold p-2.5 rounded-full cursor-pointer transition-colors bg-white/5 border border-white/10 hover:border-gold/40"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Title, Category & Location */}
              <div className="mb-8">
                <span className="text-xs font-bold text-brandgreen uppercase tracking-wider mb-2 block">
                  {partners[activePartnerIdx].type}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mb-3">
                  {partners[activePartnerIdx].name}
                </h3>
                <p className="text-xs text-darkbrown/40 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Building className="w-3.5 h-3.5 text-brandgreen" /> {partners[activePartnerIdx].location}
                </p>
              </div>

              {/* Story */}
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2">Collaboration Summary</h4>
                  <p className="text-sm md:text-base text-darkbrown/85 leading-relaxed">
                    {partners[activePartnerIdx].story}
                  </p>
                </div>

                {/* Highlight Quote */}
                <div className="bg-white/[0.02] border-l-2 border-gold rounded-r-2xl p-5 md:p-6 italic text-sm md:text-base text-darkbrown/80 font-medium leading-relaxed my-6">
                  "{partners[activePartnerIdx].quote}"
                  <span className="block text-xs uppercase tracking-widest text-gold font-bold not-italic mt-3">
                    — Banquet / Planner Director Quote
                  </span>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-2.5">Joint Metrics & Outcome</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-[10px] uppercase text-darkbrown/40 block tracking-wider font-semibold">Service Volume</span>
                      <p className="text-base font-bold text-darkbrown mt-1">{partners[activePartnerIdx].volume}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-[10px] uppercase text-darkbrown/40 block tracking-wider font-semibold">Quality Index</span>
                      <p className="text-base font-bold text-darkbrown mt-1">{partners[activePartnerIdx].metricScore}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-[10px] uppercase text-darkbrown/40 block tracking-wider font-semibold">Counter Configuration</span>
                      <p className="text-xs font-bold text-gold mt-1 leading-snug">{partners[activePartnerIdx].setup}</p>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                      <span className="text-[10px] uppercase text-darkbrown/40 block tracking-wider font-semibold">Special Highlight</span>
                      <p className="text-xs font-bold text-gold mt-1 leading-snug">{partners[activePartnerIdx].highlight}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* B2B Contact Link inside Drawer */}
            <div className="border-t border-white/10 pt-6 mt-8">
              <a
                href="#enquiry-form"
                onClick={() => setActivePartnerIdx(null)}
                className="w-full bg-gradient-to-r from-brandgreen to-[#10B981] hover:from-gold hover:to-[#F6E3B4] text-cream hover:text-cream font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-500 text-xs tracking-wider uppercase"
              >
                Inquire For Venue Partnership <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

