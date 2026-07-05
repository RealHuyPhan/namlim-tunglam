"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
  { name: "Giới thiệu", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Liên hệ", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Color classes
  const textColorClass = "text-white";
  const buttonBgClass = "bg-white/10 text-white hover:bg-white/20 border border-white/20";
  const hamburgerColorClass = isMobileMenuOpen ? "bg-gray-900" : "bg-white";

  return (
    <>

      <header
        className="absolute top-[10px] left-[10px] right-[10px] z-50 py-6"
      >
        <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 relative z-50">
              <div className="relative w-16 md:w-20 h-auto flex items-center">
                <Image
                  src="/images/LogoNoText.png"
                  alt="Logo Trường Lâm"
                  width={100}
                  height={100}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-12">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className={`text-sm lg:text-base transition-colors hover:opacity-70 relative ${textColorClass}`}
                >
                  {link.name}
                  {pathname === link.path && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white"
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop Button */}
            <div className="hidden md:flex items-center z-50">
              <Link
                href="/contact"
                className={`px-6 py-2.5 rounded-lg flex items-center gap-1.5 transition-all font-medium text-sm shadow-sm ${buttonBgClass}`}
              >
                Liên hệ ngay
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Toggle (Animated Hamburger) */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-[60] relative gap-1.5 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                className={`w-6 h-[2px] block transition-colors duration-300 ${hamburgerColorClass}`}
              />
              <motion.span
                animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
                className={`w-6 h-[2px] block transition-colors duration-300 ${hamburgerColorClass}`}
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                className={`w-6 h-[2px] block transition-colors duration-300 ${hamburgerColorClass}`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/60 z-40 md:hidden"
              />
              {/* Sidebar Menu */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-50 md:hidden flex flex-col pt-24 px-6 pb-8 shadow-2xl overflow-y-auto"
              >
                <nav className="flex flex-col gap-6 items-start">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl font-medium w-full ${pathname === link.path
                        ? "text-gray-900 font-bold"
                        : "text-gray-600 hover:text-gray-900 transition-colors"
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                  <div className="w-full h-px bg-gray-200 my-4" />
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="bg-gray-900 text-white px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 w-full transition-colors hover:bg-gray-800 font-medium text-lg"
                  >
                    Get in Touch
                    <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
