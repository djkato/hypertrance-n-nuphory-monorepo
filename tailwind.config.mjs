const plugin = require("tailwindcss/plugin")
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        fontFamily: {
            sans: ["'Source Sans Pro'", "Roboto", "Arial", "sans-serif"],
            serif: ["'Libre Caslon Text'", "Roboto slab", "'Times New Roman'", "serif"],
            fancy: ["'Amboqia Boriango'", "Roboto", "Arial", "sans-serif"]
        },
        fontSize: {
            xs: "0.75rem",
            sm: "0.875rem",
            base: "0.875rem",
            "base-sans": "1rem",
            lg: "1.125rem",
            xl: "1.5rem",
            "2xl": "2rem"
        },
        borderRadius: {
            base: "0.5rem",
            sm: "0.25rem",
            xs: "0.156rem",
            lg: "1rem",
            xl: "2rem",
            max: "999999px"
        },
        extend: {
            screens: {
                "3xl": "1800px"
            },
            height: {
                condensed: "2rem",
                base: "2.625rem"
            },
            width: {
                condensed: "2rem",
                base: "2.625rem"
            },
            minWidth: {
                condensed: "2rem",
                base: "2.625rem"
            },
            minHeight: {
                condensed: "2rem",
                base: "2.625rem"
            },
            colors: {
                "brand-cyan": {
                    100: "#c1e0da",
                    300: "#278783",
                    600: "#1e6864",
                    900: "#0c2623"
                },
                "brand-sapphire": {
                    100: "#bad0e2",
                    300: "#2674bc",
                    600: "#164466",
                    900: "#001826"
                },
                "brand-gold": {
                    100: "#e2daba",
                    300: "#dab82f",
                    600: "#665616",
                    900: "#261e00"
                },
                "brand-red": {
                    100: "#FF7A87",
                    500: "#c63e62"
                },
                "brand-monochrome": {
                    100: "#fffffa",
                    900: "#0f0f0f"
                }
            }
        }
    },
    plugins: [
        plugin(function ({ addVariant }) {
            addVariant("modal", "&:modal")
        })
    ]
}
