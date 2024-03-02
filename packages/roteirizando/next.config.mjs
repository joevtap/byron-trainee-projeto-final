/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/itinerary",
        destination: "/",
        permanent: true,
      },
      {
        source: "/newsletter/unsubscribe",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
