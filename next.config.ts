import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
};

export default nextConfig;
