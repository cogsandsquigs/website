/* eslint-disable @typescript-eslint/no-require-imports */

import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,md,mdx}"],
    theme: {
        fontFamily: {
            sans: ["'Atkinson Hyperlegible'", ...defaultTheme.fontFamily.sans],
            mono: ["Fira Code", ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],

    // daisyUI config (optional - here are the default values)
    daisyui: {
        themes: [
            {
                thetheme: {
                    primary: "#30adff",
                    secondary: "#6a3cff",
                    accent: "#ff23ff",
                    neutral: "#1b1b1d",
                    "base-100": "#131315",
                    info: "30adff",
                    success: "#00cb00",
                    warning: "#fde047",
                    error: "#e11d48",
                },
            },
        ],
        darkTheme: "thetheme", // name of one of the included themes for dark mode
    },
};
