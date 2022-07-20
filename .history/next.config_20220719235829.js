/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.tiktok.com;
  child-src *.youtube.com *.youtube-nocookie.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self';
`;
const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    loader: "default",
    domains: ["localhost", "madisonopoly-strapi.herokuapp.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
