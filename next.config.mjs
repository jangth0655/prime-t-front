/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: ["@svgr/webpack"],
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/v1/:path*",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/:path*`,
        },
        {
          source: "/api/v1/dev/:path*",
          destination: `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/dev/:path*`,
        },
      ],
    };
  },
};

export default nextConfig;
