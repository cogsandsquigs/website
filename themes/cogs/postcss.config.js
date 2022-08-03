module.exports = {
    plugins: [
        require("postcss-import")({
            root: "themes/cogs",
            path: ["assets/css"],
        }),
        require("tailwindcss")("themes/cogs/tailwind.config.js"),
        require("autoprefixer"),
    ],
};
