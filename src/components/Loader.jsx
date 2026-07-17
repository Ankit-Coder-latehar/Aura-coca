import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Sparkles } from "lucide-react";

export default function Loader({ onComplete, duration = 2500 }) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Sourcing organic coconuts...");
  const containerRef = useRef(null);

  useEffect(() => {
    const intervalTime = 25; // 25ms steps
    const totalSteps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const percent = Math.min(Math.round((currentStep / totalSteps) * 100), 100);
      setProgress(percent);

      // Transition status texts
      if (percent < 35) {
        setStatusText("Sourcing organic coconuts from local Karnataka farms...");
      } else if (percent < 70) {
        setStatusText("Engraving premium monograms with food-safe lasers...");
      } else if (percent < 95) {
        setStatusText("Chilling your tropical welcome drinks...");
      } else {
        setStatusText("Ready to serve!");
      }

      if (percent === 100) {
        clearInterval(timer);
        // Exiting animation
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -80,
          scale: 0.95,
          duration: 0.6,
          ease: "power3.inOut",
          onComplete: onComplete,
        });
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete, duration]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen bg-[#030806] z-[9999] flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Ambient background glows */}
      <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-brandgreen/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[10s]" />
      <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[12s]" />

      {/* Central Loader Box */}
      <div className="relative flex flex-col items-center max-w-md w-full">
        {/* Animated Stars */}
        <div className="absolute -top-12 -left-4 text-gold animate-bounce duration-[4s]">
          <Sparkles className="w-5 h-5 text-gold opacity-60" />
        </div>
        <div className="absolute -top-6 -right-6 text-brandgreen animate-bounce duration-[6s] delay-1000">
          <Sparkles className="w-6 h-6 text-[#10B981] opacity-60" />
        </div>

        {/* Trimmed Coconut Vector SVG */}
        <div className="relative w-40 h-40 mb-10 group">
          {/* Ambient pulse glow behind coconut */}
          <div className="absolute inset-0 bg-brandgreen/10 rounded-full blur-xl scale-125 group-hover:bg-gold/10 transition-colors duration-500 animate-pulse" />

          <svg
            className="w-full h-full drop-shadow-[0_15px_30px_rgba(16,185,129,0.15)] relative z-10 animate-float"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer Coconut Shell (Trimmed pentagonal outline) */}
            <path
              d="M20,45 L32,80 L68,80 L80,45 L68,25 L32,25 Z"
              fill="#072216"
              stroke="#10B981"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />

            {/* White Trimmed Inner Upper Area */}
            <path
              d="M32,25 L68,25 L62,38 L38,38 Z"
              fill="#FFFFFF"
              opacity="0.95"
            />

            {/* Clipping path to animate the water filling */}
            <clipPath id="waterClip">
              <rect x="0" y={80 - (progress * 0.52)} width="100" height="100" />
            </clipPath>

            {/* Water/Beverage Fill (Glows up with loading percentage) */}
            <path
              d="M23,45 L33,77 L67,77 L77,45 L66,28 L34,28 Z"
              fill="#0F3D26"
            />
            <path
              d="M23,45 L33,77 L67,77 L77,45 L66,28 L34,28 Z"
              fill="#E2C375"
              opacity="0.35"
              clipPath="url(#waterClip)"
            />

            {/* Engraving opening hole */}
            <ellipse cx="50" cy="27" rx="7" ry="3.5" fill="#040b07" stroke="#E2C375" strokeWidth="1" />

            {/* Gold Straw */}
            <path
              d="M51,27 L66,8 C66.5,7.3 67.5,7.3 68,8 C68.5,8.7 68.2,9.8 67.5,10.2 L52.5,28.5 Z"
              fill="url(#goldGradient)"
              stroke="#E2C375"
              strokeWidth="1.5"
            />

            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ECEFEF" />
                <stop offset="50%" stopColor="#E2C375" />
                <stop offset="100%" stopColor="#8A6F27" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Progress Percentage */}
        <span className="font-serif text-5xl font-extrabold text-gold mb-3 tracking-widest tabular-nums drop-shadow-[0_0_15px_rgba(226,195,117,0.3)]">
          {progress}%
        </span>

        {/* Status updates */}
        <p className="text-sm font-sans font-medium text-[#ECEFEF]/60 text-center min-h-[40px] px-4 mb-8 max-w-sm tracking-wide leading-relaxed">
          {statusText}
        </p>

        {/* Progress bar line */}
        <div className="w-64 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10 relative p-[1px]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brandgreen via-gold to-brandgreen shadow-[0_0_10px_rgba(226,195,117,0.5)] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Bottom Branding Tagline */}
        <div className="mt-16 flex items-center space-x-2 text-[10px] uppercase tracking-widest text-[#ECEFEF]/30 font-semibold">
          <span>Aura Coco</span>
          <span className="text-gold">•</span>
          <span>Eco-Luxury Events</span>
        </div>
      </div>
    </div>
  );
}
