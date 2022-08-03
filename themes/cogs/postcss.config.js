module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss")("themes/cogs/tailwind.config.js"),
        require("autoprefixer"),
    ],
};
