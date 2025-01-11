import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // Enable Partial Pre Rendering
    // The 'incremental' value allows you to adopt PPR for specific routes.
    ppr: "incremental",
  },
};

export default nextConfig;
