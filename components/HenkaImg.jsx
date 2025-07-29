'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

import henkaLeft from '../public/images/henkaLeft.png'
import henkRight from '../public/images/henkaRight.png'

const HenkaImg = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline()

    tl.from(leftRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }).from(
      rightRef.current,
      {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      },
      0 // démarrage simultané
    )
  }, [])

  return (
    <section className="w-full h-[700px] overflow-hidden flex">
     
    
    </section>
  )
}

export default HenkaImg
