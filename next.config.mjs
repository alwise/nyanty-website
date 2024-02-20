/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.jamjargh.com',
            },
            {
                hostname: 'images.unsplash.com',
            },
            {
                hostname: 'plus.unsplash.com'
            }
        ]
    }
};

export default nextConfig;
