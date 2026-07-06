"use client";

// import { Facebook, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function FloatingSocial() {
  return (
    <div className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4">
      {/* Zalo Button (using MessageCircle as placeholder for Zalo) */}
      <Link
        href="#"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#0068FF] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(0,104,255,0.4)] transition-all duration-300 relative group"
        aria-label="Zalo"
      >
        {/* <MessageCircle className="w-6 h-6 md:w-7 md:h-7" /> */}
        {/* Tooltip */}
        <span className="absolute right-[calc(100%+12px)] bg-white text-gray-800 border border-gray-100 shadow-lg px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap">
          Chat Zalo
        </span>
      </Link>

      {/* Facebook Button */}
      <Link
        href="#"
        className="w-12 h-12 md:w-14 md:h-14 bg-[#1877F2] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 hover:shadow-[0_8px_30px_rgba(24,119,242,0.4)] transition-all duration-300 relative group"
        aria-label="Facebook"
      >
        {/* <Facebook className="w-6 h-6 md:w-7 md:h-7 fill-white" /> */}
        {/* Tooltip */}
        <span className="absolute right-[calc(100%+12px)] bg-white text-gray-800 border border-gray-100 shadow-lg px-3 py-1.5 rounded-lg text-sm font-medium opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 pointer-events-none transition-all duration-300 whitespace-nowrap">
          Messenger
        </span>
      </Link>
    </div>
  );
}
