import { useEffect, useState } from "react";

export const useScrollSpy = (
  sectionIds: string[],
  offset: number = 100,
): string => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
};

export const scrollToSection = (
  sectionId: string,
  offset: number = 80,
): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    const top = section.offsetTop - offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }
};
