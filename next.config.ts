import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/my-app',
  assetPrefix: '/my-app/',
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  /* config options here */
};

export default nextConfig;
