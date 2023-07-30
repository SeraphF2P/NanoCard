import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export const MyPlugin = plugin(
	({ addBase, addUtilities }) => {
		addBase({
			"*": {
				" @apply border-border": {},
			},
			body: {
				"font-feature-settings": '"rlig" 1, "calt" 1',
			},
		});
		addUtilities({
			".remove-scroll-bar": {
				"scroll-behavior": "smooth",
				"-ms-overflow-style": "none",
				"scrollbar-width": "none",
			},
			".remove-scroll-bar::-webkit-scrollbar": {
				display: "none",
			},
		});
	},
	{
		darkMode: ["class"],
		theme: {
			container: {
				center: true,
				padding: "2rem",
				screens: {
					"2xl": "1400px",
				},
			},
			extend: {
				screens: {
					mid: "810px",
				},
			},
		},
	}
);
