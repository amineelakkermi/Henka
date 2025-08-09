"use client";

import AnimatedHeroContent from "./AnimatedHeroContent";
import Image from "next/image";
import { useTheme } from "@/context/ThemeContext";
import Particles from "./Particles";





const Hero = () => {
  const { theme } = useTheme();

  return (
    <section className={`relative w-full
            ${theme === 'dark' ? 'bg-black' : 'bg-purple-900'}

    min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden`}>
    
       <div className="w-full h-[100%] absolute left-0 top-0">
       <Particles
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
      </div>


      <div className="gradient-hero"></div>
      {/* Overlay Titanium Glint */}
      <div className="titanium-bg-glint absolute inset-0 z-10"></div>

      {/* Contenu animé */}
      <div className="relative z-20 max-w-5xl w-full px-6 lg:px-16 py-8 lg:py-12">
        <AnimatedHeroContent />
      </div>
    </section>
  );
};

export default Hero;
