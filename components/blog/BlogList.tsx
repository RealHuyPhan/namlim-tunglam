"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar, Tag } from "lucide-react";
import { BLOG_POSTS, CATEGORIES, POPULAR_TAGS } from "@/app/blog/data";

export default function BlogList() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  const [visibleCount, setVisibleCount] = useState(5);

  const filteredPosts = activeCategory === "Tất cả"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(5);
  };

  return (
    <div className="flex flex-col">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 border-b border-gray-200 pb-4">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === cat
              ? "bg-[#62190F] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-[#62190F] hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column: Post List */}
        <div className="w-full lg:w-8/12 flex flex-col">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1.5 h-6 bg-[#62190F]" />
            <h2 className="text-2xl font-bold text-[#3e1610]">
              {activeCategory === "Tất cả" ? "Bài viết mới nhất" : activeCategory}
            </h2>
          </div>

          <div className="w-full h-[1px] bg-gray-200 mb-8" />

          <div className="flex flex-col gap-8">
            {filteredPosts.slice(0, visibleCount).map(post => (
              <div key={post.id} className="flex flex-col md:flex-row gap-6 py-6 border-b border-gray-100 last:border-b-0 group cursor-pointer">
                <div className="w-full md:w-5/12 relative aspect-[4/3] md:aspect-auto md:min-h-[200px] rounded-xl overflow-hidden shrink-0">
                  <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="w-full md:w-7/12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <span className="text-[#a97b4f] font-medium">{post.category}</span>
                  </div>
                  <h3 className="text-xl md:text-[22px] font-bold text-[#b48650] mb-3 group-hover:text-[#8c643e] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-2 mb-4">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs text-[#a97b4f] bg-[#f5f0ea] px-2 py-1 rounded font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {filteredPosts.length === 0 && (
              <p className="text-gray-500 italic py-8 text-center">Đang cập nhật bài viết...</p>
            )}

            {filteredPosts.length > visibleCount && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleCount(prev => prev + 5)}
                  className="px-6 py-2.5 border border-gray-300 rounded-full text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                >
                  Xem thêm bài viết
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Sidebar */}
        <div className="w-full lg:w-4/12 sticky top-24">
          <div className="bg-[#f5f0ea] rounded-2xl p-6 md:p-8">
            <div className="flex items-center gap-3 mb-6">
              <Tag className="w-5 h-5 text-[#62190F]" />
              <h3 className="text-xl font-bold text-[#3e1610]">Chủ đề phổ biến</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {POPULAR_TAGS.map(tag => (
                <span key={tag} className="bg-white text-gray-600 text-sm px-4 py-2 rounded-full shadow-sm cursor-pointer hover:text-[#62190F] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
