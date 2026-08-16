import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bgarama.github.io',
      },
    ],
  },

  // Redirects for legacy HTML pages
  async redirects() {
    return [
      {
        source: '/who-we-are.html',
        destination: '/who-we-are',
        permanent: true,
      },
      {
        source: '/projects.html',
        destination: '/projects',
        permanent: true,
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true,
      },
      {
        source: '/news.html',
        destination: '/news',
        permanent: true,
      },
      {
        source: '/partners.html',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/staff-login.html',
        destination: '/staff-login',
        permanent: true,
      },
      {
        source: '/baha-digital.html',
        destination: '/baha-digital',
        permanent: true,
      },
      {
        source: '/digital.html',
        destination: '/baha-digital',
        permanent: true,
      },
      {
        source: '/recognition.html',
        destination: '/recognition-and-awards',
        permanent: true,
      },
      {
        source: '/awards.html',
        destination: '/recognition-and-awards',
        permanent: true,
      },
      {
        source: '/recognition-awards.html',
        destination: '/recognition-and-awards',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
