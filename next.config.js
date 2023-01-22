/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '**'
			}
		],
		domains: ['195.38.164.86:4200']
	},
	experimental: {}
}

module.exports = nextConfig
