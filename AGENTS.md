<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Design and Development Rules for Nấm Lim Xanh Trường Lâm

The following are the general rules extracted from the overall design style and source code of the homepage. Any newly created components or pages in the future must strictly adhere to these regulations to ensure consistency and maintain the modern, premium feel of the website.

## 1. Layout Structure
- **Section & Container**: Every major section must use a `<section>` tag with full width and large vertical padding to create breathing room (whitespace): `className="w-full py-20 lg:py-32 overflow-hidden"`.
- **Centered Content**: Always wrap the content inside a `div` that limits the maximum width and adds horizontal padding: `className="w-full max-w-[1700px] mx-auto px-6 md:px-12 lg:px-20"`.
- **Grid/Flex System**: Use Flexbox (`flex flex-col lg:flex-row`) or CSS Grid (`grid grid-cols-1 md:grid-cols-12`) with large gaps (`gap-12 lg:gap-16`) between elements to create seamless transitions and readability across all devices.

## 2. Color Palette
- **Background**: Prioritize white backgrounds (`bg-white`) or very subtle, delicate gradients (e.g., `bg-gradient-to-l from-[#e6f0e6] to-transparent`) for section backgrounds.
- **Brand Colors (Deep Red-Brown)**: Deep red-brown colors represent herbs and the reishi mushroom. Use them for footers, buttons, or emphasis areas:
  - Buttons: `bg-[#62190F] hover:bg-[#4a120b] text-white`
  - Footer/Dark areas: `bg-[#3e1610]`, icon background `bg-[#52221b]`
  - Text on dark backgrounds: `text-[#f2e7dd]` or `text-[#d8c3b5]`
- **Typography Colors**: 
  - Main Headings: Black or very dark gray `text-gray-900`.
  - Secondary Text/Paragraphs: Light gray `text-gray-500` or `text-gray-600`.

## 3. Typography
- **Section Title Structure**: Sections usually start with a small subtitle accompanied by a horizontal dash, followed by a very large main heading:
  ```tsx
  <div className="flex items-center gap-4 mb-6">
    <div className="w-12 h-[1px] bg-gray-500" />
    <span className="text-gray-600 font-medium tracking-wide">Subtitle</span>
  </div>
  <h2 className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] leading-[1.1] font-medium text-gray-900">
    Main Section Heading
  </h2>
  ```
- **Font Weights**: Typically use `font-medium` for headings and `font-light` for long descriptive paragraphs. Use generous line spacing (`leading-relaxed`) for paragraphs to enhance readability.

## 4. Images & Effects
- **Image Component**: Always use Next.js's `Image` component (`next/image`) with the `fill` property and `className="object-cover"`, placed inside a wrapper `div` with `position: relative`.
- **Border Radius**: Images or Cards must have soft rounded corners, usually `rounded-xl` or `rounded-2xl`.
- **Image Hover Effects**: Implement smooth, subtle zoom-in effects on prominent images: `hover:scale-105 transition-transform duration-700`.
- **Glassmorphism / Liquid Glass Effect**: For text blocks overlapping images, use a frosted glass effect (combining transparency and background blur) instead of a solid background color: 
  `className="bg-white/60 backdrop-blur-md border border-white/40 shadow-lg relative z-10"`

## 5. Component Structure
- React/Next.js Code: Write as Functional Components. If state (`useState`) or events (`onClick`) are used, you must add `"use client";` at the top of the file.
- Always use icons from the `lucide-react` library.

## 6. User Experience (UX) & Responsive Design
- Mobile-first approach: Default CSS properties prioritize small screens, using `md:` and `lg:` prefixes to adjust the layout for tablets and desktops (e.g., `flex-col lg:flex-row`).
- Prevent text from sticking too close to the edges. Interactive elements (accordions, buttons) need smooth transitions (`transition-all duration-300 ease-in-out`).
