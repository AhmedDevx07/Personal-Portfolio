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
        // -30px rootMargin triggers right as the element gracefully enters the user's view,
        // delivering a vivid, silky smooth scroll reveal experience.
        rootMargin: "0px 0px -30px 0px",
        threshold: 0.05,
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
  const [isMobile, setIsMobile] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();

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

    // Reveal immediately ONLY if element is already within the initial screen view on page load
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40 && rect.bottom > 0) {
      setIsVisible(true);
      return;
    }

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

  // Scaled delay: on mobile, delays are compact (max 80ms) for snappy response.
  // On desktop, elegant micro-stagger is preserved up to 240ms.
  const activeDelay = isMobile ? Math.min(Math.round(delay * 0.3), 80) : Math.min(delay, 240);
  const activeDistance = isMobile ? Math.min(distance, 18) : distance;
  const activeDuration = isMobile ? Math.min(duration, 420) : duration;

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${activeDistance}px, 0)`;
      case "down":
        return `translate3d(0, -${activeDistance}px, 0)`;
      case "left":
        return `translate3d(${activeDistance}px, 0, 0)`;
      case "right":
        return `translate3d(-${activeDistance}px, 0, 0)`;
      case "none":
      default:
        return "translate3d(0, 0, 0)";
    }
  };

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate3d(0, 0, 0)" : getInitialTransform(),
        transitionProperty: "opacity, transform",
        transitionDuration: `${activeDuration}ms`,
        // Silky modern spring deceleration curve
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        transitionDelay: `${activeDelay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
