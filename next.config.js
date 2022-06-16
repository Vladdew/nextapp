/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://nextapp-pink-one.vercel.app/:path*",
      },
    ];
  },
  reactStrictMode: true,
  env: {
    // API_URL: "http://localhost:3000/api/",
    API_URL: "https://nextapp-pink-one.vercel.app/api/",
  },
};

module.exports = nextConfig;
