import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function GardenSection() {
  return (
    <section className="w-full bg-[#68502D] py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left Column - Text */}
          <div className="w-full lg:w-5/12 flex flex-col items-start">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c93f38] text-white text-xs md:text-sm font-medium w-fit mb-6">
              Mô hình
            </div>

            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-6">
              Mô Hình Vườn <br className="hidden lg:block" /> Dược Liệu
            </h2>

            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-12 max-w-xl">
              Vườn dược liệu Hợp Tác Xã Hải Nam được định hướng là nơi sản xuất nấm lim xanh theo mô hình nông nghiệp xanh được kết hợp giữa kinh nghiệm nuôi trồng truyền thống và áp dụng các công nghệ hiện đại giúp cho chất lượng, năng suất nấm lim xanh luôn hoàn hảo nhất.
            </p>

            <Link href="/contact" className="group inline-flex items-center justify-between bg-[#4a494b] rounded-full pl-6 pr-2 py-2 hover:bg-[#5a595b] transition-colors w-fit border border-white/5">
              <span className="text-white font-medium mr-12 md:mr-16 text-[15px]">Tham Quan</span>
              <div className="w-9 h-9 rounded-full bg-[#c23e38] flex items-center justify-center text-white group-hover:bg-[#a9302a] transition-colors">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
              </div>
            </Link>
          </div>

          {/* Right Column - Image Layout (Instead of text list) */}
          <div className="w-full lg:w-7/12">
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[400px] md:h-[600px]">
              {/* Left side of the grid (2 small images stacked) */}
              <div className="col-span-1 grid grid-rows-2 gap-4 md:gap-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#2a292b] shadow-xl">
                  <Image
                    src="/images/HomeBG.jpg"
                    alt="Vườn dược liệu 1"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#2a292b] shadow-xl">
                  <Image
                    src="/images/BoxGift.jpg"
                    alt="Vườn dược liệu 2"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              {/* Right side of the grid (1 tall image) */}
              <div className="col-span-1 relative w-full h-full rounded-2xl overflow-hidden bg-[#2a292b] shadow-xl">
                <Image
                  src="/images/HomeBG.jpg"
                  alt="Vườn dược liệu 3"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
