'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { theme } from "@/tailwind.config";
import { useTheme } from "@/context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const PhilosophyContent = ({ philosophy, styles }) => {
  const { theme } = useTheme(); 
  const titleRef = useRef();
  const textRef = useRef();
  const topSvgRef = useRef();
  const bottomSvgRef = useRef();
  const principleRefs = useRef([]);

  useEffect(() => {
    const allRefs = [titleRef, textRef, ...principleRefs.current];
  
    allRefs.forEach((ref, index) => {
      if (!ref?.current) return;
  
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
          },
        }
      );
    });
  
    if (topSvgRef.current) {
      gsap.to(topSvgRef.current, {
        y: 120,
        ease: "none",
        scrollTrigger: {
          trigger: topSvgRef.current,
          start: "top 90%",
          end: "bottom top",
          scrub: true,
          // markers: true, // يمكنك تفعيلها للتجربة فقط
        },
      });
    }
  
    if (bottomSvgRef.current) {
      gsap.to(bottomSvgRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: bottomSvgRef.current,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    }
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <div className="relative">
      {/* SVG العلوي */}
      <div ref={topSvgRef} className="absolute hidden lg:block top-5 right-0 z-10">
      <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_105_672)"> <path fillRule="evenodd" clipRule="evenodd" d="M18.4046 100.422C8.31777 102.425 0.714259 111.325 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200L78.7143 200C89.6402 200 98.7058 192.035 100.422 181.595C102.425 191.682 111.325 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 110.36 192.035 101.294 181.596 99.578C191.682 97.5746 199.286 88.6752 199.286 78V22C199.286 9.84974 189.436 2.97894e-06 177.286 2.44784e-06L121.286 0C110.36 -4.77585e-07 101.294 7.96461 99.5781 18.4046C97.5747 8.31778 88.6753 0.71428 78 0.71428H22C9.84974 0.71428 0 10.564 0 22.7143V78.7143C0 89.6401 7.96462 98.7058 18.4046 100.422Z" fill="url(#paint0_linear_105_672)"/> </g> <defs> <linearGradient id="paint0_linear_105_672" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stopColor="#FFB6E1"/> <stop offset="1" stopColor="#FBE3EA"/> </linearGradient> <clipPath id="clip0_105_672"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>      </div>

      {/* SVG السفلي */}
      <div ref={bottomSvgRef} className="absolute hidden lg:block bottom-5 left-0 z-10">
       <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_103_21)"> <path d="M71.5579 16.3347C84.3365 -5.4449 115.825 -5.44489 128.603 16.3347L129.067 17.1257C134.963 27.1733 145.709 33.378 157.358 33.4596L158.276 33.466C183.527 33.6428 199.271 60.9123 186.798 82.8687L186.345 83.6661C180.591 93.7953 180.591 106.205 186.345 116.334L186.798 117.131C199.271 139.088 183.527 166.357 158.276 166.534L157.358 166.54C145.709 166.622 134.963 172.827 129.067 182.874L128.603 183.665C115.825 205.445 84.3365 205.445 71.5579 183.665L71.0938 182.874C65.1986 172.827 54.4517 166.622 42.8027 166.54L41.8856 166.534C16.6346 166.357 0.890585 139.088 13.3629 117.131L13.8159 116.334C19.5698 106.205 19.5698 93.7953 13.8159 83.6661L13.3629 82.8687C0.890585 60.9123 16.6346 33.6428 41.8856 33.466L42.8027 33.4596C54.4518 33.378 65.1986 27.1733 71.0938 17.1257L71.5579 16.3347Z" fill="url(#paint0_linear_103_21)"/> </g> <defs> <linearGradient id="paint0_linear_103_21" x1="100.081" y1="0" x2="100.081" y2="200" gradientUnits="userSpaceOnUse"> <stop stopColor="#B8DBFC"/> <stop offset="1" stopColor="#F8FBFE"/> </linearGradient> <clipPath id="clip0_103_21"> <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
      </div>

      {/* العنوان والمقدمة */}
      <div className="w-full flex flex-col justify-center items-center gap-5">
        <h1 ref={titleRef} className={`${styles.title} text-center`}>
          فلسـفـتـنـا الاستثــمــاريــة
        </h1>
        <p
          ref={textRef}
          className="text-[22px] text-center text-textColor font-medium max-w-[95%] md:max-w-[750px] leading-relaxed"
        >
          في حنكــة، ندير استثماراتنا كما نحرص على حياتنا، حرصًا على تقديم قيمة
          مستدامة، تحترم المبادئ، وتلبي التطلعات.
        </p>
      </div>

      {/* المبادئ */}
      <div className="w-full flex justify-center items-center flex-col gap-6 mt-6 md:mt-12">
        {philosophy.principles.map((principle, index) => (
          <div
            key={index}
            ref={(el) => (principleRefs.current[index] = { current: el })}
            className={`${theme === "dark" ? "bg-[#1a1c1d] hover:bg-[#2a2c2d] text-white" : "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#000]"}  rounded-xl px-5 py-4 text-[18px] flex justify-center w-[90%] md:w-[650px] text-textColor leading-relaxed transition-all duration-300  hover:shadow-md hover:scale-[1.02] cursor-default`}
          >
            {principle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophyContent;
