'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "@/styles/style";
import Image from "next/image";
import henkaImg from "../public/images/henkaImg.png";

export const why_henka = {
  points: [
    "خبرة عملية في ريادة الأعمال والأسواق المحلية والعالمية",
    "خصوصية وثقة في التعامل",
    "فلسفة متزنة تجمع بين الانضباط والمرونة",
    "تركيز على القيم العائلية والتوريث",
    "شراكات استراتيجية، وليست مجرد استثمارات مالية"
  ]
};

const WhyUs = () => {
  const sectionRef = useRef(null);
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      circle1Ref.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );

    gsap.fromTo(
      circle2Ref.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="phl"
      className="relative snap-start min-h-[90vh] flex flex-col justify-center items-center w-full bg-black1 text-white py-12 lg:py-20 px-6 lg:px-20"
    >
      {/* دوائر الخلفية */}
      <div ref={circle1Ref} className="gradient-circle1 z-20 absolute" />
      <div ref={circle2Ref} className="gradient-circle2 z-20 absolute" />

      <div className="max-w-4xl mx-auto flex flex-col gap-12 z-40">

        {/* Titre + Points side by side */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 items-center">
          {/* Titre */}
          <div className="lg:w-1/2 w-full">
            <h2 className={`${styles.title} text-center lg:text-start`}>
              لمــاذا <br /> حـنـكــة ؟
            </h2>
          </div>

          {/* Liste des points */}
          <div className="lg:w-1/2 w-full flex flex-col items-center gap-4">
            {why_henka.points.map((point, index) => (
              <div
                key={index}
                className="bg-[#1a1c1d] text-white rounded-xl px-5 py-4 text-[18px] flex justify-center w-[90%] md:w-[500px] text-textColor leading-relaxed transition-all duration-300 hover:bg-[#2a2c2d] hover:text-white hover:shadow-md hover:scale-[1.02] cursor-default"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyUs;
