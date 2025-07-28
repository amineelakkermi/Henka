import About from "@/components/About";
import Hero from "@/components/Hero";
import InvestmentAreas from "@/components/InvestmentAreas";
import Philosophy from "@/components/Philosophy";
import Vision from "@/components/Vision";

export default function Home(){
  return <>
    <Hero />
    <About />
    <Vision />
    <Philosophy />
    <InvestmentAreas />
  </>
}