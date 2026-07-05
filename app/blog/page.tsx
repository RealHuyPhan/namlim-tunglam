import Image from "next/image";
import Link from "next/link";
import BlogList from "@/components/blog/BlogList";
import ParallaxHero from "@/components/ui/ParallaxHero";
import FadeIn from "@/components/ui/FadeIn";

export default function BlogPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">

      {/* Hero Section - sticky, content slides over it */}
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
      >
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-start w-full max-w-2xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-2 md:mb-4 mt-8">
              Tin tức & Góc sức khỏe
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal">
              Cập nhật những kiến thức, nghiên cứu khoa học và kinh nghiệm sử dụng Nấm Lim Xanh để bảo vệ sức khỏe mỗi ngày.
            </p>
          </div>
        </div>
      </ParallaxHero>

      <FadeIn>
      <section className="w-full py-20 overflow-hidden">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

            {/* Left Column: Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-[12px] md:text-[13px] font-semibold tracking-[0.15em] text-[#62190F]/80 uppercase mb-6">
                Thư Viện Sức Khỏe
              </h3>
              <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[1.1] font-bold text-[#3e1610] tracking-tight mb-6 lg:mb-8">
                Khám phá sức<br className="hidden lg:block" />
                mạnh từ thảo dược<br className="hidden lg:block" />
                tự nhiên
              </h2>
              <p className="text-gray-500 text-base md:text-[1.1rem] leading-relaxed font-light mb-10 max-w-xl">
                Nơi tổng hợp những kiến thức chuyên sâu, nghiên cứu lâm sàng và hướng dẫn sử dụng Nấm Lim Xanh đúng cách để đạt hiệu quả tối ưu cho sức khỏe bền vững.
              </p>
              <div>
                <Link
                  href="#all-posts"
                  className="inline-flex items-center justify-center bg-[#3e1610] text-white text-[13px] font-semibold tracking-wider uppercase px-8 py-4 rounded-md hover:bg-[#2c0f0b] transition-colors shadow-lg"
                >
                  Xem Tất Cả Bài Viết
                </Link>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]">
                <Image
                  src="/images/HomeBG.jpg"
                  alt="Vườn nấm lim xanh"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      </FadeIn>

      {/* 3. Blog Content Section */}
      <FadeIn delay={0.1}>
      <section id="all-posts" className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-12 py-15">
        <BlogList />
      </section>
      </FadeIn>

    </main>
  );
}
