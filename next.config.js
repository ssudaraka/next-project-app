/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["bcrypt"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to succesfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  eslint: {
    // Warning: This allows production builds to succesfully complete
    // even if your project as ESLint errors.
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
