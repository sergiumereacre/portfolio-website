import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config = {
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
	theme: {
		extend: {
			colors: {
				background: "#0A0908",
				text: "#F9F9FB",
				primary: "#FFE900",
				contrast: "#12253B",
				accent: "#5555C3",
				card: "#111111",
				cardAccent: "#171717",
			},
			fontFamily: {
				sans: ["var(--font-inter)"],
				mono: ["var(--font-dancingScript)"],
				poppins: "poppins",
			},
			backgroundPosition: {
				"pos-0": "0% 0%",
				"pos-100": "100% 100%",
			},
			keyframes: {
				animatedgradient: {
					"0%": { backgroundPosition: "0% 50%" },
					"50%": { backgroundPosition: "100% 50%" },
					"100%": { backgroundPosition: "0% 50%" },
				},
				pulsate: {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.25)" },
				},
			},
			backgroundSize: {
				"300%": "300%",
			},
			animation: {
				gradient: "animatedgradient 6s ease infinite alternate",
				pulsate: "pulsate 1.5s ease-in-out infinite",
			},
		},
	},
	darkMode: "class",
	plugins: [nextui()],
} satisfies Config;

export default config;
