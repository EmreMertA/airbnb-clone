/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'avatar.githubusercontent.com',
      'avatars.githubusercontent.com',
      'github.com',
      'raw.githubusercontent.com',
      'lh3.googleusercontent.com',
      'res.cloudinary.com',
      "example.com"
    ],
  },
};

module.exports = nextConfig;
