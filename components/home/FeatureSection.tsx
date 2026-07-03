import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";

export default function FeatureSection() {
  const benefits = [
    "Hỗ trợ điều trị ung thư",
    "Giải độc gan, xơ gan",
    "Ổn định huyết áp",
    "Hỗ trợ điều trị tiểu đường",
    "Tăng cường hệ miễn dịch",
    "Cải thiện giấc ngủ, an thần"
  ];

  return (
    <section className="w-full bg-[#2a2928] py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Image */}
          <div className="w-full lg:w-5/12 relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/images/HomeBG.jpg"
              alt="Công dụng nấm lim xanh"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column - Content */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6 md:mb-8">
              Công Dụng
            </div>
            
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-semibold text-white tracking-tight mb-8">
              Lợi Ích Sức Khỏe <br className="hidden md:block" />
              Tuyệt Vời Của Nấm Lim Xanh
            </h2>
            
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-light mb-12 max-w-3xl">
              Nấm Lim Xanh Trường Lâm tự hào mang đến hàm lượng dược chất cao nhất, được chứng minh qua các kiểm định lâm sàng. Sử dụng đều đặn mỗi ngày giúp phục hồi sức khỏe, ngăn ngừa và hỗ trợ điều trị hiệu quả các bệnh lý mãn tính.
            </p>

            {/* Checkmarks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-white/80 flex-shrink-0" strokeWidth={2} />
                  <span className="text-white/90 text-[15px] md:text-base font-light tracking-wide">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <Link href="/products" className="group inline-flex items-center justify-between bg-white/10 rounded-full pl-6 pr-2 py-2 hover:bg-white/20 transition-colors w-fit border border-white/5">
                <span className="text-white font-medium mr-12 md:mr-16 text-[15px]">Tìm Hiểu Thêm</span>
                <div className="w-9 h-9 rounded-full bg-[#c23e38] flex items-center justify-center text-white group-hover:bg-[#a9302a] transition-colors">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2} />
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
