import AnimatedHeroContent from "./AnimatedHeroContent";
import Image from "next/image";
import titanium from "../public/images/titanium.png";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
      {/* Image de fond */}
      <Image
        src={titanium}
        alt="background"
        fill
        quality={100}
        priority
        className="object-cover object-center opacity-60"
      />

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
