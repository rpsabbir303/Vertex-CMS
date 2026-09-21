import os from "node:os";
import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    /** Inlined at build time — used client-side to block billing design preview on production deploys. */
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV ?? "",
  },
  async redirects() {
    return [
      {
        source: "/Integrations",
        destination: "/integrations",
        permanent: true,
      },
      {
        source: "/Integrations/:slug*",
        destination: "/integrations/:slug*",
        permanent: true,
      },
      {
        source: "/resources/help-center",
        destination: "/resources/help",
        permanent: true,
      },
      {
        source: "/resources/help-center/:slug*",
        destination: "/resources/help/:slug*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Only customize webpack when explicitly using `npm run dev:webpack`.
  ...(process.env.NEXT_USE_WEBPACK === "1"
    ? {
        webpack: (config, { dev }) => {
          if (dev) {
            config.cache = {
              type: "filesystem",
              cacheDirectory: path.join(os.tmpdir(), "summit-cms-next-webpack-cache"),
              buildDependencies: {
                config: [path.join(process.cwd(), "next.config.mjs")],
              },
            };
          }
          return config;
        },
      }
    : {}),
};

export default nextConfig;
