const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

/** @type {import('next').NextConfig} */
const nextConfig = {
async prepare() {
    if (process.env.NODE_ENV === 'development') {
    await setupDevPlatform();
    }
}
};

module.exports = nextConfig;
