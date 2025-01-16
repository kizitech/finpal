/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            colors: {
                primary: "#65A30D",
                secondary: {
                    DEFAULT: "#FF9C01",
                    100: "#FF9001",
                    200: "#FF8E01",
                },
                black: {
                    DEFAULT: "#000",
                    100: "#1E1E2D",
                    200: "#232533",
                },
                gray: {
                    100: "#CDCDE0",
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