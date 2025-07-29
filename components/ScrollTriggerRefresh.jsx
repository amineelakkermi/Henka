'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const ScrollTriggerRefresh = () => {
  const pathname = usePathname()

  useEffect(() => {
    // À chaque changement de route, on fait un refresh
    setTimeout(() => {
      ScrollTrigger.refresh()
    }, 100)
  }, [pathname])

  return null
}

export default ScrollTriggerRefresh
