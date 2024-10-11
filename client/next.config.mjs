/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static.vecteezy.com',
          pathname: '/**', // Matches all paths
        },
        {
            protocol: 'https',
            hostname: 'img.vitkac.com',
        pathname: '/uploads/**',
        }
      ],
    },
  };
  
  export default nextConfig;
  
