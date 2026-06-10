/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		screens: {
			xs: '480px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
				mono: ['"JetBrains Mono"', 'monospace'],
			},
			colors: {
				surface: {
					DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
					raised: 'rgb(var(--color-surface-raised) / <alpha-value>)',
					border: 'rgb(var(--color-surface-border) / <alpha-value>)',
				},
				primary: 'rgb(var(--color-text-primary) / <alpha-value>)',
				secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)',
				muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
				accent: {
					DEFAULT: '#6366f1',
					light: '#6366f1',
					dark: '#4f46e5',
					glow: 'rgba(99, 102, 241, 0.4)',
				},
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-out forwards',
				'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
				'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
				'pulse-soft': 'pulseSoft 2.5s ease-in-out infinite',
				'gradient-shift': 'gradientShift 8s ease infinite',
				float: 'float 6s ease-in-out infinite',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(24px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				slideInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				pulseSoft: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' },
				},
				gradientShift: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-8px)' },
				},
			},
			backgroundImage: {
				'hero-gradient':
					'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99, 102, 241, 0.18), transparent)',
				'hero-gradient-dark':
					'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99, 102, 241, 0.28), transparent)',
			},
		},
	},
	plugins: [],
};
