"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    setMounted(true);
    const isMobile = window.innerWidth < 768;
    // On mobile screens, reduce particle count to 14 for 60/120fps scrolling.
    // On desktop, 32 particles give an elegant, high-end ambient feel without lag.
    const particleCount = isMobile ? 14 : 32;

    setParticles(
      [...Array(particleCount)].map(() => ({
        randomLeft: Math.random() * 100,
        randomTop: Math.random() * 100,
        randomSize: Math.random() * 4 + 1.5,
        randomDuration: Math.random() * 8 + 6,
      }))
    );
  }, []);

  if (!mounted) return <div className="absolute inset-0 -z-10 bg-black" />;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#000000] pointer-events-none">
      {/* 1. Theme Glows with hardware-friendly blurs */}
      <div className="absolute top-[-5%] right-[-5%] h-[260px] lg:h-[600px] w-[260px] lg:w-[600px] rounded-full bg-[#bdff69]/5 blur-[60px] lg:blur-[130px]" />
      <div className="absolute bottom-[10%] left-[-5%] h-[220px] lg:h-[500px] w-[220px] lg:w-[500px] rounded-full bg-[#bdff69]/10 blur-[60px] lg:blur-[130px]" />

      {/* 2. Responsive Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] lg:bg-[size:4.5rem_4.5rem] 
        [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)] 
        lg:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] 
        opacity-60 lg:opacity-40"
      />

      {/* 3. High-Performance GPU Particles */}
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#bdff69]"
          style={{
            width: `${particle.randomSize}px`,
            height: `${particle.randomSize}px`,
            left: `${particle.randomLeft}%`,
            top: `${particle.randomTop}%`,
            transform: "translateZ(0)",
          }}
          animate={{
            y: [0, -35, 0],
            opacity: [0.15, 0.55, 0.15],
            scale: [1, 1.25, 1],
          }}
          transition={{
            duration: particle.randomDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
