"use client";

import React, { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/app/utils/constants";
import { scrollToSection, useScrollSpy } from "@/app/hooks/useScrollSpy";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const activeSection = useScrollSpy(NAV_LINKS.map((item) => item.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/5"
          : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center gap-2">
            <Code className="w-6 h-6 text-primary animate-pulse" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold bg-white  italic bg-clip-text text-transparent hover:opacity-80 transition-opacity tracking-tight cursor-pointer"
            >
              Muhammad<span className="text-primary italic">Ahmed</span>
            </button>
          </div>

          {/* navlinks - Desktop */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-base font-medium transition-all duration-300 cursor-pointer ${
                  activeSection === item.id
                    ? "text-primary"
                    : "text-white/70 hover:text-primary"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-7 py-3.5 group flex items-center gap-2 bg-primary hover:bg-white text-black   rounded-2xl font-bold transition-all duration-500 shadow-xl shadow-primary/10 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-white/80 transition-colors cursor-pointer"
            aria-label="menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-110 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-xl border-t border-white/10 px-5 py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeSection === link.id
                  ? "text-primary bg-white/10"
                  : "text-white/80 hover:text-primary hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-7 py-3.5 bg-primary hover:bg-white text-black   rounded-2xl font-bold       transition-all duration-500 shadow-xl shadow-primary/10 cursor-pointer"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
