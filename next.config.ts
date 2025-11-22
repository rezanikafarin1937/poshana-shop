import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

// next.config.js
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,  // برای فعال‌سازی App Router
  },
};


export default nextConfig;
