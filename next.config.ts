import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  images: {
    domains: ['lolstatic-a.akamaihd.net', 'ddragon.leagueoflegends.com', 'raw.communitydragon.org'],
  },
};

export default withNextIntl(nextConfig);
