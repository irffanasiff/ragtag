/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.etimg.com',
      'cdn-icons-png.flaticon.com',
      'm.media-amazon.com',
      'upload.wikimedia.org',
      'http://logok.org',
      'logok.org',
      'https://s3-alpha-sig.figma.com',
      'https://images.unsplash.com',
      'images.unsplash.com',
    ],
  },
  reactStrictMode: true,
  concurrentFeatures: true,
  swcMinify: true,
};

module.exports = nextConfig;
