/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                brand: {
                    5: "#F7FEE7",
                    60: "#65A30D",
                    90: "#365314",
                },
                black: {
                    DEFAULT: "#000",
                    100: "#1E1E2D",
                    200: "#232533",
                },
                gray: {
                    0: "#FFFFFF",
                    5: "#FAFAF9",
                    10: "#F5F5F4",
                    20: "#E7E5E4",
                    30: "#D4D4D4",
                    40: "#A8A29E",
                    50: "#78716C",
                    60: "#57534E",
                    70: "#44403C",
                    80: "#292524",
                    90: "#1C1917",
                },
            },
            fontFamily: {
                dsthin: ["DMSans-Thin", "sans-serif"],
                dsextralight: ["DMSans-ExtraLight", "sans-serif"],
                dslight: ["DMSans-Light", "sans-serif"],
                dsregular: ["DMSans-Regular", "sans-serif"],
                dsmedium: ["DMSans-Medium", "sans-serif"],
                dssemibold: ["DMSans-SemiBold", "sans-serif"],
                dsbold: ["DMSans-Bold", "sans-serif"],
                dsextrabold: ["DMSans-ExtraBold", "sans-serif"],
                dsblack: ["DMSans-Black", "sans-serif"],
            },
        },
    },
    plugins: [],
}