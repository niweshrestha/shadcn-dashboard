import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    // domains: [
    //     'i.ytimg.com',
    //     'administration.altitudeairnepal.com'
    // ],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost', //local
        port: '3000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', //local
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
