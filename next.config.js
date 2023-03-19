/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";

const baseConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

const nextConfig = isDev ? baseConfig : { ...baseConfig, output: "exports" };

module.exports = nextConfig;
