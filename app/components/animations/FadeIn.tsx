"use client";

import React, { useEffect, useRef, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

// Global Shared IntersectionObserver for peak mobile and desktop performance.
// Reusing a single observer instance eliminates CPU/memory overhead from dozens of components.
type ObserverCallback = () => void;
let sharedObserver: IntersectionObserver | null = null;
const observerCallbacks = new WeakMap<Element, ObserverCallback>();

function getSharedObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
    return null;
  }
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) cb();
          }
        });
      },
      {
        // Positive bottom rootMargin (+80px) triggers BEFORE element enters view on scroll.
        // This completely eliminates blank-space pop-in or stutter on mobile and desktop!
        rootMargin: "0px 0px 80px 0px",
        threshold: 0.01,
      }
    );
  }
  return sharedObserver;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 500,
  direction = "up",
  distance = 28,
  className = "",
  once = true,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect users who prefer reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const element = elementRef.current;
    if (!element) return;

    const observer = getSharedObserver();
    if (!observer) {
      setIsVisible(true);
      return;
    }

    const onIntersect = () => {
      setIsVisible(true);
      if (once) {
        observer.unobserve(element);
        observerCallbacks.delete(element);
      }
    };

    observerCallbacks.set(element, onIntersect);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observerCallbacks.delete(element);
    };
  }, [once]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translate3d(0, var(--fade-dist, 28px), 0)";
      case "down":
        return "translate3d(0, calc(-1 * var(--fade-dist, 28px)), 0)";
      case "left":
        return "translate3d(var(--fade-dist, 28px), 0, 0)";
      case "right":
        return "translate3d(calc(-1 * var(--fade-dist, 28px)), 0, 0)";
      case "none":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`fade-in-item ${className}`.trim()}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : getInitialTransform(),
        ["--fade-dist" as any]: `${distance}px`,
        ["--fade-duration" as any]: `${duration}ms`,
        ["--fade-delay" as any]: `${Math.min(delay, 220)}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
