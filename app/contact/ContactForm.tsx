"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Encode data for Netlify Forms
    const encode = (data: any) => {
      return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
    };

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data })
      });
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      alert("Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      name="contact" 
      method="POST" 
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 w-full max-w-xl"
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="subject" value="[Web Nấm Lim Xanh] Có khách hàng liên hệ!" />
      
      <p className="hidden">
        <label>Don't fill this out if you're human: <input name="bot-field" /></label>
      </p>

      {/* Tên */}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Họ và tên <span className="text-red-500">*</span>
        </label>
        <input
          id="name"
          type="text"
          placeholder="Nhập họ tên của bạn"
          className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#62190F]/20 focus:border-[#62190F] transition-all`}
          {...register("name", { required: "Vui lòng nhập họ tên" })}
        />
        {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Địa chỉ Email <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          type="email"
          placeholder="example@gmail.com"
          className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#62190F]/20 focus:border-[#62190F] transition-all`}
          {...register("email", { 
            required: "Vui lòng nhập email",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email không hợp lệ"
            }
          })}
        />
        {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
      </div>

      {/* SĐT */}
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Số điện thoại <span className="text-gray-400 font-normal">(Không bắt buộc)</span>
        </label>
        <input
          id="phone"
          type="tel"
          placeholder="Nhập số điện thoại"
          className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#62190F]/20 focus:border-[#62190F] transition-all"
          {...register("phone")}
        />
      </div>

      {/* Nội dung */}
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Nội dung lời nhắn <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Nhập lời nhắn của bạn..."
          className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-200'} bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#62190F]/20 focus:border-[#62190F] transition-all resize-none`}
          {...register("message", { required: "Vui lòng nhập lời nhắn" })}
        />
        {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-fit px-8 py-3.5 bg-[#62190F] hover:bg-[#4a120b] text-white font-medium rounded-full transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Đang gửi...
          </>
        ) : (
          "Gửi tin nhắn"
        )}
      </button>

      {/* Success Message */}
      {isSuccess && (
        <div className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center gap-3 border border-green-100">
          <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
          <p className="text-sm font-medium">Cảm ơn bạn! Lời nhắn đã được gửi thành công. Chúng tôi sẽ liên hệ lại sớm nhất.</p>
        </div>
      )}
    </form>
  );
}
