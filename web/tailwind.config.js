module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			maxWidth: {
				xs: "300px",
				xxs: "250px",
			},
			fontSize: {
				xs: ["0.8rem", {lineHeight: "1.6rem"}],
				sm: ["1rem", {lineHeight: "2.0rem"}],
				base: ["1.2rem", {lineHeight: "2rem"}],
				lg: ["1.4rem", {lineHeight: "2.1rem"}],
				xl: ["1.6rem", {lineHeight: "2.4rem"}],
				"2xl": ["1.85rem", {lineHeight: "2.75rem"}],
				"3xl": ["2.25rem", {lineHeight: "3.3rem"}],
				"4xl": ["2.8rem", {lineHeight: "4.0rem"}],
				"5xl": ["3.25rem", {lineHeight: "4.3rem"}],
				"6xl": ["3.85rem", {lineHeight: "4.5rem"}],
				"7xl": ["4.2rem", {lineHeight: "1"}],
				"8xl": ["5.6rem", {lineHeight: "1"}],
				"9xl": ["6.8rem", {lineHeight: "1"}],
			},
			lineClamp: {
				7: "7",
				8: "8",
				9: "9",
				10: "10",
			},
		},
		fontFamily: {
			notoSans: ["Noto Sans KR"],
			SpaceGrotesk: ['"Space Grotesk"'],
			Gothic: ['"Gothic A1"'],
			Sunflower: ['"Sunflower"'], // Ensure fonts with spaces have " " surrounding it.
		},
	},

	plugins: [require("@tailwindcss/line-clamp", "@tailwindcss/aspect-ratio")],
};
