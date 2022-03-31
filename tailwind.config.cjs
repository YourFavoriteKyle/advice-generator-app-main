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
		letterSpacing: {
			wide: '0.1em',
			wider: '0.15em',
			widest: '0.2em',
			'wide-xl': '0.25em'
		},
		extend: {
			colors: {
				primary: {
					cyan: '#CEE3E8',
					green: '#53FFAB'
				},
				secondary: {
					'gray-blue': '#313A49',
					'dark-gray-blue': 'hsl(217, 19%, 24%)',
					'dark-blue': '#1E2430'
				}
			},
			boxShadow: {
				glow: '0 0 40px #53FFAB'
			},
			fontFamily: { sans: ['Manrope', ...defaultTheme.fontFamily.sans] }
		}
	},

	plugins: []
};

module.exports = config;
