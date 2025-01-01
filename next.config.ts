import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  productionBrowserSourceMaps: true,
  output: "standalone",
};
export default nextConfig;
