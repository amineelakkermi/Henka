"use client"
// components/Philosophy.jsx
import { philosophy } from "@/constants/data"
import styles from "@/styles/style"
import PhilosophyContent from "./PhilosophyContent"
import Image from "next/image"
import H from "../public/images/H.png"
import { useTheme } from "@/context/ThemeContext"

const Philosophy = () => {
  const { theme } = useTheme();
 
  return (
    <section
      id="phl"
      className={`w-full relative ${theme === "dark" ? "bg-black1" : "bg-purple-800" } text-white py-12 lg:py-20 px-6 lg:px-20 overflow-hidden`}
    >
      <div className="gradient-circle4 hidden md:block" />
      <div className="gradient-circle5" />
      <div className="gradient-circle6 hidden md:block" />
      <div className="gradient-circle7" />
 

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        <PhilosophyContent philosophy={philosophy} styles={styles} />
      </div>
    </section>
  )
}

export default Philosophy
