/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    // Allow production builds to successfully complete even if
    // ESLint errors are present.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
