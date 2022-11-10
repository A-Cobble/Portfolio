/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.m4a$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
      },
    ],
    });
    return config;
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
