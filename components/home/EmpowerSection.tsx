"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const accordionData = [
  {
    id: 1,
    title: "Autonomous Harvesting",
    content: "Driving the future of farming with advanced automation to maximize yield and sustainability. Machines equipped with sensors, cameras, and robotic arms to identify, pick, and collect fruits or vegetables",
  },
  {
    id: 2,
    title: "Smart Irrigation Systems",
    content: "Efficient water management systems reducing water wastage and ensuring crops receive the optimal amount of hydration based on real-time data.",
  },
  {
    id: 3,
    title: "Precision Seeding Technology",
    content: "Advanced seeding mechanisms that ensure optimal spacing and depth for each seed, leading to higher germination rates and crop uniformity.",
  },
  {
    id: 4,
    title: "AI-Driven Crop Monitoring",
    content: "Continuous health monitoring of crops using AI and drone technology to detect diseases, pests, and nutrient deficiencies early.",
  },
];

export default function EmpowerSection() {
  const [openId, setOpenId] = useState<number>(1);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? 0 : id);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 overflow-hidden bg-white">
      {/* Subtle Right Gradient Background */}
      <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-[#e6f0e6] to-transparent opacity-60 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Header Row */}
        <div className="flex flex-col-reverse md:flex-row gap-8 lg:gap-16 mb-16 lg:mb-24 items-start md:items-center">
          <div className="w-full md:w-5/12 lg:w-4/12">
            <p className="text-gray-500 text-lg leading-relaxed font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi inventore in, maxime esse non ipsa optio tempore aliquam animi,
            </p>
          </div>
          <div className="w-full md:w-7/12 lg:w-8/12">
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-medium text-gray-900 max-w-4xl">
              Lorem ipsum <br className="hidden lg:block" />
              sit amet consectetur adipisicing
            </h2>
          </div>
        </div>

        {/* Bottom Content Row */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/HomeBG.jpg"
              alt="Robotic Arms in Greenhouse"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Accordion */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:pt-10">
            {accordionData.map((item) => {
              const isOpen = openId === item.id;

              return (
                <div
                  key={item.id}
                  className="flex flex-col border-b border-gray-200 pb-6 transition-all duration-300"
                >
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex items-center justify-between w-full text-left group"
                  >
                    <h3 className="text-xl md:text-2xl font-medium text-gray-900 flex items-center gap-4">
                      <span className="text-gray-500">{item.id}.</span>
                      {item.title}
                    </h3>
                    <div className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 group-hover:bg-gray-100 transition-colors">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-base md:text-lg leading-relaxed font-light max-w-[90%] lg:pl-8">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
