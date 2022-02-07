const colors = require('tailwindcss/colors')
module.exports = {
	purge: [
		"./public/**/*.html",
		"./src/**/*.html",
		"./src/**/*.ts",
		"./src/**/*.tsx",
		"./src/**/*.js",
		"./src/**/*.jsx"
	],
	darkMode: 'media',
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
