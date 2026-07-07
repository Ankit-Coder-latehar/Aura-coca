import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import gsap from "gsap";

export default function TestimonialSlider() {
  const testimonials = [
    {
      name: "Anjum Akthar",
      role: "Wedding Client",
      quote: "Mo'Cocos was the absolute highlight of our wedding in Bangalore! The engraved monogram design on the coconuts was exactly what we wanted, and our guests couldn't stop taking pictures. The service was pristine.",
      rating: 5,
    },
    {
      name: "Padmanabhan Kolar",
      role: "Corporate Event Host",
      quote: "Outstanding professionalism! The branding on the coconuts was incredibly sharp and clean. The coco cart set up matched our premium corporate theme perfectly. Highly recommend their services.",
      rating: 5,
    },
    {
      name: "Zaib Sherief",
      role: "Engagement Ceremony",
      quote: "We opted for DIY Décor package with the coco assistant. The assistant was polite, hygienic, and extremely helpful. The Tiki bar set up was a showstopper. Highly satisfied!",
      rating: 5,
    },
    {
      name: "Monica Manjunath",
      role: "Private Reception",
      quote: "Beautiful and unique concept! Perfect alternative to aerated drinks. Engraved coconuts are healthy, premium, and look stunning. The guests were surprised and delighted.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardRef = useRef(null);

  const slideTransition = (nextIndex) => {
    gsap.to(cardRef.current, {
      opacity: 0,
      x: -30,
      duration: 0.3,
      onComplete: () => {
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          cardRef.current,
          { opacity: 0, x: 30 },
          { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
        );
      },
    });
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % testimonials.length;
    slideTransition(nextIndex);
  };

  const handlePrev = () => {
    const nextIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    slideTransition(nextIndex);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 relative">
      <div
        ref={cardRef}
        className="bg-white border border-[#0F3D26]/5 rounded-3xl p-8 md:p-12 shadow-xl relative"
      >
        {/* Quote mark decoration */}
        <span className="absolute top-6 left-6 text-brandgreen/10 font-serif text-8xl leading-none select-none">
          “
        </span>

        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Star Ratings */}
          <div className="flex space-x-1 mb-6">
            {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-gold text-gold" />
            ))}
          </div>

          <p className="font-serif text-lg md:text-2xl text-darkbrown italic leading-relaxed mb-8 max-w-2xl">
            "{testimonials[currentIndex].quote}"
          </p>

          <h4 className="font-sans font-bold text-lg text-darkbrown">
            {testimonials[currentIndex].name}
          </h4>
          <p className="text-sm text-brandgreen font-medium">
            {testimonials[currentIndex].role}
          </p>
        </div>
      </div>

      {/* Control Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button
          onClick={handlePrev}
          className="bg-white hover:bg-brandgreen hover:text-white border border-[#0F3D26]/10 p-3 rounded-full text-darkbrown transition-all duration-300 shadow-md cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="bg-white hover:bg-brandgreen hover:text-white border border-[#0F3D26]/10 p-3 rounded-full text-darkbrown transition-all duration-300 shadow-md cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
