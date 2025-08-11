'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Future() {
  const imgRef = useRef(null);
  const centerTextRef = useRef(null);
  const bottomTextRef = useRef(null);

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

      // Animation du texte du centre
      gsap.fromTo(
        centerTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: centerTextRef.current,
            start: "top 85%",
          }
        }
      );

      // Animation du texte du bas
      gsap.fromTo(
        bottomTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: bottomTextRef.current,
            start: "top 85%",
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={`relative bg-purple-900
      w-full h-[560px] md:h-[760px] flex items-center justify-center`}
    >
      <div className="relative w-full max-w-4xl">
        {/* Image */}
        <div ref={imgRef} className="relative w-full h-auto">
          <Image
            src="/images/futureImg.png"
            alt="Future background"
            width={800}
            height={800}
            className="object-contain w-full h-auto"
            priority
          />

          {/* نص في منتصف الصورة */}
          <div
            ref={centerTextRef}
            className="absolute inset-0 flex items-center justify-center text-center px-4"
          >
            <p className="text-white font-semibold text-[24px] md:text-[40px] leading-relaxed">
              نخطــو بثقة نحو غد أفضــل
            </p>
          </div>

          {/* نص في أسفل الصورة */}
          <div
            ref={bottomTextRef}
            className="absolute bottom-6 left-0 right-0 flex justify-center px-4"
          >
            <p className="text-white leading-[45px] font-medium text-[16px] md:text-[20px] text-center ">
            مقرنا : السعودية - الرياض 
             <br />
              مركز الملك عبد الله المالي KAFD 4.07
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
