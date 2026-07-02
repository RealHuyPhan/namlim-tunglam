import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">

          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-1/4">
            <div className="flex items-center gap-4 mb-8 lg:mb-0">
              <div className="w-12 h-[1px] bg-gray-500" />
              <span className="text-gray-600 font-medium tracking-wide">Giới thiệu</span>
            </div>
            {/* Spacer to push image down on desktop so it aligns better with the rest */}
            <div className="hidden lg:block flex-1" />
            <div className="relative w-full aspect-[4/5] lg:mt-20 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/images/BoxGift.jpg"
                alt="Nấm Lim Xanh Hộp Quà"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Column (Text Content) */}
          <div className="flex flex-col justify-end w-full lg:w-5/12 lg:pt-0 pb-2">
            <h2 className="text-[2rem] md:text-4xl lg:text-[2.25rem] leading-[1.3] font-medium text-gray-900 mb-6">
              Our vision is to revolutionize agriculture through intelligent machinery that enhances productivity, reduces manual effort, and ensures food security for the growing global population.
            </h2>
            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10 font-light">
              Our state-of-the-art agro machinery combines precision engineering with AI-driven insights to help farmers increase efficiency while promoting eco-friendly practices. From automated harvesters to smart irrigation systems, our solutions are transforming the agricultural landscape.
            </p>
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-[#62190F] hover:bg-[#4a120b] text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-sm"
              >
                Learn More <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column (Tall Image) */}
          <div className="w-full lg:w-1/3 relative min-h-[400px] lg:min-h-[600px] rounded-lg overflow-hidden mt-8 lg:mt-0 shadow-sm">
            <Image
              src="/images/HomeBG.jpg"
              alt="Nấm Lim Xanh Nông Trại"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
