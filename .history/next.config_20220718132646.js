/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
