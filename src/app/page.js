import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Advertise from "@/components/sections/Advertise";
import CaseStudies from "@/components/sections/CaseStudies";
import FaqSection from "@/components/sections/FaqSection";
import Hero from "@/components/sections/Hero";
import IdeasSection from "@/components/sections/IdeasSection";
import ServiceSection from "@/components/sections/ServiceSection";
import Testimonials from "@/components/sections/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div>
     <Hero/>
     <CaseStudies/>
     <IdeasSection/>
     <ServiceSection/>
     <Testimonials/>
     <FaqSection/>
     <Advertise/>
    </div>
  );
}
