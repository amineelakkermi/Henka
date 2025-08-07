'use client'

import { useEffect, useState } from "react"
import Footer from "@/components/Footer"
import ScrollTop from "@/components/ScrollToTop"
import Logo from "@/components/Logo"
import { ThemeProvider } from "@/context/ThemeContext"
import Navbar from "./Navbar"
import CustomCursor from "./CustomCursor"

export default function ClientWrapper({ children }) {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return showIntro ? (
    <Logo />
  ) : (
    <ThemeProvider>
      <Navbar />
      <ScrollTop />
      <CustomCursor />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  )
}
