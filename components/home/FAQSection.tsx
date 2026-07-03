"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "What is it like to source ingredients from Canada?",
    answer: "We ensure the highest quality standards by working closely with local Canadian farms. Our supply chain is strictly monitored to guarantee premium, organic mushroom sourcing.",
  },
  {
    id: 2,
    question: "Do your mushroom powders undergo third party testing?",
    answer: "Yes, all of our products undergo rigorous third-party testing for heavy metals, pesticides, and microbial contaminants to ensure absolute safety and purity.",
  },
  {
    id: 3,
    question: "Are Certificates of Analysis available?",
    answer: "Absolutely. We provide comprehensive Certificates of Analysis (COA) for every batch of our mushroom powders to verify their active compound levels and safety.",
  },
  {
    id: 4,
    question: "What species do you offer?",
    answer: "We offer a wide variety of functional mushrooms including Reishi, Lion's Mane, Cordyceps, Turkey Tail, and Chaga, available in both whole and extract forms.",
  },
  {
    id: 5,
    question: "Do you ship internationally?",
    answer: "Yes, we ship our bulk mushroom powders globally. Shipping times and rates vary depending on the destination and order volume.",
  },
  {
    id: 6,
    question: "Do you offer custom blends?",
    answer: "We do offer custom formulation and blending services for B2B clients looking to create unique mushroom-based nutraceutical products.",
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 lg:py-32 overflow-hidden bg-[#2a292b]">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-4/12 flex flex-col items-start">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6">
              FAQ
            </div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-10">
              Frequently Asked <br className="hidden lg:block" /> Questions
            </h2>
            <Link href="/faq" className="group inline-flex items-center justify-between bg-[#3f3e40] rounded-full pl-6 pr-2 py-2 hover:bg-[#4f4e50] transition-colors w-fit border border-white/5">
              <span className="text-white font-medium mr-12 md:mr-16 text-[15px]">View More</span>
              <div className="w-9 h-9 rounded-full bg-[#c23e38] flex items-center justify-center text-white group-hover:bg-[#a9302a] transition-colors">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
              </div>
            </Link>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full lg:w-8/12 flex flex-col mt-8 lg:mt-0">
            {/* Top border for the first item */}
            <div className="border-t border-white/20" />

            {faqData.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="flex flex-col border-b border-white/20 transition-colors duration-300">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="flex items-center justify-between w-full py-6 md:py-8 text-left focus:outline-none group"
                  >
                    <h3 className="text-[17px] md:text-[22px] font-medium text-white pr-8">
                      {item.question}
                    </h3>
                    <div className="flex-shrink-0 text-white group-hover:text-white/80 transition-colors duration-300">
                      {isOpen ? <Minus className="w-5 h-5" strokeWidth={2} /> : <Plus className="w-5 h-5" strokeWidth={2} />}
                    </div>
                  </button>
                  <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="pb-8 text-white/70 text-[15px] md:text-lg leading-relaxed font-light">
                        {item.answer}
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
