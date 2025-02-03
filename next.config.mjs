/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icons.llamao.fi",
        port: "",
      },
    ],
  },
};

export default nextConfig;
