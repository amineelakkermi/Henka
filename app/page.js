import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import Future from "@/components/Future";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import Partners from "@/components/Partners";
import Philosophy from "@/components/Philosophy";
import Sectors from "@/components/Sectors";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";




export default function Home(){
  
  return <>
   <div className="relative">
    <Hero />
    <About />
    <Vision />
    <Partners />
    <InvestmentAreas />
    <Future />
    </div>

  </>
}