import AboutSection from "@/components/home/AboutSection";
import FeatureSection from "@/components/home/FeatureSection";
import EmpowerSection from "@/components/home/EmpowerSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="relative min-h-[55vh] md:min-h-screen w-full flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
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
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 flex flex-col flex-1 pb-10 md:pb-16 pt-28 md:pt-32 lg:pt-48">

          {/* Main Content Area - higher on mobile, centered on desktop */}
          <div className="flex-1 flex flex-col justify-start md:justify-center w-full max-w-3xl mt-4 md:mt-12 drop-shadow-xl">
            <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-6xl lg:text-[5rem] font-medium text-white leading-[1.1] tracking-tight">
              NẤM <br />
              LIM XANH <br />
              TRƯỜNG LÂM
            </h1>

            {/* Mobile Description - directly under H1 */}
            <p className="text-white text-base sm:text-lg font-medium max-w-[320px] sm:max-w-sm mt-6 leading-relaxed md:hidden">
              We are driving the future of farming with advanced machinery and automation to maximize yield and sustainability.
            </p>
          </div>

          {/* Desktop Description - aligned to the right at the bottom */}
          <div className="hidden md:flex justify-end mt-auto">
            <p className="text-white text-xl lg:text-2xl font-medium max-w-[500px] text-right leading-snug">
              We are driving the future of farming with advanced machinery and automation to maximize yield and sustainability.
            </p>
          </div>
        </div>
      </main>
      <AboutSection />
      <FeatureSection />
      <EmpowerSection />
    </>
  );
}
