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
	experimental: {
		modularizeImports: {
			lodash: {
				transform: 'lodash/{{member}}'
			},
			'@mui/lab': {
				transform: '@mui/lab/{{member}}'
			},
			'@mui/icons-material/?(((\\w*)?/?)*)': {
				transform: '@mui/icons-material/{{ matches.[1] }}/{{member}}'
			}
		}
	}
}

module.exports = nextConfig
