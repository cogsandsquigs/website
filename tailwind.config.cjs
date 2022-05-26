module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    colors: {
      primary: "#111827",
      secondary: "#0ea5e9",
      accent: "#1d4ed8",
      neutral: "#111827",
      "base-100": "#111827",
      info: "#0ea5e9",
      success: "#36D399",
      warning: "#FBBD23",
      error: "#F87272",
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

    extend: {
      screens: {
        xs: "540px",
      },
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
