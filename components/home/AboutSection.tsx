import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="w-full bg-white py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Top Row: Title and Description */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start mb-20 lg:mb-32">

          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-1/2">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c93f38] text-white text-xs md:text-sm font-medium w-fit mb-6 md:mb-8">
              Về Chúng Tôi
            </div>
            <h2 className="text-[2.5rem] md:text-[4rem] lg:text-[4.5rem] leading-[1.05] font-semibold text-gray-900 tracking-tight">
              Nấm Lim Xanh Trường Lâm
              Bền Vững
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full lg:w-1/2 lg:pt-16">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal mb-6">
              Sản phẩm là kết quả của nhiều năm nghiên cứu chuyên sâu, được xây dựng trên nền tảng khoa học vững chắc từ đề tài nghiên cứu cấp Bộ của Bộ Nông nghiệp và Phát triển nông thôn về phục tráng và phát triển nguồn gen nấm lim xanh, một công trình khoa học có giá trị thực tiễn cao, góp phần chuyển hóa tri thức học thuật thành sản phẩm phục vụ sức khỏe cộng đồng.
            </p>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal mb-10">
              Được nuôi trồng tại Vườn Dược Liệu Hợp Tác Xã Hải Nam, sản phẩm là sự kết hợp giữa di sản tri thức về thảo dược truyền thống và công nghệ sinh học hiện đại. Chúng tôi tự hào ứng dụng thành công quy trình nuôi trồng kiểm soát khép kín nghiêm ngặt đạt tiêu chuẩn HACCP, đảm bảo chất lượng vàng ổn định từ giống gốc đến thành phẩm.
            </p>
            <div>
              <Link href="/about" className="group inline-flex items-center justify-between bg-[#f4f4f4] rounded-full pl-6 pr-2 py-2 hover:bg-[#e5e5e5] transition-colors w-fit">
                <span className="text-gray-900 font-medium mr-12 md:mr-16 text-[15px]">Tìm Hiểu Thêm</span>
                <div className="w-9 h-9 rounded-full bg-[#c93f38] flex items-center justify-center text-white group-hover:bg-[#a9302a] transition-colors">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                </div>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Row: 4-Column Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">

          {/* Stat 1 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">100%</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Lorem ipsum</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non cupiditate obcaecati. Dolor delectus
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">100%</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Lorem ipsum</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non cupiditate obcaecati. Dolor delectus
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">100%</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Lorem ipsum</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non cupiditate obcaecati. Dolor delectus
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">100%</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Lorem ipsum</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod non cupiditate obcaecati. Dolor delectus
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
