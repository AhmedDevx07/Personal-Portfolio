"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 350,
  threshold = 0.01,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
          observer.disconnect();
        }
      },
      {
        threshold,
        // Pre-triggers 200px before element enters viewport for instant, lag-free appearance
        rootMargin: "0px 0px 200px 0px",
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  // Cap delay so elements appear snappily without awkward waiting on scroll
  const activeDelay = Math.min(delay, 150);

  return (
    <div
      ref={elementRef}
      className={isVisible ? "animate-fadeIn" : "opacity-0"}
      style={{
        animationDelay: isVisible ? `${activeDelay}ms` : "0ms",
        animationDuration: `${duration}ms`,
        animationFillMode: "both",
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
