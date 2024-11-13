/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: 'build',
    exportTrailingSlash: true,
    trailingSlash: true,
    exportPathMap: async function (
  
    ) {
      return {
        '/': { page: '/' },
        '/about-us': { page: '/about-us' },
        '/contact-us': { page: '/contact-us' },
        '/_not-found': { page: '/_not-found' },  
      }
    }
  };
  
  export default nextConfig;
  