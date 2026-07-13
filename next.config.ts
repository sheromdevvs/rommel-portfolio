import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so a stray lockfile elsewhere doesn't confuse Next.
  turbopack: { root: import.meta.dirname },
};

export default nextConfig;
