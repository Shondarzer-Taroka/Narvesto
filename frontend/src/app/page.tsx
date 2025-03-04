import ShortStats from "@/components/home/ShortStats";

import InvestmentOpportunity from "@/components/home/InvestmentOpportunity";
import WhyChoseUs from "@/components/home/WhyChoseUs";

import WhatWeOffer from "@/components/home/WhatWeOffer";
import FAQAccordion from "@/components/home/Accordion";
import BlogHome from "@/components/home/BlogHome";
import Testimonial from "@/components/home/Testimonial";
import { BannerNarvesto } from "@/components/home/BannerNarvesto";




export default function Home() {
  return (
    <div 
      className="bg-cover  bg-center bg-no-repeat min-h-96  "
      // style={{ backgroundImage: `url(${bgImg.src})` }}
    >
  <BannerNarvesto/>
      <ShortStats />
      <InvestmentOpportunity/>
      <WhyChoseUs/>
      <WhatWeOffer/>
    
      <FAQAccordion/>
      <BlogHome/>
      <Testimonial/>
    </div>
  );
}
