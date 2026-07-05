"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import ParallaxHero from "@/components/ui/ParallaxHero";
import { ArrowLeft, CheckCircle2, Heart, Activity, Settings } from "lucide-react";
import { PRODUCTS } from "../data";

export default function ProductDetailPage() {
  const params = useParams();
  const id = parseInt(params.id as string);
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];

  const [activeTab, setActiveTab] = useState<"benefits" | "usage" | "specs">("benefits");

  return (
    <main className="w-full flex flex-col min-h-screen bg-[#fdfcfb] pb-24">
      {/* Hero Section */}
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
      >
        <div 
          className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20"
        >
          <div className="flex flex-col items-start w-full max-w-2xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-4 md:mb-6">
              Chi tiết sản phẩm
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal mb-8 md:mb-10 max-w-xl">
              Nấm Lim Xanh Trường Lâm
            </p>
          </div>
        </div>
      </ParallaxHero>

      {/* Main Content Wrapper - slides over the parallax hero */}
      <div className="relative z-10 bg-[#fdfcfb] w-full">
        {/* Breadcrumb & Back button */}
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
            <Link href="/products" className="flex items-center gap-2 text-[#62190F] font-semibold hover:opacity-70 transition-colors uppercase tracking-wider text-sm">
              <ArrowLeft className="w-4 h-4" />
              Quay lại
            </Link>
            <div className="text-sm font-light text-gray-500">
              <Link href="/" className="hover:text-gray-900 transition-colors">Trang chủ</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-gray-900 transition-colors">Sản phẩm</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Content */}
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] lg:aspect-square bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
                {product.isBestSeller && (
                  <div className="absolute top-4 left-4 bg-[#62190F] text-white text-xs font-medium px-4 py-1.5 rounded uppercase tracking-wide shadow-md">
                    Bán chạy
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Info & Tabs */}
            <div className="lg:col-span-7 flex flex-col">
              <div className="inline-flex text-[#a87a5a] font-bold text-sm tracking-widest uppercase mb-4">
                {product.category.replace("Nấm Lim Xanh ", "")}
              </div>
              <h1 className="text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                {product.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">Giá sản phẩm:</span>
                  <span className="text-[#a87a5a] font-semibold text-lg">Liên hệ tư vấn</span>
                </div>
                <div className="hidden sm:block w-[1px] h-5 bg-gray-300"></div>
                <div className="font-light text-sm">
                  Đóng gói hút chân không: 100g, 200g, 500g.
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed font-light mb-10 text-[15px] md:text-[16px]">
                {product.description || "Nấm lim xanh khô nguyên tai của Trường Lâm được sản xuất tại Vườn dược liệu Hợp tác xã Hải Nam. Sản phẩm là kết quả nghiên cứu chuyên sâu dựa trên đề tài khoa học cấp Bộ... (Đang cập nhật)"}
              </p>

              {/* Tabs Navigation */}
              <div className="flex flex-wrap items-center gap-6 md:gap-8 border-b border-gray-200 mb-8">
                <button 
                  onClick={() => setActiveTab("benefits")}
                  className={`flex items-center gap-2 pb-4 text-sm font-semibold uppercase tracking-wide transition-colors relative ${activeTab === 'benefits' ? 'text-[#62190F]' : 'text-gray-400 hover:text-gray-900'}`}
                >
                  <Heart className="w-4 h-4" />
                  Lợi ích nổi bật
                  {activeTab === 'benefits' && (
                    <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#62190F]"></div>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab("usage")}
                  className={`flex items-center gap-2 pb-4 text-sm font-semibold uppercase tracking-wide transition-colors relative ${activeTab === 'usage' ? 'text-[#62190F]' : 'text-gray-400 hover:text-gray-900'}`}
                >
                  <Activity className="w-4 h-4" />
                  Hướng dẫn sử dụng
                  {activeTab === 'usage' && (
                    <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#62190F]"></div>
                  )}
                </button>
                <button 
                  onClick={() => setActiveTab("specs")}
                  className={`flex items-center gap-2 pb-4 text-sm font-semibold uppercase tracking-wide transition-colors relative ${activeTab === 'specs' ? 'text-[#62190F]' : 'text-gray-400 hover:text-gray-900'}`}
                >
                  <Settings className="w-4 h-4" />
                  Thông số kỹ thuật
                  {activeTab === 'specs' && (
                    <div className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#62190F]"></div>
                  )}
                </button>
              </div>

              {/* Tabs Content */}
              <div className="bg-white border border-gray-100 shadow-sm rounded-xl p-6 md:p-8">
                <ul className="flex flex-col gap-5">
                  {activeTab === "benefits" && (product.benefits || []).map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-600 font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#a87a5a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                  
                  {activeTab === "usage" && (product.usage || []).map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-600 font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#a87a5a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                  
                  {activeTab === "specs" && (product.specs || []).map((item, index) => (
                    <li key={index} className="flex items-start gap-4 text-gray-600 font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#a87a5a] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}

                  {/* Fallback if empty */}
                  {((activeTab === 'benefits' && !product.benefits?.length) || 
                    (activeTab === 'usage' && !product.usage?.length) || 
                    (activeTab === 'specs' && !product.specs?.length)) && (
                    <li className="text-gray-500 italic font-light">Nội dung đang được cập nhật...</li>
                  )}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
