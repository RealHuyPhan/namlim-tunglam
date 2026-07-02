"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";

export default function CertificateGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const certificates = [
    { id: 1, src: "/images/CamKet.webp", alt: "Chứng nhận an toàn thực phẩm" },
    { id: 2, src: "/images/CamKet.webp", alt: "Giấy phép kinh doanh" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto w-full px-4 md:px-0">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="group relative w-full aspect-[3/4] bg-white rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 border border-gray-100 overflow-hidden cursor-pointer"
            onClick={() => setSelectedImage(cert.src)}
          >
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#faf6f5] to-white group-hover:opacity-50 transition-opacity duration-500 z-0" />

            <div className="relative w-full h-full  flex items-center justify-center z-10">
              <div className="relative w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                <Image src={cert.src} alt={cert.alt} fill className="object-contain" />
              </div>
            </div>

            {/* Hover overlay with zoom icon */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                <ZoomIn className="w-6 h-6 text-[#62190F]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-10 transition-all"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all z-50"
            onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
          >
            <X className="w-8 h-8" />
          </button>

          <div
            className="relative w-full max-w-4xl aspect-[3/4] md:aspect-auto md:h-[85vh] bg-transparent rounded-xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image src={selectedImage} alt="Certificate Detail" fill className="object-contain bg-white rounded-xl" />
          </div>
        </div>
      )}
    </>
  );
}
