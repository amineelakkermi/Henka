'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import logo from "../public/images/logo.png"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Logo = () => {
  const imageRef = useRef()
  const textRef = useRef()
  const sectionRef = useRef()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        {
          y: -200,
          scale: 0.2,
          opacity: 0,
          rotation: 90 // départ avec rotation complète
        },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          rotation: 0, // revient à la position normale
          duration: 1.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none play none"
          }
        }
      )

      gsap.fromTo(
        textRef.current,
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none play none"
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100vh] bg-black1 w-full flex flex-col justify-center items-center overflow-hidden text-white text-center"
    >
      <div ref={imageRef}>
        <Image src={logo} alt="logo" width={350} height={350} />
      </div>
      
      <h1
        ref={textRef}
        className="mt-10 text-[32px] md:text-[45px] lg:text-[60px] font-bold font-ghaith"
      >
        إختيـــارك المحــنــك
      </h1>

      {/* Effets visuels si tu veux garder */}
      <div className="gradient-circle1"></div>
      <div className="gradient-circle2"></div>
    </section>
  )
}

export default Logo
