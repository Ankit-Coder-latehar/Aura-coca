import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, ArrowRight, ShieldCheck, Palette, Sparkles, Send } from "lucide-react";
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
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

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

    // Why Us scroll animations
    gsap.fromTo(
      whyUsRef.current.querySelectorAll(".feature-card"),
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
        },
      }
    );

    // Process scroll animations
    gsap.fromTo(
      processRef.current.querySelectorAll(".process-step"),
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 80%",
        },
      }
    );

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
    <div className="relative min-h-screen">
      {/* Parallax Floating Leaves Background */}
      <FloatingLeaves />

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto pt-16 pb-24 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <div ref={heroTextRef} className="flex flex-col space-y-6">
          <span className="bg-[#0F3D26]/5 text-[#0F3D26] px-4 py-1.5 rounded-full text-sm font-semibold tracking-wider uppercase self-start border border-[#0F3D26]/10 flex items-center">
            <Sparkles className="w-4 h-4 text-brandgreen mr-2 animate-pulse" />
            Bangalore's Original Premium Coconut Service
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-extrabold leading-tight text-darkbrown">
            Aura <span className="text-brandgreen">coco</span> <br />
            <span className="text-stroke-green font-sans font-black">the trendy</span> coconut
          </h1>
          <p className="text-lg md:text-xl text-darkbrown/80 leading-relaxed max-w-lg">
            Add a unique touch of sustainable tropical luxury to your weddings, engagements, and corporate events with custom logo-engraved tender coconuts.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <Link
              to="/packages"
              className="bg-brandgreen hover:bg-[#0F3D26] text-white px-8 py-4 rounded-full font-bold text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center space-x-2"
            >
              <span>Explore Packages</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+917483261771"
              className="border-2 border-darkbrown/20 hover:border-brandgreen text-darkbrown hover:text-brandgreen px-8 py-4 rounded-full font-bold text-center transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call +91 74832 61771</span>
            </a>
          </div>
        </div>

        {/* Hero image placeholder with absolute decorative items */}
        <div ref={heroImageRef} className="relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-[#0F3D26]/5 flex items-center justify-center border-4 border-dashed border-[#0F3D26]/10">
            {/* Main Coconut Mock Image */}
            <div className="w-[85%] h-[85%] rounded-full overflow-hidden bg-cover bg-center shadow-2xl relative" style={{ backgroundImage: `url('/Screenshot 2026-07-07 154342.png')` }}>
              <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-8 text-white font-serif">
                <span className="text-xs uppercase tracking-widest text-brandgreen font-bold bg-[#FCFBF7] px-3 py-1 rounded-full self-start mb-2">Engraved</span>
                <h3 className="text-xl font-bold">"Rohan & Riya" Save The Date Stamp</h3>
              </div>
            </div>
            {/* Absolute Badges */}
            <div className="absolute -top-4 -left-4 bg-[#0F3D26] text-white p-4 rounded-2xl rotate-[-6deg] shadow-lg text-center hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-brandgreen">Hydration</p>
              <p className="font-serif text-lg font-bold">100% Pure & Fresh</p>
            </div>
            <div className="absolute bottom-10 -right-6 bg-brandgreen text-white p-4 rounded-2xl rotate-[8deg] shadow-lg text-center hidden md:block">
              <p className="text-xs font-semibold uppercase tracking-wider text-white/80">Concept</p>
              <p className="font-serif text-lg font-bold">Eco-friendly Luxury</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section ref={whyUsRef} className="bg-white/60 backdrop-blur-md py-20 px-6 md:px-12 border-y border-[#0F3D26]/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkbrown mb-4">Why Choose Aura coco?</h2>
            <p className="text-darkbrown/70">Redefining guest welcome refreshments at celebrations in Bangalore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="feature-card bg-[#FCFBF7] border border-[#0F3D26]/5 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandgreen group-hover:text-white transition-colors duration-300">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-darkbrown">Ethically Sourced</h3>
              <p className="text-darkbrown/70 leading-relaxed">
                Hand-picked top-grade coconuts sourced directly from organic local farms around Karnataka, guaranteeing high water yield and premium quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feature-card bg-[#FCFBF7] border border-[#0F3D26]/5 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandgreen group-hover:text-white transition-colors duration-300">
                <Palette className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-darkbrown">Fully Customisable</h3>
              <p className="text-darkbrown/70 leading-relaxed">
                Your wedding monograms, hashtag stamps, corporate logos, or customized messages engraved with high-precision food-safe lasers.
              </p>
            </div>

            {/* Card 3 */}
            <div className="feature-card bg-[#FCFBF7] border border-[#0F3D26]/5 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="bg-brandgreen/10 text-brandgreen w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brandgreen group-hover:text-white transition-colors duration-300">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4 text-darkbrown">Bespoke Setups</h3>
              <p className="text-darkbrown/70 leading-relaxed">
                From luxury rustic coco carts decorated with fresh tropical leaves to exotic tiki bar stations, we align our serving stalls with your event theme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Infinite Scrolling Partners/Clients Section */}
      <section className="py-12 bg-white/40 border-b border-[#0F3D26]/5 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <p className="text-center font-semibold text-[#0F3D26] uppercase tracking-wider text-xs md:text-sm">
            Trusted by Bangalore's Leading Venues & Wedding Planners
          </p>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden py-4 bg-white/30 backdrop-blur-sm border-y border-[#0F3D26]/5">
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
              <span key={`ticker-1-${idx}`} className="text-darkbrown/60 font-serif text-xl md:text-2xl font-bold flex items-center">
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
              <span key={`ticker-2-${idx}`} className="text-darkbrown/60 font-serif text-xl md:text-2xl font-bold flex items-center">
                <span className="text-brandgreen mr-4 text-3xl">•</span>
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Our 3-Step Process Section */}
      <section ref={processRef} className="py-20 px-6 md:px-12 relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkbrown mb-4">How It Works</h2>
          <p className="text-darkbrown/70">Seamless execution from booking to the final toast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[25%] left-[10%] right-[10%] h-[2px] bg-[#0F3D26]/10 z-0"></div>

          {/* Step 1 */}
          <div className="process-step flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-brandgreen text-white font-bold text-xl flex items-center justify-center shadow-lg mb-6">
              1
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Book Your Date</h3>
            <p className="text-darkbrown/70 text-sm max-w-xs">
              Reach out with your event date, location, and guest list count. Securing the date takes just a small deposit.
            </p>
          </div>

          {/* Step 2 */}
          <div className="process-step flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-[#0F3D26] text-white font-bold text-xl flex items-center justify-center shadow-lg mb-6">
              2
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Design Your Stamp</h3>
            <p className="text-darkbrown/70 text-sm max-w-xs">
              Work with our graphics team to create your custom logo engraving or select from one of our popular floral borders.
            </p>
          </div>

          {/* Step 3 */}
          <div className="process-step flex flex-col items-center text-center relative z-10">
            <div className="w-16 h-16 rounded-full bg-brandgreen text-white font-bold text-xl flex items-center justify-center shadow-lg mb-6">
              3
            </div>
            <h3 className="font-serif text-xl font-bold mb-2">Event Celebration</h3>
            <p className="text-darkbrown/70 text-sm max-w-xs">
              Our assistants arrive at the venue with fresh coconuts, set up our cart, and serve guests fresh, hygienic drinks.
            </p>
          </div>
        </div>
      </section>

      {/* Tiki Bar Setup Spotlight */}
      <section ref={tikiRef} className="py-16 px-6 md:px-12 relative z-10 max-w-7xl mx-auto">
        <div className="bg-[#0F3D26] text-white rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2 shadow-2xl">
          <div className="p-12 md:p-16 flex flex-col justify-center space-y-6">
            <span className="text-brandgreen font-bold uppercase tracking-wider text-xs bg-white/10 px-3 py-1.5 rounded-full self-start">
              Premium Upgrade
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Set Up An Exotic <br />
              <span className="text-brandgreen">Tropical Tiki-Bar</span>
            </h2>
            <p className="text-[#FCFBF7]/80 leading-relaxed">
              Transport your guests to a coastal paradise with our customized Tiki-Bar setup. Decorated with bamboo props, tropical plants, floral hangings, and served by professional coconut cart hosts, it is the ultimate photo point for luxury Bangalore functions.
            </p>
            <Link
              to="/contact"
              className="bg-brandgreen hover:bg-white hover:text-darkgreen text-white px-8 py-3.5 rounded-full font-bold self-start transition-all duration-300 shadow-md flex items-center space-x-2"
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
      <section className="bg-white/40 py-20 border-t border-[#0F3D26]/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkbrown mb-4">Love From Our Clients</h2>
            <p className="text-darkbrown/70">What couples and planners in Bangalore say about Aura coco.</p>
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
                className="inline-block w-80 md:w-[420px] bg-white border border-[#0F3D26]/5 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 whitespace-normal shrink-0 relative"
              >
                <span className="absolute top-4 left-4 text-brandgreen/10 font-serif text-6xl leading-none select-none">“</span>
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif text-sm md:text-base text-darkbrown italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-darkbrown">{t.name}</h4>
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
                className="inline-block w-80 md:w-[420px] bg-white border border-[#0F3D26]/5 rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 whitespace-normal shrink-0 relative"
              >
                <span className="absolute top-4 left-4 text-brandgreen/10 font-serif text-6xl leading-none select-none">“</span>
                <div className="relative z-10">
                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="font-serif text-sm md:text-base text-darkbrown italic leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                  <div>
                    <h4 className="font-sans font-bold text-sm text-darkbrown">{t.name}</h4>
                    <p className="text-xs text-brandgreen font-medium">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Blogs Section */}
      <section className="py-20 px-6 md:px-12 bg-white/30 border-t border-[#0F3D26]/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-[#0F3D26]/5 text-[#0F3D26] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase inline-block border border-[#0F3D26]/10 mb-4">
              Latest Insights
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkbrown mb-4">From Our Blogs</h2>
            <p className="text-darkbrown/70">Expert tips on eco-luxury wedding styling, branding, and tropical event curation.</p>
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
              <article key={idx} className="bg-white border border-[#0F3D26]/5 rounded-[30px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col group">
                <div className="relative h-60 overflow-hidden bg-[#0F3D26]/5">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${blog.image}')` }}
                  ></div>
                  <span className="absolute top-4 left-4 bg-[#FCFBF7] text-brandgreen text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {blog.readTime}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs text-darkbrown/50 uppercase tracking-widest font-semibold mb-2 block">{blog.date}</span>
                  <h3 className="font-serif text-xl font-bold text-darkbrown mb-3 group-hover:text-brandgreen transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-darkbrown/70 leading-relaxed mb-6 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <Link to="/contact" className="text-brandgreen hover:text-darkgreen font-semibold text-sm flex items-center mt-auto group/link">
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
        <div className="bg-[#FCFBF7] border border-[#0F3D26]/10 rounded-[30px] p-8 md:p-16 shadow-lg">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-darkbrown mb-3">Request a Quote</h2>
            <p className="text-darkbrown/70">Fill out the quick query form and our team will get back to you with custom packages within 24 hours.</p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#0F3D26] text-white p-8 rounded-2xl text-center shadow-md animate-fade-in">
              <h3 className="font-serif text-2xl font-bold mb-2 text-brandgreen">Thank you, {formData.firstName}!</h3>
              <p className="text-[#FCFBF7]/80">Your message has been received. Our concierge team will call you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-darkbrown mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-darkbrown mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-darkbrown mb-2">Phone / Mobile *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-darkbrown mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-darkbrown mb-2">Your Message</label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details about your event (date, estimated guest count, theme...)"
                  className="w-full px-4 py-3 rounded-xl border border-darkbrown/10 bg-white focus:outline-none focus:border-brandgreen transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#0F3D26] hover:bg-brandgreen text-white font-bold py-4 rounded-xl shadow-lg transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Send Enquiry</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white/50 py-20 px-6 md:px-12 border-t border-[#0F3D26]/5 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-darkbrown mb-4">Frequently Asked Questions</h2>
            <p className="text-darkbrown/70">Everything you need to know about booking Mo'Cocos.</p>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}
