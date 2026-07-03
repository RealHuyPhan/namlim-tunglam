"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";

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
    <main className="w-full flex flex-col min-h-screen bg-white pb-24">

      {/* Hero Section */}
      <section className="relative w-full h-[430px] flex items-center pt-24 md:pt-32 p-[10px]">
        {/* Background Image */}
        <div className="absolute inset-[10px] z-0 bg-[#252425] rounded-[16px] overflow-hidden">
          <Image
            src="/images/HomeBG.jpg"
            alt="Products Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col items-start w-full max-w-2xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-4 md:mb-6">
              Our Products
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal mb-8 md:mb-10 max-w-xl">
              Compliance With the Strictest Standards
            </p>
          </div>
        </div>
      </section>

      <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 lg:px-12 mt-12 md:mt-16">

        {/* Products Grid Header */}
        <div className="flex flex-col items-center text-center mb-10 mt-6">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-4">
            Current Species
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-gray-900 tracking-tight mb-6">
            Our Mushrooms
          </h2>
          <p className="text-gray-900 text-base md:text-lg leading-relaxed font-normal max-w-3xl">
            Premium functional mushroom powders for nutraceuticals and superfoods—organically grown in Canada with Certificates of Analysis for verified quality. Available exclusively in bulk quantities.
          </p>
        </div>

        {/* Categories Horizontal List */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors border ${activeCategory === category
                  ? "bg-gray-900 text-white border-gray-900"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col cursor-pointer items-center text-center"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white mb-6">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Product Details */}
                <h4 className="text-[15px] font-semibold text-gray-900 mb-1 leading-snug">
                  <Link href={`/products/${product.id}`}>
                    {product.name} <span className="font-light text-gray-500 italic ml-1">, Ganoderma lucidum</span>
                  </Link>
                </h4>
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
