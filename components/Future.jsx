'use client'
import { useTheme } from "@/context/ThemeContext";
import styles from "@/styles/style";
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Future() {
  const { theme } = useTheme();
  const imgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Animation de l'image
      gsap.fromTo(
        imgRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top 80%",
          }
        }
      );

      // Animation du texte
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative ${theme === "dark" ? 'bg-black1' : 'bg-purple-800'} 
      w-full h-[560px] md:h-[760px] flex flex-col items-center justify-center`}
    >
      {/* Conteneur pour limiter la taille */}
      <div className="relative w-full max-w-4xl">
        {/* Image */}
        <Image
          ref={imgRef}
          src="/images/futureImg.png"
          alt="Future background"
          width={400}
          height={400}
          className="object-contain w-full h-auto"
          priority
        />

        {/* Texte centré sur l'image */}
        <h2
          ref={textRef}
          className={`absolute inset-0 flex items-center justify-center
             text-[35px] md:text-[60px] font-bold`}
        >
          نخطو بثقة نحو غد أفضل
        </h2>
      </div>
    </section>
  );
}
