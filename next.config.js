/** @type {import('next').NextConfig} */
const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "https://magenta-malabi-98aec4.netlify.app/:path*",
  //     },
  //   ];
  // },
  reactStrictMode: true,
  env: {
    API_URL: "https://magenta-malabi-98aec4.netlify.app/api",
  },
};

module.exports = nextConfig;
