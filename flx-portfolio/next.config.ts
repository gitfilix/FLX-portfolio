import type { NextConfig } from "next";
// export as static for render.com hosting - for now
// images API does not work with render static output.
const nextConfig: NextConfig = {
  images: { unoptimized: true },
  output: "export",
  reactStrictMode: false
};

export default nextConfig;
