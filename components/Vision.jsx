import AnimatedVisionCards from "./AnimatedVisionCards";

const Vision = () => {
  return (
    <section className="w-full relative bg-black min-h-[90vh] text-white flex flex-col justify-center py-8 lg:py-12 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-center gap-0">
        <AnimatedVisionCards />
      </div>

    </section>
  );
};

export default Vision;
