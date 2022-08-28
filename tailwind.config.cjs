const extend = require("./src/lib/styles/tailwind/extend.json");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,svelte,md,sass,scss,css}"],
    theme: {
        extend: extend,
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
    ],
};
