"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

const CATEGORIES = [
  "Tất cả sản phẩm",
  "Nấm Lim Xanh Tự Nhiên",
  "Nấm Lim Xanh Thái Lát",
  "Trà Nấm Lim Xanh",
  "Rượu Nấm Lim Xanh",
  "Set Quà Tặng Cao Cấp"
];

const PRODUCTS = [
  {
    id: 1,
    name: "Nấm Lim Xanh Nguyên Cây Hộp 500g",
    price: "2.500.000đ",
    category: "Nấm Lim Xanh Tự Nhiên",
    image: "/images/BoxGift.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Nấm Lim Xanh Thái Lát Hộp 250g",
    price: "1.300.000đ",
    category: "Nấm Lim Xanh Thái Lát",
    image: "/images/BoxGift.jpg",
    rating: 4,
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

import { LayoutGrid, Columns, ChevronDown } from "lucide-react";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả sản phẩm");
  const [showFilters, setShowFilters] = useState(false);
  const [gridCols, setGridCols] = useState<2 | 4>(4);
  const [showSort, setShowSort] = useState(false);
  const [sortOption, setSortOption] = useState("Sắp xếp");

  const sortOptions = ["Mới nhất", "Giá: Thấp đến Cao", "Giá: Cao đến Thấp"];

  const filteredProducts = activeCategory === "Tất cả sản phẩm" 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <main className="w-full flex flex-col min-h-screen bg-white pt-24 md:pt-32 pb-24">
      
      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Page Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-4">
            Sản Phẩm
          </h1>
          <p className="text-gray-500 font-light">
            Nấm Lim Xanh tự nhiên nguyên chất, chất lượng hảo hạng.
          </p>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 border-t border-b border-gray-100 py-4">
          
          {/* Left: Filter */}
          <button 
            onClick={() => setShowFilters(!showFilters)}
            className={`w-full md:w-auto border px-8 py-2.5 text-sm font-medium transition-colors flex items-center justify-center gap-2 ${showFilters ? "border-[#62190F] text-[#62190F]" : "border-gray-200 text-gray-900 hover:border-[#62190F] hover:text-[#62190F]"}`}
          >
            Lọc sản phẩm <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
          </button>
          
          {/* Center: View Toggle */}
          <div className="hidden md:flex items-center gap-5 text-gray-400">
            <LayoutGrid 
              className={`w-5 h-5 cursor-pointer transition-colors ${gridCols === 4 ? "text-[#62190F]" : "hover:text-[#62190F]"}`} 
              onClick={() => setGridCols(4)}
            />
            <Columns 
              className={`w-5 h-5 cursor-pointer transition-colors ${gridCols === 2 ? "text-[#62190F]" : "hover:text-[#62190F]"}`} 
              onClick={() => setGridCols(2)}
            />
          </div>

          {/* Right: Sort Custom Dropdown */}
          <div className="relative w-full md:w-auto">
            <button 
              onClick={() => setShowSort(!showSort)}
              className={`w-full md:w-auto min-w-[160px] border px-6 py-2.5 text-sm font-medium transition-colors flex items-center justify-between gap-3 ${showSort ? "border-[#62190F] text-[#62190F]" : "border-gray-200 text-gray-900 hover:border-[#62190F] hover:text-[#62190F]"}`}
            >
              {sortOption} <ChevronDown className={`w-4 h-4 transition-transform shrink-0 ${showSort ? "rotate-180" : ""}`} />
            </button>
            
            {showSort && (
              <div className="absolute top-full right-0 mt-1 w-full md:w-[200px] bg-white border border-gray-100 shadow-xl z-50 flex flex-col">
                <button 
                  onClick={() => { setSortOption("Sắp xếp"); setShowSort(false); }}
                  className={`w-full text-left px-5 py-3 text-sm transition-colors ${sortOption === "Sắp xếp" ? "bg-[#f9f9f9] text-[#62190F] font-medium" : "text-gray-600 hover:bg-[#f9f9f9] hover:text-[#62190F] font-light"}`}
                >
                  Mặc định
                </button>
                {sortOptions.map((opt) => (
                  <button 
                    key={opt}
                    onClick={() => { setSortOption(opt); setShowSort(false); }}
                    className={`w-full text-left px-5 py-3 text-sm transition-colors border-t border-gray-50 ${sortOption === opt ? "bg-[#f9f9f9] text-[#62190F] font-medium" : "text-gray-600 hover:bg-[#f9f9f9] hover:text-[#62190F] font-light"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Filter Dropdown (Collapsible) */}
        {showFilters && (
          <div className="mb-12 p-8 bg-[#f9f9f9] border border-gray-100 flex flex-wrap gap-4">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 text-sm transition-colors border ${
                  activeCategory === category 
                    ? "bg-[#62190F] text-white border-[#62190F] font-medium" 
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#62190F] hover:text-[#62190F] font-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-x-6 gap-y-12 ${
            gridCols === 4 
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" 
              : "grid-cols-1 sm:grid-cols-2"
          }`}>
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Container - Square, light bg, no rounding */}
                <div className="relative w-full aspect-square overflow-hidden bg-[#f4f4f4] mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out"
                  />
                  {/* Fake badge like in reference image */}
                  {product.rating === 5 && (
                    <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 text-[10px] uppercase tracking-wider font-medium text-gray-900">
                      Bán chạy
                    </div>
                  )}
                </div>

                {/* Product Details - Aligned left, bold title, light subtitle */}
                <div className="flex flex-col px-1">
                  <h4 className="text-[15px] font-semibold text-gray-900 mb-1 leading-snug">
                    <Link href={`/products/${product.id}`}>
                      {product.name}
                    </Link>
                  </h4>
                  <p className="text-[13px] text-gray-500 mb-2 font-light">
                    {product.category}
                  </p>
                  <span className="text-[14px] text-gray-900 font-medium">
                    {product.price} <span className="text-[11px] text-gray-500 font-normal uppercase ml-1">VNĐ</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="w-full py-20 text-center">
            <p className="text-gray-500 text-lg font-light">Không có sản phẩm nào trong danh mục này.</p>
            <button 
              onClick={() => setActiveCategory("Tất cả sản phẩm")}
              className="mt-6 text-gray-900 border-b border-gray-900 font-medium pb-1"
            >
              Xem tất cả sản phẩm
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
