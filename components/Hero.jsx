import AnimatedHeroContent from "./AnimatedHeroContent";

const Hero = () => {
  return (
    <section className="w-full svg bg-black text-white min-h-screen flex flex-col justify-center py-8 lg:py-12 overflow-hidden">
      <div className="relative max-w-5xl mx-auto px-6 lg:px-16 flex flex-col justify-center gap-5">
        <AnimatedHeroContent />
        
      </div>
    </section>
  );
};

export default Hero;
