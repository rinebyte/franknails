import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  basePath: "/product/mood",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'franknails.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
