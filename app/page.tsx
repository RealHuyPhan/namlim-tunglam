import AboutSection from "@/components/home/AboutSection";
import FeatureSection from "@/components/home/FeatureSection";
import GardenSection from "@/components/home/GardenSection";
import PublicationsSection from "@/components/home/PublicationsSection";
import EmpowerSection from "@/components/home/EmpowerSection";
import ProductsSection from "@/components/home/ProductsSection";
import FAQSection from "@/components/home/FAQSection";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="relative min-h-[55vh] md:min-h-screen w-full flex flex-col p-[10px]">
        {/* Background Image */}
        <div className="absolute inset-[10px] z-0 rounded-[16px] overflow-hidden">
          <Image
            src="/images/HomeBG.jpg"
            alt="Agronext farming drone"
            fill
            priority
            className="object-cover"
          />
          {/* Overlay gradient to ensure text readability */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/20 bg-gradient-to-b from-black/40 md:from-black/50 via-black/30 md:via-transparent to-black/80 md:to-black/60" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col flex-1 pb-10 md:pb-16 pt-16 md:pt-16 lg:pt-16">

          {/* Main Content Area - higher on mobile, centered on desktop */}
          <div className="flex-1 flex flex-col justify-start md:justify-center w-full max-w-3xl mt-4 md:mt-12 drop-shadow-xl">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-6xl lg:text-[5rem] font-medium text-white leading-[1.1] tracking-tight">
              NẤM <br />
              LIM XANH <br />
              TRƯỜNG LÂM
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-lg md:text-xl font-light max-w-[400px] mt-6 mb-8 leading-relaxed">
              Thương hiệu hàng đầu về nấm lim xanh tự nhiên, chất lượng cao tại Việt Nam.
            </p>

            {/* Button */}
            <div className="flex items-center mb-16">
              <Link href="/products" className="group flex items-center justify-between bg-[#312d29] rounded-full pl-6 pr-2 py-2 hover:bg-[#221f1c] transition-colors border border-white/5">
                <span className="text-white font-medium mr-12 md:mr-16 text-[15px]">Xem Sản Phẩm</span>
                <div className="w-9 h-9 rounded-full bg-[#c23e38] flex items-center justify-center text-white group-hover:bg-[#a9302a] transition-colors">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <AboutSection />
      <FeatureSection />
      <ProductsSection />
      <GardenSection />
      <PublicationsSection />
      <FAQSection />
    </>
  );
}
