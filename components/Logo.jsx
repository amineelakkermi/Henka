'use client'

import { useEffect, useRef } from "react"
import Image from "next/image"
import logo from "../public/images/logo.png"
import gsap from "gsap"

const Logo = ({ onFinish }) => {
  const imageRef = useRef()
  const textRef = useRef()
  const sectionRef = useRef()

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onFinish?.()
      }
    })

    tl.fromTo(
      imageRef.current,
      {
        y: -200,
        scale: 0.2,
        opacity: 0,
      },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: "power3.out"
      }
    )

    tl.fromTo(
      textRef.current,
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      },
      "-=1.2"
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-black1 w-full flex flex-col justify-center items-center overflow-hidden text-white text-center"
    >
      <div
        ref={imageRef}
        className="w-[180px] sm:w-[220px] md:w-[280px] lg:w-[350px]"
      >
        <Image
          src={logo}
          alt="logo"
          className="w-full h-auto"
          priority
        />
      </div>

      <h1
        ref={textRef}
        className="mt-10 text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold font-ghaith"
      >
        إختيـــارك المحــنــك
      </h1>
    </section>
  )
}

export default Logo
