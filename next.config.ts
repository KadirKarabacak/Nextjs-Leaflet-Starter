import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  //! Disabling React Strict Mode to avoid conflicts with the Map component
  reactStrictMode: false,
};

export default nextConfig;
