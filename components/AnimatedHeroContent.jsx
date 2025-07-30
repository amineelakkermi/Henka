'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HiArrowLeft } from "react-icons/hi";

const AnimatedHeroContent = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const buttonsRef = useRef([]);
  const svgRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.clearScrollMemory();

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        }
      });

      tl.from(titleRef.current, {
        y: -50,
        opacity: 0,
        duration: 1,
      })
        .from(textRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8
        }, "-=0.6")
        .from(buttonsRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'back.out(1.7)'
        }, "-=0.5");

      buttonsRef.current.forEach(btn => {
        btn?.addEventListener("mouseenter", () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        btn?.addEventListener("mouseleave", () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
      });

      gsap.fromTo(
        svgRef.current,
        { y: 0, autoAlpha: 1 },
        {
          y: 300,
          autoAlpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          }
        }
      );
    }, heroRef);

    // Forcer le refresh pour corriger le bug d'affichage initial
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      ctx.revert(); // nettoie tout
    };
  }, []);

  return (
    <div ref={heroRef} className="relative">
      {/* SVG animé */}
      <div ref={svgRef} className="absolute hidden sm:block left-0 sm:top-[70%] md:top-64 lg:top-48 z-10">
      <svg width="80" height="80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_133_2)">
      <path fillRule="evenodd" clipRule="evenodd"
      d="M50.7143 0H0.71429V50C0.71429 75.462 19.7466 96.4788 44.361 99.6002C19.4015 102.402 4.22025e-06 123.578 2.18557e-06 149.286L0 199.286H50C75.462 199.286 96.4788 180.253 99.6002 155.639C102.402 180.599 123.578 200 149.286 200H199.286V150C199.286 124.538 180.253 103.521 155.639 100.4C180.599 97.5984 200 76.422 200 50.7143V0.714286L150 0.714284C124.538 0.714282 103.521 19.7466 100.4 44.361C97.5984 19.4015 76.422 0 50.7143 0Z" fill="url(#paint0_linear_133_2)"/> </g> <defs> <linearGradient id="paint0_linear_133_2" x1="27.5" y1="19" x2="149" y2="174.5" gradientUnits="userSpaceOnUse"> <stop stopColor="#8A3FFC"/> <stop offset="1" stopColor="#FFF5F1"/> </linearGradient> <clipPath id="clip0_133_2"> 
      <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
      </div>

      {/* Titre */}
      <h1 ref={titleRef} className="font-bold text-start text-[45px] lg:text-[60px] leading-tight">
        حنكــة ، حيث تلتقي الحكمة بالاستثمار
      </h1>

      {/* Paragraphe */}
      <p ref={textRef} className="text-textColor text-[17px] md:text-[20px] font-[800] leading-[38px] mt-4">
        نحن مكتب استثمار عائلي (Family Office) نعمل على تنمية ثروات العائلة برؤية استراتيجية طويلة المدى.
        <br className="hidden md:block" />
        نُترجم القيم العائلية إلى قرارات استثمارية متزنة، تُوازن بين الطموح والاتزان، وتُحقق الاستدامة عبر الأجيال.
      </p>

      {/* Boutons */}
      <div className="flex flex-row gap-4 mt-10">
        <a
          ref={el => buttonsRef.current[0] = el}
          href="/contact"
          className="border border-white border-2 max-w-[250px] text-white hover:bg-white hover:text-black transition-colors duration-300 py-3 px-6 rounded-full font-ghaith text-[16px] flex items-center justify-center gap-2"
        >
          تواصل معنا
        </a>
        <a
          ref={el => buttonsRef.current[1] = el}
          href="#investment"
          className="border border-white border-2 max-w-[250px] text-white hover:bg-white hover:text-black transition-colors duration-300 py-3 px-6 rounded-full font-ghaith text-[16px] flex items-center justify-center gap-2"
        >
          استكشف استثماراتنا
          <HiArrowLeft className="text-[18px]" />
        </a>
      </div>
    </div>
  );
};

export default AnimatedHeroContent;
