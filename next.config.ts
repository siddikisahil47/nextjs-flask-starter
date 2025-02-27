import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Enable if you want to try the React compiler
    // reactCompiler: true,
  },
  rewrites: async () => {
    return [
      {
        source: '/api/:path*',
        destination:
          process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5328/api/:path*'
            : '/api/',
      },
    ]
  },
}

export default nextConfig
