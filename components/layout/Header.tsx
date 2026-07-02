"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Trang chủ", path: "/" },
  { name: "Sản phẩm", path: "/products" },
  { name: "Giới thiệu", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Liên hệ", path: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Default light top page (dark text will show when scrolled or not on light top page)
  const isLightTopPage = pathname !== "/";
  const shouldShowDarkText = isScrolled || isLightTopPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const textColorClass = shouldShowDarkText ? "text-gray-900" : "text-white";
  const buttonBgClass = shouldShowDarkText
    ? "bg-gray-900 text-white hover:bg-gray-800"
    : "bg-white text-gray-900 hover:bg-gray-100";
  const hamburgerColorClass = isMobileMenuOpen
    ? "bg-gray-900"
    : (shouldShowDarkText ? "bg-gray-900" : "bg-white");

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
        : "bg-transparent py-6"
        }`}
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <span
              className={`flex flex-col text-xl md:text-2xl font-medium tracking-wide transition-colors leading-tight ${isMobileMenuOpen ? "text-gray-900" : textColorClass
                }`}
            >
              Logo
            </span>
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
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${shouldShowDarkText ? "bg-gray-900" : "bg-white"}`}
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
  );
}
