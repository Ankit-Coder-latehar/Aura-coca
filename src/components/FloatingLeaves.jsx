import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingLeaves() {
  const leavesRef = useRef([]);

  useEffect(() => {
    // Subtle continuous floating animation
    leavesRef.current.forEach((leaf, idx) => {
      if (!leaf) return;
      
      const randomX = gsap.utils.random(-15, 15);
      const randomY = gsap.utils.random(-20, 20);
      const randomRot = gsap.utils.random(-10, 10);
      const randomDur = gsap.utils.random(4, 8);

      gsap.to(leaf, {
        x: `+=${randomX}`,
        y: `+=${randomY}`,
        rotation: `+=${randomRot}`,
        duration: randomDur,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: idx * 0.5,
      });
    });

    // Parallax mouse-move reaction
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      leavesRef.current.forEach((leaf, idx) => {
        if (!leaf) return;
        const depth = (idx + 1) * 0.015;
        const moveX = (clientX - width / 2) * depth;
        const moveY = (clientY - height / 2) * depth;

        gsap.to(leaf, {
          x: moveX,
          y: moveY,
          duration: 1,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Leaf SVGs
  const LeafIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor">
      <path d="M10,80 Q50,40 90,20 Q60,50 10,80" />
      <path d="M20,80 Q50,50 80,35" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
      <path d="M30,80 Q50,60 70,50" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.3" />
    </svg>
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Top Left Leaf */}
      <div
        ref={(el) => (leavesRef.current[0] = el)}
        className="absolute top-20 left-[5%] text-brandgreen/8 w-24 h-24 md:w-36 md:h-36"
      >
        <LeafIcon className="transform -rotate-45" />
      </div>

      {/* Top Right Leaf */}
      <div
        ref={(el) => (leavesRef.current[1] = el)}
        className="absolute top-40 right-[8%] text-brandgreen/8 w-28 h-28 md:w-44 md:h-44"
      >
        <LeafIcon className="transform rotate-90" />
      </div>

      {/* Mid Left Leaf */}
      <div
        ref={(el) => (leavesRef.current[2] = el)}
        className="absolute top-[45%] left-[2%] text-[#0F3D26]/5 w-20 h-20 md:w-32 md:h-32"
      >
        <LeafIcon className="transform rotate-12" />
      </div>

      {/* Mid Right Leaf */}
      <div
        ref={(el) => (leavesRef.current[3] = el)}
        className="absolute top-[65%] right-[5%] text-[#0F3D26]/5 w-24 h-24 md:w-40 md:h-40"
      >
        <LeafIcon className="transform -rotate-90" />
      </div>

      {/* Bottom Left Leaf */}
      <div
        ref={(el) => (leavesRef.current[4] = el)}
        className="absolute bottom-40 left-[8%] text-brandgreen/8 w-28 h-28 md:w-40 md:h-40"
      >
        <LeafIcon className="transform rotate-45" />
      </div>
    </div>
  );
}
