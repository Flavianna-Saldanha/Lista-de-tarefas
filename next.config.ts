import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // ⚠ Isso faz com que erros de lint NÃO quebrem a build
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
