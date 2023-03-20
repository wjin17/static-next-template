/** @type {import('next').NextConfig} */
const isStatic = process.env.BUILD_STAGE == "static";

const baseConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

const nextConfig = isStatic ? { ...baseConfig, output: "export" } : baseConfig;

module.exports = nextConfig;
