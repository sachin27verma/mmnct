module.exports = {
  reactStrictMode: false,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["encrypted-tbn0.gstatic.com","emojigraph.org", "firebasestorage.googleapis.com"],
  },
};
