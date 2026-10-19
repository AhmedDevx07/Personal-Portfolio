import Hero from "@/app/components/sections/Hero";
import About from "@/app/components/sections/About";
import Skills from "@/app/components/sections/Skills";
import Projects from "@/app/components/sections/Project";
import Services from "@/app/components/sections/Services";
import Contact from "@/app/components/sections/Contact";
import JourneySection from "@/app/components/sections/JourneySection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <JourneySection />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
