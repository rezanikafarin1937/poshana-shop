
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;





// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactCompiler: true,

//   reactStrictMode: true,

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   // فعال‌سازی خروجی استاتیک
//   output: "export",

//   // مسیر مخزن GitHub Pages
//   // basePath: "/poshana-shop",

//   // غیرفعال کردن بهینه‌سازی تصویری سمت سرور
//   images: {
//     unoptimized: true,
//   },

//   // تولید مسیرهای مناسب برای GitHub Pages
//   trailingSlash: true,
// };

// export default nextConfig;








// // import type { NextConfig } from "next";

// // const nextConfig: NextConfig = {
// //   reactCompiler: true,

// //   typescript: {
// //     ignoreBuildErrors: true,
// //   },

// //   reactStrictMode: true,
// // };

// // export default nextConfig;

