import AnimatedHeroContent from "./AnimatedHeroContent";
import Image from "next/image";
import titanium from "../public/images/titanium.png";
import titanium2 from "../public/images/titanium2.png";


const Hero = () => {
  return (
    <section className="relative svg w-full min-h-screen bg-black text-white flex items-center justify-center overflow-hidden">
   

      {/* Contenu animé */}
      <div className="relative z-20 max-w-5xl w-full px-6 lg:px-16 py-8 lg:py-12">
        <AnimatedHeroContent />
      </div>
    </section>
  );
};

export default Hero;
