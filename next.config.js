/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
   images: {
    domains: ['lh3.googleusercontent.com'], // Add the hostname of the external source here
  },
};

module.exports = nextConfig;
