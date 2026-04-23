"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const HeroBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="absolute inset-0 -z-10 bg-black" />;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#000000]">
      {/* 1. Theme Glows */}
      <div className="absolute top-[-5%] right-[-5%] h-[300px] lg:h-[600px] w-[300px] lg:w-[600px] rounded-full bg-[#bdff69]/5 blur-[80px] lg:blur-[130px]" />
      <div className="absolute bottom-[10%] left-[-5%] h-[250px] lg:h-[500px] w-[250px] lg:w-[500px] rounded-full bg-[#bdff69]/10 blur-[80px] lg:blur-[130px]" />

      {/* 2. Responsive Grid */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] lg:bg-[size:4.5rem_4.5rem] 
        [mask-image:radial-gradient(ellipse_100%_100%_at_50%_50%,#000_40%,transparent_100%)] 
        lg:[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)] 
        opacity-60 lg:opacity-40"
      />

      {/* 3. Particles with Client-Side Randomization */}
      {[...Array(60)].map((_, i) => {
        const randomLeft = Math.random() * 100;
        const randomTop = Math.random() * 100;
        const randomSize = Math.random() * 5 + 1;
        const randomDuration = Math.random() * 10 + 5;

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#bdff69]"
            style={{
              width: `${randomSize}px`,
              height: `${randomSize}px`,
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
