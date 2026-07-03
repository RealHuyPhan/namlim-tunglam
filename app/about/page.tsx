import Image from "next/image";
import { Quote } from "lucide-react";
import CertificateGallery from "@/components/about/CertificateGallery";
import TimelineSection from "@/components/about/TimelineSection";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white pb-24">

      {/* Hero Section */}
      <section className="relative w-full h-[430px] flex items-center pt-24 md:pt-32 p-[10px]">
        {/* Background Image */}
        <div className="absolute inset-[10px] z-0 bg-[#252425] rounded-[16px] overflow-hidden">
          <Image
            src="/images/HomeBG.jpg"
            alt="About Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-start w-full max-w-2xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-2 md:mb-4">
              About Myzel
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal">
              Our Origins and Purpose
            </p>
          </div>
        </div>
      </section>

      {/* Story Section from Screenshot */}
      <section className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-24 mb-8 lg:mb-15">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left: Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-[16/9] rounded-[16px] overflow-hidden">
              <Image
                src="/images/HomeBG.jpg"
                alt="Myzel Farm Sign"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6">
              Story
            </div>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-bold text-gray-900 tracking-tight mb-8">
              About Myzel
            </h2>
            <div className="flex flex-col gap-6 text-gray-900 font-medium leading-relaxed text-[15px] md:text-[17px]">
              <p>
                Founded in 2021, Myzel Organics is a family-owned company built on a foundation of sustainability, quality, and transparency.
              </p>
              <p>
                From retrofitting a poultry farm into a cutting-edge mushroom cultivation facility to adopting innovative renewable energy solutions, our journey reflects a deep commitment to creating positive environmental impact.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 1. Open Letter (Kept as requested) */}
      <section className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 mb-20 lg:mb-32">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Left: Text Content Card */}
          <div className="w-full lg:w-2/3 flex flex-col justify-center">
            <div className="bg-white rounded-2xl p-8 md:px-12 md:py-10 lg:px-16 lg:py-12 relative">

              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-[1px] bg-gray-500" />
                <span className="text-gray-600 font-medium tracking-wide">Tâm thư</span>
              </div>
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[1.1] font-medium text-gray-900 mb-8 relative z-10">
                Thư ngỏ
              </h1>

              <div className="flex flex-col gap-6 text-gray-600 font-light leading-relaxed text-base md:text-lg relative z-10">
                <p>
                  Kính gửi Quý khách hàng, Quý đối tác,
                </p>
                <p className="text-justify">
                  Chúng tôi bắt đầu hành trình với niềm tin rằng nấm lim xanh của Việt Nam có thể sánh ngang với những nguồn dược liệu quý trên thế giới. Để hiện thực hóa điều đó, Hợp tác xã thương mại và dịch vụ Hải Nam đã đầu tư bài bản từ vùng nguyên liệu đạt chuẩn GACP-WHO, hệ thống sản xuất hiện đại, hợp tác nghiên cứu với các viện uy tín, cùng đội ngũ kỹ sư nông nghiệp giàu kinh nghiệm.
                </p>
                <p className="text-justify">
                  Với phương châm <strong className="text-[#62190F] font-medium">“Minh bạch – Khoa học – Bền vững”</strong>, chúng tôi cam kết mang đến những sản phẩm chất lượng cao, an toàn, đạt chuẩn quốc tế, phục vụ sức khỏe cộng đồng và khẳng định thương hiệu Việt trên bản đồ dược liệu toàn cầu.
                </p>

                <div className="mt-6 pt-6 border-t border-gray-50 text-right">
                  <p className="font-semibold text-gray-900 text-[15px]">Trân trọng !</p>
                  <p className="font-semibold text-gray-900 text-[15px] mt-0.5">Ceo & Founder</p>
                  <p className="font-medium text-[#c29676] text-base mt-1">Mr Lê Văn Hợp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CEO Image */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] lg:max-w-none aspect-[4/5] bg-[#f4f4f4] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <Image
                src="/images/HomeBG.jpg"
                alt="CEO Mr Lê Văn Hợp"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Timeline Scroll Animation Section */}
      <TimelineSection />


      {/* 2. Mission Section (from screenshot) */}
      <section className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-24 mb-20 lg:mb-32">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Left: Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6">
              Mission
            </div>
            <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-bold text-gray-900 tracking-tight mb-8">
              Whole. Bioactive. Sustainable.
            </h2>
            <div className="flex flex-col gap-6 text-gray-900 font-medium leading-relaxed text-[15px] md:text-[17px]">
              <p>
                At Myzel Organics, innovation means working with nature — not against it.
              </p>
              <p>
                We believe that mushrooms have the power to drive a new era of health, well-being and environmental stewardship.
              </p>
              <p>
                We have developed a sustainable, full-spectrum process that unites fruiting body and mycelium through fermentation to create less-processed, whole-food mushroom nutrition.
              </p>
              <p>
                The result is a rich, bioactive matrix to grow mushrooms that are nutrient-dense, potent in compounds, and with zero waste.
              </p>
              <p>
                It's how we harness nature's intelligence to build a cleaner, smarter, more sustainable future for functional health and nutrition.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-5/12">
            <div className="relative w-full aspect-square md:aspect-[4/5] rounded-[16px] overflow-hidden">
              <Image
                src="/images/HomeBG.jpg"
                alt="Myzel Team"
                fill
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Values Section */}
      {/* Solid background based on the brand color #62190F, but much lighter/pastel for harmony */}
      <section className="w-full bg-[#e8d8d5] py-20 lg:py-32">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="flex flex-col mb-16 lg:mb-24">
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#62190F]/70 uppercase mb-8">
              Giá Trị Cốt Lõi
            </h3>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[4rem] leading-[1.1] font-medium text-gray-900 max-w-4xl">
              Những Nguyên Tắc Dẫn Lối Mọi Sản Phẩm Chúng Tôi Mang Lại.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

            {/* Value 1 */}
            <div className="flex flex-col">
              <span className="text-3xl font-light text-gray-900 mb-6">01</span>
              <div className="w-full h-[1px] bg-gray-900/20 mb-6" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">Chất lượng</h4>
              <p className="text-sm font-light text-gray-700">Mỗi chi tiết đều quan trọng.</p>
            </div>

            {/* Value 2 */}
            <div className="flex flex-col">
              <span className="text-3xl font-light text-gray-900 mb-6">02</span>
              <div className="w-full h-[1px] bg-gray-900/20 mb-6" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">Chính trực</h4>
              <p className="text-sm font-light text-gray-700">Đứng sau mọi sản phẩm.</p>
            </div>

            {/* Value 3 */}
            <div className="flex flex-col">
              <span className="text-3xl font-light text-gray-900 mb-6">03</span>
              <div className="w-full h-[1px] bg-gray-900/20 mb-6" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">Đáng tin cậy</h4>
              <p className="text-sm font-light text-gray-700">Giá trị trường tồn.</p>
            </div>

            {/* Value 4 */}
            <div className="flex flex-col">
              <span className="text-3xl font-light text-gray-900 mb-6">04</span>
              <div className="w-full h-[1px] bg-gray-900/20 mb-6" />
              <h4 className="text-xl font-medium text-gray-900 mb-2">An toàn</h4>
              <p className="text-sm font-light text-gray-700">Tiêu chuẩn chuyên nghiệp.</p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Licenses & Certifications Section */}
      <section className="w-full bg-white py-12 lg:py-20">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

          <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-[#62190F]/70 uppercase mb-6">
              Chứng nhận & Giấy phép
            </h3>
            <h2 className="text-[2rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.1] font-medium text-gray-900 max-w-4xl mx-auto">
              Được Cấp Phép, Kiểm Định, Và Tin Tưởng Khắp Mọi Nơi.
            </h2>
          </div>

          <CertificateGallery />

        </div>
      </section>

    </main>
  );
}
