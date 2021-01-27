module.exports = {
	purge: [
		"./public/**/*.html",
		"./src/**/*.html",
		"./src/**/*.ts",
		"./src/**/*.tsx",
		"./src/**/*.js",
		"./src/**/*.jsx"
	],
	theme: {
		extend: {
			fontFamily: {
				display: ['Lobster', 'sans-serif']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
