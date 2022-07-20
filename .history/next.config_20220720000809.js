/** @type {import('next').NextConfig} */
const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' giscus.app https://www.disqus.com https://www.youtu.be https://www.youtube.com https://www.google.com https://www.tiktok.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' data;
  frame-src giscus.app https://www.disqus.com https://www.youtu.be https://www.youtube.com https://www.google.com https://www.tiktok.com
`;
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: ContentSecurityPolicy.replace(/\n/g, ""),
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
];

const nextConfig = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  async headers() {
    return [
      { source: "/product", headers: securityHeaders },
      { source: "/:path*", headers: securityHeaders },
    ];
  },
  images: {
    loader: "default",
    domains: ["localhost", "madisonopoly-strapi.herokuapp.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
