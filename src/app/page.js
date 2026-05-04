import Banner from "@/components/Banner";
import MarqueeShow from "@/components/MarqueeShow";
import SummerTips from "@/components/SummerTips";
import TopBrands from "@/components/TopBrands";
import TopCart from "@/components/TopCart";


export default function Home() {
  return (
    <div className="bg-gray-50 rounded-xl">
      <Banner />
      <MarqueeShow />
      <TopCart />
      <SummerTips />
      <TopBrands />
    </div>
  );
}
