import ParallaxHero from "@/components/ui/ParallaxHero";
import FadeIn from "@/components/ui/FadeIn";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
      >
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-start w-full max-w-2xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-2 md:mb-4 mt-8">
              Liên Hệ
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn.
            </p>
          </div>
        </div>
      </ParallaxHero>

      {/* Main Content */}
      <section className="w-full py-16 md:py-24">
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column: Form */}
            <FadeIn className="w-full lg:w-1/2">
              <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-gray-900 tracking-tight mb-4">
                Contact Us
              </h2>
              <p className="text-gray-500 mb-10 text-[15px] md:text-base max-w-lg leading-relaxed">
                Hãy để lại lời nhắn nếu bạn cần tư vấn về sản phẩm nấm lim xanh, đặt hàng, hoặc có bất kỳ câu hỏi nào.
              </p>
              <ContactForm />
            </FadeIn>

            {/* Right Column: Info & Map */}
            <FadeIn delay={0.2} className="w-full lg:w-1/2 flex flex-col gap-8">
              {/* Info Card */}
              <div className="bg-[#fdfcfb] rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100">
                <div className="flex flex-col gap-6">

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10  flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-[#62190F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Địa chỉ trụ sở</h4>
                      <p className="text-gray-600 font-light text-[15px] leading-relaxed">
                        Đội 1, thôn Võng La, xã Thiên Lộc, Đông Anh, Hà Nội
                      </p>
                    </div>
                  </div>

                  {/* Hotline */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-[#62190F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Hotline liên hệ</h4>
                      <p className="text-gray-900 font-medium text-[16px]">
                        +84 943 363 363
                      </p>
                      <p className="text-gray-500 text-xs mt-1 font-light">Hỗ trợ trực tiếp: Mr Lê Văn Hợp</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                      <Mail className="w-5 h-5 text-[#62190F]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Địa chỉ Email</h4>
                      <p className="text-gray-600 font-light text-[15px]">
                        hophit90@gmail.com
                      </p>
                    </div>
                  </div>

                  {/* Socials */}
                  <div className="pt-6 mt-2 border-t border-gray-200 flex items-center gap-4">
                    <a href="#" className="text-[#0068FF] hover:scale-110 transition-transform" title="Zalo">
                      {/* <MessageCircle className="w-6 h-6" /> */}
                      Zalo
                    </a>
                    <a href="#" className="text-[#0866FF] hover:scale-110 transition-transform" title="Facebook">
                      {/* <Facebook className="w-6 h-6" fill="currentColor" /> */}
                      Facebook
                    </a>
                  </div>

                </div>
              </div>

              {/* Map Container */}
              <div className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[24px] overflow-hidden shadow-sm bg-gray-100 border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.222956272372!2d105.80807661138883!3d21.143528280451554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313501a3cae0a4f5%3A0xc6cf6d4dbdbba702!2zVsO1bmcgTGEsIMSQw7RuZyBBbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                ></iframe>
              </div>

            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
