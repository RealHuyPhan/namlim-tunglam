import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-gray-900 pt-16 md:pt-20 pb-8 mt-auto border-t border-gray-100">
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">

        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">

          {/* Column 1: Brand & Info */}
          <div className="w-full lg:max-w-sm flex flex-col gap-6">
            <h2 className="text-3xl font-semibold text-gray-900 tracking-wide">
              Trường Lâm
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base font-light">
              Nấm Lim Xanh Trường Lâm Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, maxime, odit asperiores veritatis molestias suscipit sapiente temporibus aliquam excepturi omnis esse atque earum ratione beatae quis vel accusantium non accusamus.
            </p>
            <div className="flex items-center gap-4 mt-2">
              {/* <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-900"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors text-gray-900"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a> */}
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="w-full lg:w-auto flex flex-col gap-6">
            <h3 className="text-lg font-medium text-gray-900">Liên Kết</h3>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                  Trang Chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                  Sản Phẩm
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                  Kiến Thức
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-light">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="w-full lg:w-auto flex flex-col gap-6">
            <h3 className="text-lg font-medium text-gray-900">Thông Tin Liên Hệ</h3>

            <div className="flex flex-col gap-5">
              <div>
                <p className="text-gray-900 font-medium mb-1">HTX Thương mại và Dịch vụ Hải Nam</p>
                <p className="text-gray-600 text-sm font-light">GPKD / MST: 0109756450</p>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 shrink-0" />
                <div className="text-gray-600 text-sm font-light leading-relaxed">
                  <p>Trụ sở: Đội 1, thôn Võng La, xã Võng La, Đông Anh, Hà Nội</p>
                  <p className="mt-1">Vùng nguyên liệu: Xã Phúc Thịnh, Ngọc Lặc, Thanh Hóa</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 shrink-0" />
                <p className="text-gray-600 text-sm font-light">
                  +84 943 363 363 (Mr Lê Văn Hợp)
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 shrink-0" />
                <p className="text-gray-600 text-sm font-light">
                  hopntt90@gmail.com
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs font-light">
            © 2026 Nấm Lim Xanh Trường Lâm. Bảo lưu mọi quyền.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-gray-500 hover:text-gray-900 transition-colors text-xs font-light">
              Điều khoản dịch vụ
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-900 transition-colors text-xs font-light">
              Chính sách bảo mật
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
