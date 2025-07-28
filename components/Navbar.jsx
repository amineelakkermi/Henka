'use client'
import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/images/logo.png"
import menuOpen from "../public/images/menuOpen.svg"
import menuClose from "../public/images/menuClose.svg"
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { href: '', text: 'الرئيسية' },
    { href: 'about', text: 'من نحن' },
    { href: 'vision', text: 'رؤيتنا' },
    { href: 'phl', text: 'فلسفتنا' },
  ]

  const linkClasses = (item) => {
    return `
       text-white text-[18px] lg:text-[20px] hover:text-textColor transition-colors duration-200
    `
  }

  return (
    <nav dir="rtl" className={`px-6 lg:px-16 lg:py-4 py-3 border-b-2 border-[#222] fixed top-0 left-0 right-0 w-full z-[999] transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-sm shadow' : 'bg-black'}`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        {/* Right - Logo */}
        <Link href="/" className="shrink-0">
          <Image src={logo} alt="logo" width={80} height={80} />
        </Link>

        {/* Center - Links */}
        <div className="hidden md:flex gap-8 justify-center">
          {menuItems.map((item, index) => (
            <a key={index} href={`#${item.href}`} className={linkClasses(item)}>
              {item.text}
            </a>
          ))}
        </div>

        {/* Left - Contact Button */}
        <div className="hidden md:block">
        <Link
        href="/contact"
        className="bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-colors duration-300 py-2 px-6 rounded-full text-[16px]"
        >
        تواصــل الآن
        </Link>
        </div>


        {/* Mobile - Menu and Contact Button */}
        <div className="md:hidden flex items-center gap-8">
          <Link
            href="/contact"
            className="bg-white text-[17px] text-blakc transition-colors duration-200 py-2 px-3 rounded-[15px]"
          >
            تواصــل الآن
          </Link>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Image src={isOpen ? menuClose : menuOpen} alt="menu" width={30} height={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        fixed inset-0 bg-black z-50 flex flex-col items-center justify-center gap-8
        transform transition-all duration-300 ease-in-out 
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 left-4"
        >
          <Image src={menuClose} alt="close menu" width={24} height={24} />
        </button>
        {menuItems.map((item, index) => (
        <a
        key={index}
        href={`#${item.href}`}
        onClick={() => setIsOpen(false)}
        className="text-white text-[20px] font-ghaith border-2 border-white px-8 py-3 rounded-full 
                  hover:text-orange transform transition-all duration-200 hover:scale-105
                  w-36 text-center flex items-center justify-center"
      >
        {item.text}
      </a>
        ))}
      </div>
    </nav>
  )
}