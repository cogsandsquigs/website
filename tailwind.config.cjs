/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,svelte,md,sass,scss,css}"],
    theme: {
        extend: {
            colors: {
                primary: "#111827",
                secondary: "#3ABFF8",
                accent: "#2563EB",
                neutral: "#111827",
                "base-100": "#111827",
                info: "#3ABFF8",
                success: "#36D399",
                warning: "#FBBD23",
                error: "#F87272",
            },

            screens: {
                // "2xs": "360px",
                // xs: "540px",
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
