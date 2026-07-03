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
              Nấm Lim Xanh <br className="hidden lg:block" />
              Tự Nhiên & Bền Vững
            </h2>
          </div>

          {/* Right Column */}
          <div className="flex flex-col w-full lg:w-1/2 lg:pt-16">
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal mb-6">
              Trường Lâm tự hào mang đến những sản phẩm nấm lim xanh được thu hái tự nhiên từ những cánh rừng nguyên sinh. Cơ sở của chúng tôi đạt chứng nhận tiêu chuẩn chất lượng cao nhất, đảm bảo vệ sinh an toàn thực phẩm và giữ trọn dược tính.
            </p>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-normal mb-10">
              Sứ mệnh của chúng tôi là sản xuất những sản phẩm bảo vệ sức khỏe bền vững nhất. Chúng tôi trân trọng và bảo tồn thiên nhiên, đồng thời mang lại giá trị dinh dưỡng toàn diện cho cộng đồng và khách hàng.
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
            <h4 className="text-lg font-medium text-gray-900 mb-2">Tự Nhiên</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Nấm lim xanh được thu hái 100% từ rừng nguyên sinh, không sử dụng hóa chất hay can thiệp nhân tạo, bảo vệ sinh thái.
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">14+</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Dược Chất Quý</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Chứa hơn 14 loại dược chất quý hiếm bao gồm Triterpenes, Germanium, Polysaccharides hỗ trợ phục hồi sức khỏe.
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">10k+</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Khách Hàng</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Hàng ngàn khách hàng trên toàn quốc đã tin tưởng sử dụng, cải thiện thể trạng và phản hồi tích cực về sản phẩm.
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col">
            <h3 className="text-[4rem] md:text-[5rem] lg:text-[5.5rem] leading-none font-light text-gray-900 mb-6 tracking-tight">Top 1</h3>
            <h4 className="text-lg font-medium text-gray-900 mb-2">Chất Lượng</h4>
            <p className="text-sm text-gray-600 leading-relaxed font-light pr-4">
              Quy trình chế biến và đóng gói đạt chuẩn vệ sinh an toàn thực phẩm, giữ nguyên vẹn giá trị dinh dưỡng cao nhất.
            </p>
          </div>
          
        </div>
        
      </div>
    </section>
  );
}
