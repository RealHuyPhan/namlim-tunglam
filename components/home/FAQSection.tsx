"use client";

import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const faqData = [
  {
    id: 1,
    question: "Trẻ em có uống được nấm lim xanh không? Độ tuổi và liều lượng phù hợp?",
    answer: "Trẻ em dưới 2 tuổi không nên sử dụng nấm lim xanh vì hệ tiêu hóa và gan thận chưa phát triển hoàn thiện. Trẻ từ 2 tuổi trở lên có thể sử dụng liều lượng rất nhỏ (khoảng 2-5g/ngày) đun loãng để tăng cường sức đề kháng, tuy nhiên cần tham khảo ý kiến bác sĩ chuyên khoa trước khi dùng.",
  },
  {
    id: 2,
    question: "Phụ nữ mang thai có dùng nấm lim xanh được không?",
    answer: "Phụ nữ mang thai và đang cho con bú không nên tự ý sử dụng nấm lim xanh. Mặc dù nấm lim xanh rất tốt cho sức khỏe, nhưng cơ địa phụ nữ mang thai rất nhạy cảm. Quý khách chỉ nên sử dụng khi có sự chỉ định và theo dõi sát sao của bác sĩ sản khoa.",
  },
  {
    id: 3,
    question: "Người đang dùng thuốc Tây có uống nấm lim xanh cùng lúc được không?",
    answer: "Có thể sử dụng kết hợp nấm lim xanh và thuốc Tây để hỗ trợ quá trình điều trị. Tuy nhiên, để đảm bảo hiệu quả tối ưu và tránh tương tác thuốc, thời gian uống nấm lim xanh nên cách thời gian uống thuốc Tây ít nhất 30 đến 45 phút.",
  },
  {
    id: 4,
    question: "Uống nấm lim xanh bao lâu thì thấy hiệu quả?",
    answer: "Hiệu quả của nấm lim xanh tùy thuộc vào cơ địa và tình trạng sức khỏe của mỗi người. Thông thường, người dùng sẽ cảm thấy cơ thể khỏe khoắn, ăn ngủ tốt hơn sau 1-2 tuần sử dụng liên tục. Đối với việc hỗ trợ điều trị bệnh, cần kiên trì sử dụng từ 2 đến 5 tháng để thấy rõ sự cải thiện thông qua các chỉ số y tế.",
  },
  {
    id: 5,
    question: "Những điều cần biết trước khi dùng?",
    answer: "Trước khi sử dụng, cần đảm bảo nấm đã được sơ chế sạch sẽ, loại bỏ hoàn toàn phần gốc dính gỗ lim vì chứa độc tố tự nhiên. Nên sắc nấm bằng nồi đất hoặc nồi thủy tinh, tránh dùng nồi nhôm/kim loại làm giảm dược tính. Người mới dùng nên bắt đầu với liều lượng nhỏ (5-10g/ngày) để cơ thể làm quen.",
  }
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full py-20 lg:py-32 overflow-hidden bg-[#68502D]">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-4/12 flex flex-col items-start">
            <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6">
              Hỏi Đáp
            </div>
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-10">
              Câu Hỏi <br className="hidden lg:block" /> Thường Gặp
            </h2>
            <Link href="/faq" className="group inline-flex items-center justify-between bg-[#3f3e40] rounded-full pl-6 pr-2 py-2 hover:bg-[#4f4e50] transition-colors w-fit border border-white/5">
              <span className="text-white font-medium mr-12 md:mr-16 text-[15px]">Xem Thêm</span>
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
