"use client";

import React from "react";
import FadeIn from "./FadeIn";

export interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleIn";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 500,
  className = "",
}) => {
  const directionMap: Record<string, "up" | "down" | "left" | "right" | "none"> = {
    fadeUp: "up",
    fadeIn: "none",
    slideLeft: "left",
    slideRight: "right",
    scaleIn: "none",
  };

  return (
    <FadeIn
      direction={directionMap[animation] || "up"}
      delay={delay}
      duration={duration}
      className={className}
    >
      {children}
    </FadeIn>
  );
};

export default ScrollReveal;
