/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        // hostname: '192.168.29.91:5007',
        hostname: 'biz-idea-backend.onrender.com',
        // port: '5007',
        pathname: '/**',
      },
    ],
  },  
};

export default nextConfig; // Check karein export sahi hai ya nahi