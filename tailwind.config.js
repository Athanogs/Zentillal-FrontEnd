/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	darkMode: ['class', '[data-theme-version="dark"]'],
	content: [
		"./src/**/*.{html,js}",
	],
	theme: {
		
		extend: {
			keyframes: {
				myanimation: {
				  '0%': { width: '0' },
				},
				dzerror: {
					'0%': { transform: 'skew(3deg)' },
					'10%': { transform: 'skew(2deg)' },
					'20%': { transform: 'skew(3deg)' },
					'30%': { transform: 'skew(-2deg)' },
					'40%': { transform: 'skew(-1deg)' },
					'50%': { transform: 'skew(-1deg)' },
					'60%': { transform: 'skew(-1deg)' },
					'70%': { transform: 'skew(-3deg)' },
					'80%': { transform: 'skew(1deg)' },
					'90%': { transform: 'skew(-1deg)' },
				},
			},
			animation: {
				'myanimation': 'myanimation 5s',
				'dzerror': 'dzerror 1s infinite linear alternate-reverse',
			},
		},
		
		plugins: [
			
		],
		colors: {
			// default
			'white' : 'var(--white)',
			'black': '#000000',
			'muted': '#888888bf',
			'grey': '#9F93C0',
			'body-color': 'var(--bs-body-color)',
			'body-light': '#2c2c2c1a',
			'chat': '#f5f5f5',
			'transparent': '#00000000',
			'red': '#ff0000',
			'purple': '#BB6BD9',
			'purple-light': '#bb6bd91a',
			'orange': '#ff9900',
			'gold': '#ffd700',
			'badge-secondary': 'var(--badge-secondary)',
			'invalid': 'var(--bs-form-invalid-color)',
			'highlight': '#fffee2',
			'b-color': 'var(--border-color)',
			'bs-card-color': 'var(--bs-card-color)',
			'ph-color': 'var(--placeholder-color)',
			    
			// primary
			'primary': 'var(--primary)',
			'primary-dark': 'var(--primary-dark)',
			'primary-light': 'var(--rgba-primary-1)',
			'primary-lighter': 'var(--primary-lighter)',
			'primary-light-3': 'var(--rgba-primary-3)',
			'primary-light-8': 'var(--rgba-primary-8)',
			'hover-primary': 'var(--primary-hover)',
			'link-hover': 'var(--bs-link-hover-color)',

			// secondary
			'secondary': 'var(--secondary)',
			'secondary-light': 'var(--rgba-secondary-1)',

			// badge
			'danger' : 'var(--danger)',
			'info' : '#58bad7',
			'info-hover' : '#71c4dd',
			'info-light' : 'var(--info-light)',
			'info-light-1' : '#e8f6f9',
			'warning' : '#FF9F00',
			'warning-light' : 'var(--warning-light)',
			'danger-light' : 'var(--danger-light)',
			'danger-hover' : '#ff7676',
			'success' : 'var(--success)',
			'success-light' : 'var(--success-light)',
			'success-hover' : '#58d18b',
			'dark' : '#6e6e6e',
			'dark-hover' : '#888888',
			'd-light' : '#eeeeee',
			'd-light-2' : '#dfdfdf',
			'bs-dropdown-color' : 'var(--bs-dropdown-color)',

			// Social icons
			'facebook' : 'var(--facebook)',
			'whatsapp' : 'var(--whatsapp)',
			'linkedin' : 'var(--linkedin)',
			'instagram' : 'var(--instagram)',
			'youtube' : 'var(--youtube)',
			'google-plus' : 'var(--google-plus)',
			'twitter' : 'var(--twitter)',
			'pinterest' : 'var(--pinterest)',
			'google' : 'var(--google)',
			'snapchat' : 'var(--snapchat)',
			'google-plus' : 'var(--google-plus)',
			'tumblr' : 'var(--tumblr)',
			'reddit' : 'var(--reddit)',
			'spotify' : 'var(--spotify)',
			'yahoo' : 'var(--yahoo)',
			'dribbble' : 'var(--dribbble)',
			'quora' : 'var(--quora)',
			'vimeo' : 'var(--vimeo)',
			'skype' : 'var(--skype)',
		},
		screens: {
			'sm': '576px',
			// => @media (min-width: 576px) { ... }
	  
			'md': '768px',
			// => @media (min-width: 768px) { ... }
			
			'lg': '992px',
			// => @media (min-width: 992px) { ... }

			'xxl': '1025px',
			// => @media (min-width: 1025) { ... }
			
			'xl': '1200px',
			// => @media (min-width: 1200px) { ... }
			
			'2xl': '1449px',
			// => @media (min-width: 1480px) { ... }


			'max-sm': {'max': '35.9375rem'},
			// => @media (max-width: 35.9375rem) (576px) { ... }

			'max-md': {'max': '47.9375rem'},
			// => @media (max-width: 47.9375rem) (767px) { ... }

			'max-lg': {'max': '61.9375rem'},
			// => @media (max-width: 61.9375rem) (991px) { ... }

			'max-xl': {'max': '1200px'},
			// => @media (max-width: 74.9375rem) { ... }

			'max-2xl': {'max': '1480px'},
			// => @media (max-width: 74.9375rem) { ... }
		}
	}
	
	
}

