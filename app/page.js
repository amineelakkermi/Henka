import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import HenkaImg from "@/components/HenkaImg";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import LocationSection from "@/components/Location";
import Philosophy from "@/components/Philosophy";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";




export default function Home(){
  
  return <>
   <div className="scroll-container">
   
    <Hero />
    <About />


    <Vision />
    <Philosophy />
    <InvestmentAreas />
    <WhyUs />
    <LocationSection />
    </div>
    {/*
        <ContactBanner />
    */}
  </>
}