export interface Product {
  id: number;
  name: string;
  price: string;
  category: string;
  image: string;
  rating: number;
  description?: string;
  benefits?: string[];
  usage?: string[];
  specs?: string[];
  isBestSeller?: boolean;
}

export const CATEGORIES = [
  "Tất cả sản phẩm",
  "Nấm Lim Xanh Tự Nhiên",
  "Nấm Lim Xanh Thái Lát",
  "Trà Nấm Lim Xanh",
  "Rượu Nấm Lim Xanh",
  "Set Quà Tặng Cao Cấp"
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Nấm Lim Xanh Nguyên Cây Hộp 500g",
    price: "2.500.000đ",
    category: "Nấm Lim Xanh Tự Nhiên",
    image: "/images/BoxGift.jpg",
    rating: 5,
    isBestSeller: true,
    description: "Nấm lim xanh khô nguyên tai của Trường Lâm được sản xuất tại Vườn dược liệu Hợp tác xã Hải Nam (xã Phúc Thịnh, Ngọc Lặc, Thanh Hóa). Sản phẩm là kết quả nghiên cứu chuyên sâu dựa trên đề tài khoa học cấp Bộ về phục tráng và phát triển nguồn gen nấm lim xanh bản địa do ông Lê Hợp chủ trì. Nấm được nuôi trồng khép kín mô phỏng sinh cảnh tự nhiên trong nhà màng kiểm soát khí hậu tự động. Sau khi thu hoạch thủ công vào đúng độ chín sinh lý khi hàm lượng hoạt chất đạt đỉnh, nấm được sơ chế tỉ mỉ và sấy khô bằng công nghệ sấy ở nhiệt độ thấp, giúp loại bỏ hoàn toàn tạp chất và vi sinh vật nhưng bảo toàn nguyên vẹn cấu trúc dược tính quý giá.",
    benefits: [
      "Duy trì hàm lượng hoạt chất tối ưu (Adenosine, Beta-glucan, Ganoderic acid, Triterpenoid) tương đương nấm tự nhiên.",
      "Hỗ trợ tăng cường sức đề kháng và nâng cao hệ miễn dịch tự nhiên của cơ thể.",
      "Hỗ trợ giải độc gan, tăng cường chức năng gan và hỗ trợ điều hòa huyết áp ổn định.",
      "Sản phẩm thuần tự nhiên, không sử dụng chất bảo quản hay chất kích thích tăng trưởng."
    ],
    usage: [
      "Dùng 10-20g nấm rửa sạch, đun với 2 lít nước, sắc còn 1.5 lít uống thay nước hàng ngày.",
      "Có thể thái lát hãm trà như trà bình thường (hãm bằng nước sôi 100 độ C).",
      "Dùng để ngâm rượu: 1kg nấm nguyên cây ngâm với 10-15 lít rượu ngon, sau 20 ngày có thể sử dụng."
    ],
    specs: [
      "Quy cách đóng gói: Hút chân không, túi/hộp 100g, 200g, 500g.",
      "Thành phần: 100% nấm lim xanh khô nguyên tai.",
      "Hạn sử dụng: 24 tháng kể từ ngày sản xuất.",
      "Bảo quản: Nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp."
    ]
  },
  {
    id: 2,
    name: "Nấm Lim Xanh Thái Lát Hộp 250g",
    price: "1.300.000đ",
    category: "Nấm Lim Xanh Thái Lát",
    image: "/images/BoxGift.jpg",
    rating: 4,
    description: "Sản phẩm được thái lát sẵn, tiện lợi cho việc hãm trà và nấu nước uống hàng ngày.",
    benefits: [
      "Thái lát giúp dược chất dễ dàng hòa tan trong nước nhanh hơn.",
      "Rất tiện lợi cho người bận rộn, nhân viên văn phòng.",
      "Tăng cường hệ miễn dịch, cải thiện chức năng gan."
    ],
    usage: [
      "Hãm trà: Lấy 5-10g thái lát cho vào ấm trà, hãm với nước sôi khoảng 15 phút.",
      "Sắc nước: Đun 10g với 1 lít nước, uống trong ngày."
    ],
    specs: [
      "Đóng gói: 250g hộp giấy.",
      "Hạn sử dụng: 24 tháng."
    ]
  },
  {
    id: 3,
    name: "Set Quà Biếu Nấm Lim Xanh Thượng Hạng",
    price: "5.500.000đ",
    category: "Set Quà Tặng Cao Cấp",
    image: "/images/BoxGift.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Trà Nấm Lim Xanh Túi Lọc (Hộp 30 gói)",
    price: "450.000đ",
    category: "Trà Nấm Lim Xanh",
    image: "/images/BoxGift.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Rượu Nấm Lim Xanh Bình Khắc Rồng 3L",
    price: "3.200.000đ",
    category: "Rượu Nấm Lim Xanh",
    image: "/images/BoxGift.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Nấm Lim Xanh Rừng Hộp Giấy 100g",
    price: "550.000đ",
    category: "Nấm Lim Xanh Tự Nhiên",
    image: "/images/BoxGift.jpg",
    rating: 5,
  },
  {
    id: 7,
    name: "Hộp Quà Tặng Trà Nấm & Tách Pha",
    price: "850.000đ",
    category: "Set Quà Tặng Cao Cấp",
    image: "/images/BoxGift.jpg",
    rating: 4,
  },
  {
    id: 8,
    name: "Nấm Lim Xanh Loại 1 Hộp Gỗ 1kg",
    price: "4.800.000đ",
    category: "Nấm Lim Xanh Tự Nhiên",
    image: "/images/BoxGift.jpg",
    rating: 5,
  },
];
