import Image from "next/image";

export default function FeatureSection() {
  return (
    <section className="w-full bg-white py-8 lg:py-12 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-gray-500" />
            <span className="text-gray-600 font-medium tracking-wide">Sản phẩm của chúng tôi</span>
          </div>
          <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[1.15] font-medium text-gray-900">
            Sản phẩm Nấm Lim Xanh Trường Lâm
          </h2>
        </div>

        {/* Images Grid */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch h-auto lg:h-[600px]">

          {/* Left Column */}
          <div className="w-full lg:w-[30%] relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/HomeBG.jpg"
              alt="Innovative Agro Machinery 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Middle Column */}
          <div className="w-full lg:w-[40%] relative min-h-[500px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm flex flex-col justify-end">
            <Image
              src="/images/BoxGift.jpg"
              alt="Smart Irrigation Network"
              fill
              className="object-cover z-0 hover:scale-105 transition-transform duration-700"
            />
            {/* Glass Card */}
            <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-xl p-8 mx-4 md:mx-6 mb-4 md:mb-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative z-10">
              <p className="text-sm tracking-wider text-gray-500 uppercase font-medium mb-3">
                California, USA
              </p>
              <h3 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
                Smart Irrigation Network
              </h3>
              <p className="text-gray-500 text-base leading-relaxed">
                Efficient water management system reducing water wastage by 40%.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-[30%] relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/images/HomeBG.jpg"
              alt="Innovative Agro Machinery 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
