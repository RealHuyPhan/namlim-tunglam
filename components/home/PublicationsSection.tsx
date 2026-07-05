import Image from "next/image";

const publications = [
  {
    id: 1,
    title: "Kết Quả ",
    content: "\"Kết quả phân tích từ các cơ quan y tế uy tín cho thấy hàm lượng Triterpenes và Germanium trong Nấm Lim Xanh Trường Lâm cao vượt trội. Đây là những hoạt chất đóng vai trò cốt lõi trong việc ức chế gốc tự do, tăng cường hệ miễn dịch và hỗ trợ điều trị hiệu quả các bệnh lý về gan, huyết áp. Quy trình bảo quản khép kín giúp nấm giữ nguyên 100% giá trị dược lý ban đầu.\"",
    author: "Viện Dược Liệu",
    role: "Cơ quan kiểm định y tế",
    logo: "/images/HomeBG.jpg",
  },
  {
    id: 2,
    title: "Chứng Nhận An Toàn Thực Phẩm",
    content: "\"Toàn bộ các dòng sản phẩm Nấm Lim Xanh của Trường Lâm đều đã vượt qua các bài kiểm tra gắt gao về độc tính và vi sinh. Sản phẩm không chứa kim loại nặng, không có chất bảo quản hay hóa chất nông nghiệp. Đạt tiêu chuẩn Vệ sinh An toàn Thực phẩm cấp quốc gia, mang lại sự an tâm tuyệt đối cho người tiêu dùng khi sử dụng hàng ngày.\"",
    author: "Cục An Toàn Thực Phẩm",
    role: "Bộ Y Tế",
    logo: "/images/BoxGift.jpg",
  },
  {
    id: 3,
    title: "Nghiên Cứu Lâm Sàng Về Nấm Lim Xanh",
    content: "\"Nấm Lim Xanh (Ganoderma Lucidum) đã được hàng loạt các tạp chí y khoa quốc tế đưa vào nghiên cứu chuyên sâu. Báo cáo lâm sàng chỉ ra rằng, việc sử dụng chiết xuất từ Nấm Lim Xanh tự nhiên liên tục trong 6 tháng giúp bệnh nhân cải thiện rõ rệt chỉ số men gan, giảm lượng mỡ trong máu và hỗ trợ ổn định đường huyết. Hơn thế nữa, các bệnh nhân ung thư đang trong quá trình hóa xạ trị ghi nhận thể trạng phục hồi nhanh hơn, giảm bớt tác dụng phụ và có giấc ngủ sâu hơn. Đây được xem là một trong những loại thảo dược quý hiếm nhất được khoa học hiện đại công nhận.\"",
    author: "Tạp Chí Y Học Quốc Tế",
    role: "Báo cáo nghiên cứu khoa học",
    logo: "/images/HomeBG.jpg",
  },
];

export default function PublicationsSection() {
  return (
    <section className="w-full bg-[#fbfbfb] py-20 lg:py-32 overflow-hidden">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 lg:mb-20">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-6">
            Nghiên Cứu & Công Bố
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-gray-900 tracking-tight mb-6">
            Công bố khoa học
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light max-w-2xl">
            Sự uy tín của Nấm Lim Xanh Trường Lâm được minh chứng bằng các kết quả kiểm định lâm sàng và các chứng nhận chất lượng từ cơ quan y tế hàng đầu.
          </p>
        </div>

        {/* Masonry-like Grid for Publications */}
        <div className="flex flex-col gap-6 md:gap-8 w-full mx-auto">

          {/* Top Row: 2 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {publications.slice(0, 2).map((pub) => (
              <div key={pub.id} className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div>
                  <h3 className="text-xl font-medium text-gray-900 mb-4">{pub.title}</h3>
                  <p className="text-gray-600 font-light leading-relaxed text-[15px] md:text-base mb-10">
                    {pub.content}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                    <Image src={pub.logo} alt={pub.author} fill className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-900 font-medium text-base">{pub.author}</span>
                    <span className="text-gray-500 font-light text-sm">{pub.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Row: 1 Full-width Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-medium text-gray-900 mb-4">{publications[2].title}</h3>
              <p className="text-gray-600 font-light leading-relaxed text-[15px] md:text-base mb-10">
                {publications[2].content}
              </p>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                <Image src={publications[2].logo} alt={publications[2].author} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-gray-900 font-medium text-lg">{publications[2].author}</span>
                <span className="text-gray-500 font-light text-sm">{publications[2].role}</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
