'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import kafd2 from '../public/images/kafd2.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '@/styles/style'

gsap.registerPlugin(ScrollTrigger)

const LocationSection = () => {
  const contentRef = useRef(null)
  const imageWrapperRef = useRef(null)

  useEffect(() => {
    // Animation du contenu
    gsap.fromTo(
      contentRef.current,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      }
    )

    // Animation de l'image (du haut vers le bas)
    gsap.fromTo(
      imageWrapperRef.current,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageWrapperRef.current,
          start: 'top bottom',
        },
      }
    )
  }, [])

  return (
    <section className="relative  w-full h-screen rtl overflow-hidden">
      {/* Background image animée */}
      <div ref={imageWrapperRef} className="absolute inset-0">
        <Image
          src={kafd2}
          alt="موقعنا"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 " />

      {/* Content */}
      <div
        ref={contentRef}
        className="relative  flex items-center justify-center h-full px-6 md:px-16"
      >
        <div className="text-white max-w-2xl text-center space-y-5">
          <h2 className={`${styles.title} font-ghaith`}>موقـعــنـا</h2>
          <p className="text-white font-ghaith text-[24px] md:text-[40px] font-[500]">
            موقعنا في كافد "مركز الملك عبد الله المالي" <br />
            مقرنا KAFD 4.07
          </p>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
