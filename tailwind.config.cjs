module.exports = {
  important: true,

  content: ["./src/**/*.{html,js,svelte,ts}"],

  // REMINDER: theme can be generated from daisyui.
  // Copy-paste theme colors into tailwind colors
  // section
  theme: {
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
  },

  extend: {
    screens: {
      xs: "540px",
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
    require('@tailwindcss/forms'),
  ],
};
