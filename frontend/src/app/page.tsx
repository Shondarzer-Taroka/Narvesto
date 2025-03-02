import ShortStats from "@/components/home/ShortStats";
import bgImg from '@/asset/image/Useful/Rectangle 5985.png'
import InvestmentOpportunity from "@/components/home/InvestmentOpportunity";

export default function Home() {
  return (
    <div 
      className="bg-cover  bg-center bg-no-repeat min-h-96  "
      // style={{ backgroundImage: `url(${bgImg.src})` }}
    >
      <ShortStats />
      <InvestmentOpportunity/>
    </div>
  );
}
