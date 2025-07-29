import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import Philosophy from "@/components/Philosophy";
import ScrollTriggerRefresh from "@/components/ScrollTriggerRefresh";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";




export default function Home(){
  
  return <>
   <ScrollTriggerRefresh />
    <Hero />
    <About />
    <Vision />
    <Philosophy />
    <InvestmentAreas />
    <WhyUs />
    {/*
        <ContactBanner />
    */}
  </>
}