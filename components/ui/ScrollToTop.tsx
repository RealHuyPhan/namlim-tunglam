"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Cuộn lên đầu trang"
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[90] p-3 rounded-full bg-[#62190F] text-white shadow-lg shadow-black/20 hover:bg-[#4a120b] hover:shadow-xl hover:-translate-y-1 transition-all group focus:outline-none"
        >
          <ArrowUp className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce" />
          
          {/* Tooltip */}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-gray-900 text-white text-xs font-medium py-1.5 px-3 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Lên đầu trang
            {/* Tooltip triangle */}
            <span className="absolute -bottom-[4px] left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-gray-900"></span>
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
