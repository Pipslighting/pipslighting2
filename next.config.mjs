/**
 * Next.js configuration for Pip’s Christmas Lights.
 *
 * We enable the `appDir` experimental flag to opt in to the
 * App Router. Remote image domains are unrestricted so that the
 * user can link in their own hosted photos if desired.
 */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig
