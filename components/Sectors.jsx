'use client'

import { useTheme } from "@/context/ThemeContext"
import Image from 'next/image'
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import styles from "@/styles/style"

gsap.registerPlugin(ScrollTrigger)

const sectors = [
  { src: '/images/sector1.png', alt: 'قطاع صناعي' },
  { src: '/images/sector2.png', alt: 'قطاع عقاري' },
  { src: '/images/sector3.png', alt: 'قطاع لوجستي' },
  { src: '/images/sector4.png', alt: 'قطاع سياحي' },
  { src: '/images/sector5.png', alt: 'القطاع المالي' },
  { src: '/images/sector6.png', alt: 'الاستثمار الدولي' },
]

export default function Sectors() {
  const { theme } = useTheme()
  const containerRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".sector-item")

      gsap.fromTo(titleRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
          }
        }
      )

      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className={`px-4 py-8 ${theme === 'dark' ? 'bg-black1' : 'bg-purple-800'} lg:py-20 lg:px-20`}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        
        <h2 ref={titleRef} className={`${styles.title} text-center lg:text-start`}>
          قطــاعــاتنــا
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {sectors.map((sector, index) => (
          <div
            key={index}
            className="sector-item relative w-full h-56 md:h-64 lg:h-72 overflow-hidden rounded-xl shadow-lg group"
          >
            <Image
              src={sector.src}
              alt={sector.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}
        </div>

      </div>
    </section>
  )
}
