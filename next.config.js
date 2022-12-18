/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	env: {
		APP_URL: process.env.REACT_APP_API
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '**'
			}
		]
	}
}

module.exports = nextConfig
