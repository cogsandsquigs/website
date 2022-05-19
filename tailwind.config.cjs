module.exports = {
  important: true,
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {

    colors: {
      primary: "#030D14",
      secondary: "#0284c7",
    },

    fontFamily: {
      display: ['IBM Plex Mono', 'Menlo', 'monospace'],
      body: ['IBM Plex Mono', 'Menlo', 'monospace'],
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
