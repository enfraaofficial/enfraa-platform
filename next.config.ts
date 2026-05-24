import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  // Avoid issues with double slashes if basePath is empty
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
};

export default nextConfig;
