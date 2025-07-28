import About from "@/components/About";
import ContactBanner from "@/components/ContactBanner";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import Philosophy from "@/components/Philosophy";
import Vision from "@/components/Vision";
import WhyUs from "@/components/WhyUs";

export default function Home(){
  return <>
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