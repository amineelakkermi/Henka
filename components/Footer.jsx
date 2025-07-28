import Image from 'next/image'
import Link from 'next/link'
import logo from "../public/images/logo.png"
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black border-t border-t-[#222] text-white py-10 text-right">
      <div className="container max-w-5xl mx-auto px-4">

        {/* عناصر الفوتر */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          {/* Logo → أقصى اليمين */}
          <div className="order-1">
            <Link href="/" className="flex items-center">
              <Image src={logo} alt="logo" width={100} height={100} />
            </Link>
          </div>

          {/* روابط الموقع في الوسط */}
          <div className="order-2 text-center flex flex-col gap-2 text-md sm:text-lg">
            <h3 className='text-white text-[18px] md:text-[24px] mb-3'>العناوين</h3>
            <Link href="#"><span className='text-textColor text-[16px] md:text-[20px]'>الرئيسية</span></Link>
            <Link href="#about"><span className='text-textColor text-[16px] md:text-[20px]'>من نحن</span></Link>
            <Link href="#vision"><span className='text-textColor text-[16px] md:text-[20px]'>رؤيتنا</span></Link>
            <Link href="#phl"><span className='text-textColor text-[16px] md:text-[20px]'>فلسفتنا</span></Link>
          </div>

          {/* التواصل وأيقونات السوشيال → أقصى اليسار */}
          <div className="order-3 flex flex-col gap-6 items-start">

            <Link
              href="/contact"
              className="bg-white text-black hover:bg-transparent hover:text-white border border-transparent hover:border-white transition-colors duration-300 py-2 px-6 rounded-full text-[16px]"
            >
              تواصــل الآن
            </Link>

            <div className="flex gap-4 text-white text-2xl">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaLinkedin /></a>
            </div>
          </div>

        </div>

      

      </div>
    </footer>
  )
}

export default Footer
