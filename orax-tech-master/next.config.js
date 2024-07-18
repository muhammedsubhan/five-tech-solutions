/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Disable specific ESLint rules
    ignoreDuringBuilds: true,
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    },
  },
};

module.exports = nextConfig;
