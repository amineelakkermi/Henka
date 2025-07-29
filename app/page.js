import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import HenkaImg from "@/components/HenkaImg";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import Logo from "@/components/Logo";
import Philosophy from "@/components/Philosophy";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";




export default function Home(){
  
  return <>
   <div className="scroll-container">
   <ScrollTriggerRefresh />
   
    <Hero />
    <About />


    <Vision />
    <Philosophy />
    <InvestmentAreas />
    <WhyUs />
    </div>
    {/*
        <ContactBanner />
    */}
  </>
}