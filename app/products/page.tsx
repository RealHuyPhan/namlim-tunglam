"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingCart, Star } from "lucide-react";
import ParallaxHero from "@/components/ui/ParallaxHero";

import { PRODUCTS, CATEGORIES } from "./data";

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
      <ParallaxHero
        backgroundImage="/images/HomeBG.jpg"
      >
        <div className="relative z-10 w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col items-start w-full max-w-2xl">
            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-white tracking-tight mb-4 md:mb-6">
              Sản phẩm của Nấm Lim Xanh Trường Lâm
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-normal mb-8 md:mb-10 max-w-xl">
              Lorem, ipsum dolor sit
            </p>
          </div>
        </div>
      </ParallaxHero>

      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20 mt-12 md:mt-16">

        {/* Products Grid Header */}
        <div className="flex flex-col items-center text-center mb-10 mt-6">
          <div className="inline-flex px-4 py-1.5 rounded-full bg-[#c23e38] text-white text-xs md:text-sm font-medium w-fit mb-4">
            Sản phẩm
          </div>
          <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.1] font-bold text-gray-900 tracking-tight mb-6">
            Các sản phẩm về nấm
          </h2>
          <p className="text-gray-900 text-base md:text-lg leading-relaxed font-normal max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit vero distinctio, iste aliquam ipsa ratione repudiandae iure sit aut laboriosam pariatur consequuntur at dicta nulla voluptatem tempora doloremque perspiciatis quibusdam?
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
              <Link
                href={`/products/${product.id}`}
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
                <h4 className="text-[15px] font-semibold text-gray-900 mb-1 leading-snug group-hover:text-[#62190F] transition-colors">
                  {product.name} <span className="font-light text-gray-500 italic ml-1">, Ganoderma lucidum</span>
                </h4>
              </Link>
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
