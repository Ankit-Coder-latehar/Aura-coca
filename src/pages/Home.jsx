import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Palette, Sparkles, Send, CalendarRange, PartyPopper, Trophy, Award, Medal, Crown, Star } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TestimonialSlider from "../components/TestimonialSlider";
import FAQAccordion from "../components/FAQAccordion";
import FloatingLeaves from "../components/FloatingLeaves";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroTextRef = useRef(null);
  const heroImageRef = useRef(null);
  const whyUsRef = useRef(null);
  const processRef = useRef(null);
  const tikiRef = useRef(null);
  const progressLineRef = useRef(null);
  const glowDotRef = useRef(null);
  const stepNodesRef = useRef([]);
  const stepCardsRef = useRef([]);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroSlides = [
    {
      url: "/Screenshot 2026-07-07 154342.png",
      tag: "Engraved",
      title: "Custom Monograms",
      description: "Hygienic, chemical-free precision laser engraving with your custom wedding initials, logos or hashtags."
    },
    {
      url: "/Screenshot 2026-07-07 154355.png",
      tag: "Tiki-Bar",
      title: "Exotic Counter Upgrade",
      description: "Transport your guests to a coastal paradise with bamboo backdrops, floral coordinates, and warm event styling."
    },
    {
      url: "/Screenshot 2026-07-07 154424.png",
      tag: "Premium Stall",
      title: "Sustainable Coco Carts",
      description: "Eco-friendly serving setups decorated with fresh tropical leaves and handled by professional assistants."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // FAQ Data
  const faqs = [
    {
      question: "Which locations in Bangalore do you serve?",
      answer: "We serve all locations within Bangalore, including Whitefield, Indiranagar, Koramangala, Jayanagar, Hebbal, Yelahanka, Electronic City, and outskirt resort venues. Transportation costs apply based on actual distance.",
    },
    {
      question: "How far in advance do I need to book?",
      answer: "We recommend booking at least 2 to 4 weeks in advance to secure your event date, custom branding blocks, and event assistance. For peak wedding seasons (November - February), booking 2 months in advance is highly suggested.",
    },
    {
      question: "How do you customize the coconuts?",
      answer: "We use food-safe, high-precision engraving technology to stamp/emboss your custom initials, wedding logos, hashtags, corporate branding, or templates directly onto clean, trimmed tender coconuts. No inks or harmful chemicals are used.",
    },
    {
      question: "Who is responsible for coconut shell disposal?",
      answer: "According to our standard policies, coconut shell disposal must be carried out by the service taker/venue organizers. However, we ensure all shells are neatly gathered in designated garbage bags at our coco cart station before leaving.",
    },
  ];

  // GSAP Animations
  useEffect(() => {
    // Hero load animations
    const tl = gsap.timeline();
    tl.fromTo(
      heroTextRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
    tl.fromTo(
      heroImageRef.current,
      { scale: 0.8, opacity: 0, rotate: -10 },
      { scale: 1, opacity: 1, rotate: 0, duration: 1, ease: "back.out(1.7)" },
      "-=0.6"
    );

    // Why Us heading and card scroll animations
    const whyUsHeading = whyUsRef.current.querySelector(".max-w-2xl");
    if (whyUsHeading) {
      gsap.fromTo(
        whyUsHeading.children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: whyUsRef.current,
            start: "top 85%",
          }
        }
      );
    }

    gsap.fromTo(
      whyUsRef.current.querySelectorAll(".award-badge-container"),
      { scale: 0.3, opacity: 0, rotationY: 90 },
      {
        scale: 1,
        opacity: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      whyUsRef.current.querySelectorAll(".feature-card"),
      { y: 50, scale: 0.95, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 65%",
        },
      }
    );

    // Filter refs to exclude any nulls from re-renders
    const nodes = stepNodesRef.current.filter(Boolean);
    const cards = stepCardsRef.current.filter(Boolean);

    // Roadmap timeline ScrollTrigger
    if (processRef.current && progressLineRef.current && glowDotRef.current && nodes.length > 0) {
      // Pre-set initial states for cards and nodes to prevent flashes
      gsap.set(cards, { opacity: 0, y: 40, scale: 0.95 });
      gsap.set(nodes, { scale: 0.9, backgroundColor: "#072216", borderColor: "rgba(255, 255, 255, 0.1)" });

      const roadmapTl = gsap.timeline({
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 70%",
          end: "bottom 75%",
          scrub: 0.8,
        }
      });

      // Animate progress line and traveling glow dot together
      roadmapTl.to(progressLineRef.current, {
        height: "100%",
        ease: "none",
        duration: 3
      }, 0);

      roadmapTl.to(glowDotRef.current, {
        top: "100%",
        ease: "none",
        duration: 3
      }, 0);

      // Card & Node Animations
      // Step 1: Active early in scroll
      roadmapTl.to(nodes[0], {
        scale: 1.25,
        backgroundColor: "#10B981", // brandgreen
        borderColor: "#10B981",
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
        duration: 0.3
      }, 0.2);
      
      roadmapTl.to(cards[0], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5
      }, 0.2);

      // Step 2: Active in mid scroll
      roadmapTl.to(nodes[1], {
        scale: 1.25,
        backgroundColor: "#E2C375", // gold
        borderColor: "#E2C375",
        boxShadow: "0 0 15px rgba(226, 195, 117, 0.7)",
        duration: 0.3
      }, 1.3);

      roadmapTl.to(cards[1], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5
      }, 1.3);

      // Step 3: Active near bottom
      roadmapTl.to(nodes[2], {
        scale: 1.25,
        backgroundColor: "#10B981", // brandgreen
        borderColor: "#10B981",
        boxShadow: "0 0 15px rgba(16, 185, 129, 0.6)",
        duration: 0.3
      }, 2.5);

      roadmapTl.to(cards[2], {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5
      }, 2.5);
    }

    // Tiki Bar parallax/reveal
    gsap.fromTo(
      tikiRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: tikiRef.current,
          start: "top 85%",
        },
      }
    );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.firstName && formData.phone) {
      try {
        const response = await fetch("https://formspree.io/f/xzdlwyov", {
          method: "POST",
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            email: formData.email,
            message: formData.message
          })
        });

        if (response.ok) {
          setFormSubmitted(true);
          setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ firstName: "", lastName: "", phone: "", email: "", message: "" });
          }, 5000);
        } else {
          alert("Submission failed. Please try again!");
        }
      } catch (err) {
        console.error("Formspree Error:", err);
        alert("An error occurred. Please try again!");
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030806] text-[#ECEFEF]">
      {/* Parallax Floating Leaves Background */}
      <FloatingLeaves />

      {/* Ambient background glows */}
      <div className="glow-blob w-96 h-96 bg-brandgreen/20 -top-20 -left-20"></div>
      <div className="glow-blob w-96 h-96 bg-gold/10 top-[20%] right-[-10%]"></div>
      <div className="glow-blob w-80 h-80 bg-brandgreen/15 bottom-[30%] left-[10%]"></div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto pt-32 pb-28 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div ref={heroTextRef} className="flex flex-col space-y-6">
          <span className="bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase self-start border border-gold/20 flex items-center">
            <Sparkles className="w-4 h-4 text-gold mr-2 animate-pulse" />
            Bangalore's Original Premium Coconut Service
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold leading-tight text-[#ECEFEF]">
            Aura <span className="bg-gradient-to-r from-brandgreen via-gold to-brandgreen bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">coco</span> <br />
            <span className="text-stroke-green font-sans font-black">the trendy</span> coconut
          </h1>
          <p className="text-lg md:text-xl text-[#ECEFEF]/80 leading-relaxed max-w-lg">
            Add a unique touch of sustainable tropical luxury to your weddings, engagements, and corporate events with custom logo-engraved tender coconuts.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              to="/packages"
              className="bg-brandgreen hover:bg-gold hover:text-[#030806] text-white px-8 py-4 rounded-full font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919538648911"
              className="border-2 border-[#ECEFEF]/20 hover:border-gold text-[#ECEFEF] hover:text-gold px-8 py-4 rounded-full font-bold text-center transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91 95386 48911</span>
            </a>
          </div>
        </div>

        {/* Hero slideshow card with absolute decorative items */}
        <div ref={heroImageRef} className="relative flex justify-center lg:justify-end">
          {/* Decorative glowing blob specifically for the card */}
          <div className="absolute w-72 h-72 bg-brandgreen/10 rounded-full blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
          
          <div className="relative w-[340px] h-[450px] md:w-[380px] md:h-[480px] rounded-[36px] bg-white/[0.02] flex items-center justify-center border border-white/10 p-3 z-10 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            
            {/* Main Premium Card Slideshow */}
            <div className="w-full h-full rounded-[28px] overflow-hidden shadow-2xl relative">
              {heroSlides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    currentSlide === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 pointer-events-none z-0"
                  }`}
                >
                  {/* Card Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-[3000ms] ease-out scale-105"
                    style={{ backgroundImage: `url('${slide.url}')` }}
                  />
                  {/* Dark Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 flex flex-col justify-end p-8 text-white">
                    <span className="text-xs uppercase tracking-widest text-[#030806] font-bold bg-gold px-3.5 py-1.5 rounded-full self-start mb-3 border border-white/10 shadow-lg">
                      {slide.tag}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mb-2 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed font-sans font-medium">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Progress bars / dots for the active card */}
              <div className="absolute bottom-4 left-6 right-6 z-20 flex space-x-2">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className="flex-1 h-1 rounded-full overflow-hidden bg-white/20 transition-all duration-300"
                  >
                    <div
                      className={`h-full bg-gold transition-all duration-[3000ms] linear ${
                        currentSlide === index ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Absolute Decorative Badges */}
            <div className="absolute -top-4 -left-6 bg-[#072216]/95 border border-gold/30 text-white p-4 rounded-2xl rotate-[-6deg] shadow-2xl text-center hidden md:block z-20 backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-wider text-brandgreen">Hydration</p>
              <p className="font-serif text-lg font-bold">100% Pure & Fresh</p>
            </div>
            <div className="absolute -bottom-4 -right-6 bg-gold text-[#030806] p-4 rounded-2xl rotate-[8deg] shadow-2xl text-center hidden md:block z-20 font-bold border border-white/15">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#030806]/85">Concept</p>
              <p className="font-serif text-lg">Eco-Luxury</p>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center cursor-pointer group"
          onClick={() => whyUsRef.current?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-[10px] uppercase tracking-widest text-[#ECEFEF]/40 font-semibold mb-2 group-hover:text-gold transition-colors">Scroll to Explore</span>
          <div className="w-5 h-8 rounded-full border border-white/20 relative group-hover:border-gold/50 transition-colors">
            <div className="absolute top-1.5 left-1/2 w-1 h-1 rounded-full bg-gold animate-scroll" />
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section 
        ref={whyUsRef} 
        className="relative bg-gradient-to-b from-[#030806] via-[#051C11]/10 to-[#030806] py-24 px-6 md:px-12 border-y border-white/5 overflow-hidden z-10"
      >
        {/* Ambient background glows */}
        <div className="absolute top-1/2 left-[-10%] w-96 h-96 bg-brandgreen/5 rounded-full blur-[90px] pointer-events-none z-0 animate-pulse duration-[12s]" />
        <div className="absolute top-1/2 right-[-10%] w-96 h-96 bg-gold/5 rounded-full blur-[90px] pointer-events-none z-0 animate-pulse duration-[15s]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold/20 via-brandgreen/10 to-gold/20 text-gold px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase border border-gold/30 mb-6 shadow-[0_0_15px_rgba(226,195,117,0.15)] animate-pulse">
              <Trophy className="w-4 h-4 text-gold animate-bounce" />
              <span>★ Award-Winning Premium Refreshment Concept ★</span>
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#ECEFEF] mb-4">Why Choose Aura coco?</h2>
            <p className="text-[#ECEFEF]/70">Redefining guest welcome refreshments at celebrations in Bangalore with award-winning luxury.</p>
          </div>

          {/* Awards Showcase Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20 px-4">
            {/* Award 1 */}
            <div className="award-badge-container flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1.5 group">
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                {/* Rotating Dotted Ring */}
                <div className="absolute inset-0 border border-dashed border-gold/40 rounded-full animate-slow-spin" />
                {/* Gold Backdrop Glow */}
                <div className="absolute w-16 h-16 bg-gold/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                {/* Badge Container */}
                <div className="w-16 h-16 bg-[#030806] rounded-full border border-gold/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative shadow-[0_0_15px_rgba(226,195,117,0.1)]">
                  <Trophy className="w-7 h-7 text-gold group-hover:rotate-12 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1 bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">Winner 2025</span>
              <h4 className="font-serif text-lg font-bold text-[#ECEFEF] mb-1">Best Luxury Concept</h4>
              <p className="text-xs text-[#ECEFEF]/60 max-w-[220px]">Recognised as the #1 event welcome drink concept in Bangalore.</p>
            </div>

            {/* Award 2 */}
            <div className="award-badge-container flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-brandgreen/30 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1.5 group">
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 border border-dashed border-brandgreen/40 rounded-full animate-slow-spin-reverse" />
                <div className="absolute w-16 h-16 bg-brandgreen/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-[#030806] rounded-full border border-brandgreen/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <Award className="w-7 h-7 text-brandgreen group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-brandgreen text-[10px] font-bold uppercase tracking-widest mb-1 bg-brandgreen/10 px-2 py-0.5 rounded-full border border-brandgreen/20">Certified</span>
              <h4 className="font-serif text-lg font-bold text-[#ECEFEF] mb-1">Eco-Luxury Innovator</h4>
              <p className="text-xs text-[#ECEFEF]/60 max-w-[220px]">100% sustainable materials, organic sourcing, & zero waste footprint.</p>
            </div>

            {/* Award 3 */}
            <div className="award-badge-container flex flex-col items-center text-center p-6 rounded-3xl bg-white/[0.01] border border-white/5 hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-500 hover:-translate-y-1.5 group">
              <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
                <div className="absolute inset-0 border border-dashed border-gold/40 rounded-full animate-slow-spin" />
                <div className="absolute w-16 h-16 bg-gold/10 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 bg-[#030806] rounded-full border border-gold/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative shadow-[0_0_15px_rgba(226,195,117,0.15)]">
                  <Crown className="w-7 h-7 text-gold group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
              <span className="text-gold text-[10px] font-bold uppercase tracking-widest mb-1 bg-gold/10 px-2 py-0.5 rounded-full border border-gold/20">Top Rated</span>
              <h4 className="font-serif text-lg font-bold text-[#ECEFEF] mb-1">Elite Guest Experience</h4>
              <p className="text-xs text-[#ECEFEF]/60 max-w-[220px]">Over 500+ premium weddings served with exceptional five-star reviews.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="feature-card award-card-container group">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between border border-white/5 bg-white/[0.02]">
                {/* Shimmer Sweep Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
                {/* Ambient glow inside card */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brandgreen/5 rounded-full blur-2xl group-hover:bg-brandgreen/15 transition-all duration-500 pointer-events-none" />
                
                <div>
                  <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandgreen group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <ShieldCheck className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#ECEFEF] group-hover:text-gold transition-colors">Ethically Sourced</h3>
                  <p className="text-[#ECEFEF]/70 leading-relaxed text-sm">
                    Hand-picked top-grade coconuts sourced directly from organic local farms around Karnataka, guaranteeing high water yield and premium quality.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="feature-card award-card-container group">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between border border-white/5 bg-white/[0.02]">
                {/* Shimmer Sweep Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
                {/* Ambient glow inside card */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/15 transition-all duration-500 pointer-events-none" />
                
                <div>
                  <div className="bg-gold/10 text-gold w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-[#030806] transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_15px_rgba(226,195,117,0.1)] group-hover:shadow-[0_0_20px_rgba(226,195,117,0.4)]">
                    <Palette className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#ECEFEF] group-hover:text-gold transition-colors">Fully Customisable</h3>
                  <p className="text-[#ECEFEF]/70 leading-relaxed text-sm">
                    Your wedding monograms, hashtag stamps, corporate logos, or customized messages engraved with high-precision food-safe lasers.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="feature-card award-card-container group">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden h-full flex flex-col justify-between border border-white/5 bg-white/[0.02]">
                {/* Shimmer Sweep Effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer-sweep pointer-events-none" />
                {/* Ambient glow inside card */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-brandgreen/5 rounded-full blur-2xl group-hover:bg-brandgreen/15 transition-all duration-500 pointer-events-none" />
                
                <div>
                  <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandgreen group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                    <Sparkles className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-[#ECEFEF] group-hover:text-gold transition-colors">Bespoke Setups</h3>
                  <p className="text-[#ECEFEF]/70 leading-relaxed text-sm">
                    From luxury rustic coco carts decorated with fresh tropical leaves to exotic tiki bar stations, we align our serving stalls with your event theme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Partners/Clients Section */}
      <section className="py-12 bg-white/[0.02] border-b border-white/5 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center font-semibold text-gold uppercase tracking-wider text-xs md:text-sm">
            Trusted by Bangalore's Leading Venues & Wedding Planners
          </p>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden py-4 bg-white/[0.01] backdrop-blur-sm border-y border-white/5">
          <div className="animate-marquee flex items-center space-x-12 whitespace-nowrap">
            {[
              "JW Marriott Bangalore",
              "The Leela Palace Bangalore",
              "Taj West End",
              "Shangri-La Hotel",
              "3Production Weddings",
              "Pledge to Be Green",
              "Sheraton Grand",
              "Ritz-Carlton",
              "Hilton Bangalore",
              "Hyatt Regency"
            ].map((client, idx) => (
              <span key={`ticker-1-${idx}`} className="text-[#ECEFEF]/60 font-serif text-xl md:text-2xl font-bold flex items-center">
                <span className="text-brandgreen mr-4 text-3xl">•</span>
                {client}
              </span>
            ))}
            {/* Duplicate for seamless infinite loop */}
            {[
              "JW Marriott Bangalore",
              "The Leela Palace Bangalore",
              "Taj West End",
              "Shangri-La Hotel",
              "3Production Weddings",
              "Pledge to Be Green",
              "Sheraton Grand",
              "Ritz-Carlton",
              "Hilton Bangalore",
              "Hyatt Regency"
            ].map((client, idx) => (
              <span key={`ticker-2-${idx}`} className="text-[#ECEFEF]/60 font-serif text-xl md:text-2xl font-bold flex items-center">
                <span className="text-brandgreen mr-4 text-3xl">•</span>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our 3-Step Process (Roadmap) Section */}
      <section 
        ref={processRef} 
        className="py-24 px-6 md:px-12 relative z-10 border-y border-white/5 bg-gradient-to-b from-[#030806] via-[#051C11] to-[#030806] overflow-hidden"
      >
        {/* Decorative background ambient blobs for roadmap */}
        <div className="absolute top-1/4 left-[5%] w-80 h-80 bg-brandgreen/8 rounded-full blur-[90px] pointer-events-none animate-pulse duration-[8s]" />
        <div className="absolute bottom-1/4 right-[5%] w-80 h-80 bg-gold/5 rounded-full blur-[90px] pointer-events-none animate-pulse duration-[10s]" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-2xl mx-auto mb-20 relative z-20">
            <span className="bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-block border border-gold/20 mb-4">
              Our Process
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#ECEFEF] mb-4">How It Works</h2>
            <p className="text-[#ECEFEF]/70">Seamless luxury event coordination from initial booking to the final welcome toast.</p>
          </div>

          {/* The Timeline Roadmap container */}
          <div className="relative max-w-5xl mx-auto mt-12 pb-8">
            
            {/* The vertical timeline track */}
            <div className="absolute left-[30px] md:left-1/2 -translate-x-1/2 top-4 bottom-4 w-[2px] bg-white/10 z-0">
              {/* Active progress fill */}
              <div 
                ref={progressLineRef} 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-brandgreen to-gold h-0 z-10" 
              />
              {/* Glowing traveling dot */}
              <div 
                ref={glowDotRef} 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold shadow-[0_0_15px_#E2C375] z-20 -translate-y-1/2" 
              />
            </div>

            {/* Step 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-4 items-center mb-20 md:mb-28 pl-16 md:pl-0">
              
              {/* Node Column (Absolute on mobile, grid col on desktop) */}
              <div className="absolute left-[11px] md:relative md:left-auto md:col-span-1 md:order-2 flex justify-center z-20">
                <div 
                  ref={(el) => (stepNodesRef.current[0] = el)}
                  className="w-10 h-10 rounded-full bg-[#072216] border-2 border-white/10 text-[#ECEFEF] font-serif font-bold text-sm flex items-center justify-center transition-all duration-500 shadow-md"
                >
                  01
                </div>
              </div>

              {/* Card Column */}
              <div className="col-span-1 md:col-span-4 md:order-1 flex justify-end">
                <div 
                  ref={(el) => (stepCardsRef.current[0] = el)}
                  className="process-step-card glass-card rounded-3xl p-8 border border-white/5 w-full max-w-md transition-all duration-500 hover:border-brandgreen/30"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brandgreen/10 text-brandgreen flex items-center justify-center shadow-inner group-hover:bg-brandgreen group-hover:text-white transition-colors duration-300">
                      <CalendarRange className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#ECEFEF]">Book Your Date</h3>
                  </div>
                  <p className="text-[#ECEFEF]/70 leading-relaxed text-sm">
                    Reach out with your event date, location, and guest list count. Securing the date takes just a small deposit.
                  </p>
                </div>
              </div>

              {/* Spacer Column (Desktop only) */}
              <div className="hidden md:block col-span-1 md:col-span-4 md:order-3" />
            </div>

            {/* Step 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-4 items-center mb-20 md:mb-28 pl-16 md:pl-0">
              
              {/* Node Column (Absolute on mobile, grid col on desktop) */}
              <div className="absolute left-[11px] md:relative md:left-auto md:col-span-1 md:order-2 flex justify-center z-20">
                <div 
                  ref={(el) => (stepNodesRef.current[1] = el)}
                  className="w-10 h-10 rounded-full bg-[#072216] border-2 border-white/10 text-[#ECEFEF] font-serif font-bold text-sm flex items-center justify-center transition-all duration-500 shadow-md"
                >
                  02
                </div>
              </div>

              {/* Spacer Column (Desktop only) */}
              <div className="hidden md:block col-span-1 md:col-span-4 md:order-1" />

              {/* Card Column */}
              <div className="col-span-1 md:col-span-4 md:order-3 flex justify-start">
                <div 
                  ref={(el) => (stepCardsRef.current[1] = el)}
                  className="process-step-card glass-card rounded-3xl p-8 border border-white/5 w-full max-w-md transition-all duration-500 hover:border-gold/30"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center shadow-inner group-hover:bg-gold group-hover:text-black transition-colors duration-300">
                      <Palette className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#ECEFEF]">Design Your Stamp</h3>
                  </div>
                  <p className="text-[#ECEFEF]/70 leading-relaxed text-sm">
                    Work with our graphics team to create your custom logo engraving or select from one of our popular floral borders.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-9 gap-8 md:gap-4 items-center pl-16 md:pl-0">
              
              {/* Node Column (Absolute on mobile, grid col on desktop) */}
              <div className="absolute left-[11px] md:relative md:left-auto md:col-span-1 md:order-2 flex justify-center z-20">
                <div 
                  ref={(el) => (stepNodesRef.current[2] = el)}
                  className="w-10 h-10 rounded-full bg-[#072216] border-2 border-white/10 text-[#ECEFEF] font-serif font-bold text-sm flex items-center justify-center transition-all duration-500 shadow-md"
                >
                  03
                </div>
              </div>

              {/* Card Column */}
              <div className="col-span-1 md:col-span-4 md:order-1 flex justify-end">
                <div 
                  ref={(el) => (stepCardsRef.current[2] = el)}
                  className="process-step-card glass-card rounded-3xl p-8 border border-white/5 w-full max-w-md transition-all duration-500 hover:border-brandgreen/30"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brandgreen/10 text-brandgreen flex items-center justify-center shadow-inner group-hover:bg-brandgreen group-hover:text-white transition-colors duration-300">
                      <PartyPopper className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#ECEFEF]">Event Celebration</h3>
                  </div>
                  <p className="text-[#ECEFEF]/70 leading-relaxed text-sm">
                    Our assistants arrive at the venue with fresh coconuts, set up our cart, and serve guests fresh, hygienic drinks.
                  </p>
                </div>
              </div>

              {/* Spacer Column (Desktop only) */}
              <div className="hidden md:block col-span-1 md:col-span-4 md:order-3" />
            </div>

          </div>
        </div>
      </section>

      {/* Tiki Bar Setup Spotlight */}
      <section ref={tikiRef} className="py-16 px-6 md:px-12 relative z-10 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#072216] to-[#030806] border border-white/10 text-white rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          <div className="p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="text-brandgreen font-bold uppercase tracking-wider text-xs bg-white/5 border border-white/10 px-3 py-1.5 rounded-full self-start">
              Premium Upgrade
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Set Up An Exotic <br />
              <span className="text-gold">Tropical Tiki-Bar</span>
            </h2>
            <p className="text-[#ECEFEF]/80 leading-relaxed">
              Transport your guests to a coastal paradise with our customized Tiki-Bar setup. Decorated with bamboo props, tropical plants, floral hangings, and served by professional coconut cart hosts, it is the ultimate photo point for luxury Bangalore functions.
            </p>
            <Link
              to="/contact"
              className="bg-brandgreen hover:bg-gold hover:text-black text-white px-8 py-3.5 rounded-full font-bold self-start transition-all duration-300 shadow-md flex items-center space-x-2"
            >
              <span>Book Tiki-Bar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="h-96 lg:h-auto min-h-[350px] bg-cover bg-center" style={{ backgroundImage: `url('/Screenshot 2026-07-07 154355.png')` }}>
            {/* Visual background */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#072216]/10 py-20 border-t border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#ECEFEF] mb-4">Love From Our Clients</h2>
            <p className="text-[#ECEFEF]/70">What couples and planners in Bangalore say about Aura coco.</p>
          </div>
        </div>

        {/* Infinite Scrolling Testimonial Cards */}
        <div className="relative w-full flex overflow-x-hidden py-4">
          <div className="animate-marquee flex items-center space-x-8 whitespace-nowrap">
            {[
              {
                name: "Anjum Akthar",
                role: "Wedding Client",
                quote: "Aura coco was the absolute highlight of our wedding in Bangalore! The engraved monogram design on the coconuts was exactly what we wanted, and our guests couldn't stop taking pictures.",
              },
              {
                name: "Padmanabhan Kolar",
                role: "Corporate Event Host",
                quote: "Outstanding professionalism! The branding on the coconuts was incredibly sharp and clean. The coco cart set up matched our premium corporate theme perfectly.",
              },
              {
                name: "Zaib Sherief",
                role: "Engagement Ceremony",
                quote: "We opted for DIY Décor package with the coco assistant. The assistant was polite, hygienic, and extremely helpful. The Tiki bar set up was a showstopper.",
              },
            ].map((t, idx) => (
              <div
                key={`testimonial-1-${idx}`}
                className="inline-block w-80 md:w-[420px] glass-card rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 whitespace-normal shrink-0 relative"
              >
                <span className="absolute top-4 left-4 text-gold/10 font-serif text-6xl leading-none select-none">“</span>
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-gold text-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif text-sm md:text-base text-[#ECEFEF] italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#ECEFEF]">{t.name}</h4>
                    <p className="text-xs text-brandgreen font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplicate for seamless loop */}
            {[
              {
                name: "Anjum Akthar",
                role: "Wedding Client",
                quote: "Aura coco was the absolute highlight of our wedding in Bangalore! The engraved monogram design on the coconuts was exactly what we wanted, and our guests couldn't stop taking pictures.",
              },
              {
                name: "Padmanabhan Kolar",
                role: "Corporate Event Host",
                quote: "Outstanding professionalism! The branding on the coconuts was incredibly sharp and clean. The coco cart set up matched our premium corporate theme perfectly.",
              },
              {
                name: "Zaib Sherief",
                role: "Engagement Ceremony",
                quote: "We opted for DIY Décor package with the coco assistant. The assistant was polite, hygienic, and extremely helpful. The Tiki bar set up was a showstopper.",
              },
            ].map((t, idx) => (
              <div
                key={`testimonial-2-${idx}`}
                className="inline-block w-80 md:w-[420px] glass-card rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 whitespace-normal shrink-0 relative"
              >
                <span className="absolute top-4 left-4 text-gold/10 font-serif text-6xl leading-none select-none">“</span>
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-gold text-gold" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif text-sm md:text-base text-[#ECEFEF] italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-[#ECEFEF]">{t.name}</h4>
                    <p className="text-xs text-brandgreen font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Blogs Section */}
      <section className="py-20 px-6 md:px-12 bg-white/[0.01] border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brandgreen/10 text-gold px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-block border border-gold/20 mb-4">
              Latest Insights
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#ECEFEF] mb-4">From Our Blogs</h2>
            <p className="text-[#ECEFEF]/70">Expert tips on eco-luxury wedding styling, branding, and tropical event curation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Why Custom Engraved Coconuts are the New Wedding Trend",
                excerpt: "Discover how couples in Bangalore are opting for organic, eco-friendly welcome drinks instead of mocktails to wow their guests.",
                image: "/Screenshot 2026-07-07 154452.png",
                date: "July 2, 2026",
                readTime: "5 min read"
              },
              {
                title: "The Ultimate Guide to Sustainable Luxury Events",
                excerpt: "Learn how to reduce your event's carbon footprint with bamboo straws, plastic-free setups, and organic catering coordinates.",
                image: "/Screenshot 2026-07-07 154536.png",
                date: "June 28, 2026",
                readTime: "4 min read"
              },
              {
                title: "How to Design Your Custom Wedding Monogram",
                excerpt: "Tips and templates from our design team to create the perfect laser-engraved monogram stamp for your big celebration.",
                image: "/Screenshot 2026-07-07 154555.png",
                date: "June 15, 2026",
                readTime: "6 min read"
              }
            ].map((blog, idx) => (
              <article key={idx} className="glass-card border border-white/5 rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col group">
                <div className="relative h-60 overflow-hidden bg-[#072216]/20">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${blog.image}')` }}
                  ></div>
                  <span className="absolute top-4 left-4 bg-[#030806] text-gold text-xs font-bold px-3 py-1.5 rounded-full shadow-sm border border-white/5">
                    {blog.readTime}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs text-[#ECEFEF]/50 uppercase tracking-widest font-semibold mb-2 block">{blog.date}</span>
                  <h3 className="font-serif text-xl font-bold text-[#ECEFEF] mb-3 group-hover:text-gold transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-[#ECEFEF]/70 leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link to="/contact" className="text-gold hover:text-brandgreen font-semibold text-sm flex items-center mt-auto group/link">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Us Form Section */}
      <section className="py-20 px-6 md:px-12 relative z-10 max-w-5xl mx-auto">
        <div className="glass-card border border-white/10 rounded-[30px] p-8 md:p-16 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#ECEFEF] mb-3">Request a Quote</h2>
            <p className="text-[#ECEFEF]/70">Fill out the quick query form and our team will get back to you with custom packages within 24 hours.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#072216] border border-gold/20 text-white p-8 rounded-2xl text-center shadow-md animate-fade-in">
              <h3 className="font-serif text-2xl font-bold mb-2 text-gold">Thank you, {formData.firstName}!</h3>
              <p className="text-[#ECEFEF]/80">Your message has been received. Our concierge team will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#ECEFEF] mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-gold placeholder-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#ECEFEF] mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-gold placeholder-white/30 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#ECEFEF] mb-2">Phone / Mobile *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-gold placeholder-white/30 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#ECEFEF] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-gold placeholder-white/30 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#ECEFEF] mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about your event (date, estimated guest count, theme...)"
                  className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.02] text-white focus:outline-none focus:border-gold placeholder-white/30 transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brandgreen hover:bg-gold hover:text-[#030806] text-white font-bold py-4 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Send Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#072216]/10 py-20 px-6 md:px-12 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#ECEFEF] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#ECEFEF]/70">Everything you need to know about booking Mo'Cocos.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
