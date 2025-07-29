'use client'

import { useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ScrollTop from "@/components/ScrollToTop"
import Logo from "@/components/Logo"

export default function ClientWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (showIntro) {
    return <Logo />
  }

  return (
    <>
      <Navbar />
      <ScrollTop />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  )
}
