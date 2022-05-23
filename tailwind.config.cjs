module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#030D14",
      secondary: "#0284c7",
    },

    fontFamily: {
      display: [
        "Fira Code",
        "Fira Mono",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace",
      ],
      body: [
        "Fira Code",
        "Fira Mono",
        "Menlo",
        "Consolas",
        "DejaVu Sans Mono",
        "monospace",
      ],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
