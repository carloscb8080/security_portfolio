/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "media.graphassets.com",
        protocol: "https",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig;
