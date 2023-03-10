/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
	moduleNameMapper: {
		'\\.(css|scss)$': 'identity-obj-proxy',
	},
	transform: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/fileTransformer.js',
		'^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx',
	},
	transformIgnorePatterns: [
		'/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$',
	],
};
