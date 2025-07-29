import AboutAnimatedContent from "./AboutAnimatedContent";

const About = () => {
  return (
    <section id="about" className="relative snap-start w-full bg-black1 min-h-[100vh]  text-white flex flex-col justify-center py-8 lg:py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 flex flex-col justify-center gap-5">
        <AboutAnimatedContent />
      </div>
    
    </section>
  );
};

export default About;
