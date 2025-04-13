import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "scontent-yyz1-1.xx.fbcdn.net"
    ],
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehold.co" },
    ],
  }
};

export default nextConfig;
