import ShortStats from "@/components/home/ShortStats";
import bgImg from '@/asset/image/Useful/Rectangle 5985.png'
import InvestmentOpportunity from "@/components/home/InvestmentOpportunity";
import WhyChoseUs from "@/components/home/WhyChoseUs";
import FAQ from "@/components/home/Faq";
import WhatWeOffer from "@/components/home/WhatWeOffer";
import FAQAccordion from "@/components/home/Accordion";

export default function Home() {
  return (
    <div 
      className="bg-cover  bg-center bg-no-repeat min-h-96  "
      // style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <ShortStats />
      <InvestmentOpportunity/>
      <WhyChoseUs/>
      <WhatWeOffer/>
      {/* <FAQ/> */}
      <FAQAccordion/>
    </div>
  );
}
