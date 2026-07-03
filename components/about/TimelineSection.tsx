"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "The Farm",
    description: "Purchased in August of 2021, the original poultry farm was the unlikely start of what would become the foundation for Myzel Organics.",
    image: "/images/HomeBG.jpg", 
  },
  {
    id: 2,
    title: "Facility Retrofit",
    description: "Over the next year, the facility underwent extensive renovations to transition into a state-of-the-art mushroom cultivation center.",
    image: "/images/BoxGift.jpg",
  },
  {
    id: 3,
    title: "First Harvest",
    description: "Our first successful harvest marked the beginning of our journey to provide premium, sustainable organic mushrooms.",
    image: "/images/HomeBG.jpg",
  }
];

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // The height of the black line grows as you scroll down
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden" ref={containerRef}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative">
        
        {/* Title */}
        <div className="text-center mb-8 relative z-10 bg-white">
          <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-gray-900 tracking-tight">
            Chicken Farm to Mushroom Facility
          </h2>
        </div>
        
        {/* Horizontal Line under title */}
        <div className="w-full h-[1px] bg-gray-300 relative z-0 mb-16 max-w-4xl mx-auto" />

        {/* Timeline Container */}
        <div className="relative w-full">
          
          {/* Central Vertical Line Track (Light Gray) */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gray-200 -translate-x-1/2" />
          
          {/* Central Vertical Line Fill (Animated Black) */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-[20px] md:left-1/2 top-0 w-[2px] bg-gray-900 -translate-x-1/2 origin-top z-0" 
          />
          
          {/* Top Red Dot */}
          <div className="absolute left-[20px] md:left-1/2 top-0 w-2.5 h-2.5 bg-[#c23e38] rounded-full -translate-x-1/2 z-10" />

          {/* Timeline Items */}
          <div className="flex flex-col gap-24 md:gap-32 pt-20">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.id} className="relative flex flex-col md:flex-row items-start w-full">
                  
                  {/* Content Container (Alternating left/right on desktop) */}
                  <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? "md:ml-auto" : ""}`}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[21/9] md:aspect-[16/9] rounded-[16px] overflow-hidden shadow-md mb-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Text block */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-6 h-6 rounded bg-[#c23e38] flex items-center justify-center text-white shrink-0">
                        <Leaf className="w-3.5 h-3.5" />
                      </div>
                      <h3 className="text-[1.3rem] font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-900 font-medium text-[14px] leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                  
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
