import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: process.env.NODE_ENV === "production" ? "/my-app" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/my-app/" : "",
  /* config options here */
};

export default nextConfig;
