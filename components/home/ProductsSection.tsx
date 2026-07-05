"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Nấm Lim Xanh",
    desc: "Nấm Lim Xanh description",
    image: "/images/BoxGift.jpg",
  },
  {
    id: 2,
    name: "Nấm Lim Xanh",
    desc: "Nấm Lim Xanh description",
    image: "/images/HomeBG.jpg",
  },
  {
    id: 3,
    name: "Nấm Lim Xanh",
    desc: "Nấm Lim Xanh description",
    image: "/images/BoxGift.jpg",
  },
  {
    id: 4,
    name: "Nấm Lim Xanh",
    desc: "Nấm Lim Xanh description",
    image: "/images/HomeBG.jpg",
  },
  {
    id: 5,
    name: "Nấm Lim Xanh",
    desc: "Nấm Lim Xanh description",
    image: "/images/BoxGift.jpg",
  },
];

export default function ProductsSection() {
  // We duplicate the products array to create a seamless infinite scroll effect
  const marqueeItems = [...products, ...products, ...products];

  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-24">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6">
            Sản Phẩm
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-gray-900 tracking-tight mb-6">
            Nấm và Chế phẩm
          </h2>
          <p className="text-gray-900 text-base md:text-lg leading-relaxed font-normal max-w-3xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur, sit temporibus quis at doloribus expedita illo ullam reprehenderit
          </p>
        </div>

      </div>

      {/* Infinite Marquee Section */}
      <div className="w-full overflow-hidden relative mb-16 lg:mb-24">
        {/* CSS for marquee animation */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-33.333333%); }
            }
            .animate-marquee {
              display: flex;
              width: max-content;
              animation: marquee 30s linear infinite;
            }
            .animate-marquee:hover {
              animation-play-state: paused;
            }
          `
        }} />

        <div className="animate-marquee gap-8 px-4">
          {marqueeItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="group w-[280px] md:w-[380px] flex-shrink-0 cursor-pointer">
              {/* Image Container */}
              <div className="relative w-full aspect-[38/47] rounded-2xl overflow-hidden bg-[#e6e6e6]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-all duration-500"
                />
                {/* Darken overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Text inside the image, bottom left, hidden until hover */}
                <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                  <h3 className="text-2xl font-bold text-white mb-1 tracking-wide">{item.name}</h3>
                  <p className="text-lg text-white/90 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Button */}
      <div className="w-full flex justify-center px-6">
        <Link href="/products" className="group inline-flex items-center justify-between bg-[#f4f4f4] rounded-full pl-6 pr-2 py-2 hover:bg-[#e5e5e5] transition-colors border border-gray-200">
          <span className="text-gray-900 font-medium mr-12 md:mr-16 text-[15px]">Xem Tất Cả Sản Phẩm</span>
          <div className="w-9 h-9 rounded-full bg-[#c23e38] flex items-center justify-center text-white group-hover:bg-[#a9302a] transition-colors">
            <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
          </div>
        </Link>
      </div>

    </section>
  );
}
