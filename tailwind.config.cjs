const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	mode: 'jit',

	theme: {
		screens: {
			mobile: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			desktop: '1440px',
			'2xl': '1536px'
		},
		extend: {
			colors: {
				'white-cyan': '#ffffff',
				'primary-green': '#fb7413',
				'gray-blue': '#4e5d73',
				'dark-gray-blue': '#323a49',
				'dark-blue': '#1f2632'
			},
			fontFamily: { sans: ['Manrope', ...defaultTheme.fontFamily.sans] }
		}
	},

	plugins: []
};

module.exports = config;
