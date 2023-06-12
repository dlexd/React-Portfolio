module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: 'bg-green-500',
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ["forest"], // Add the "forest" theme here
    styled: true, // Enable the DaisyUI styled components
    base: true, // Enable the base styles (required for DaisyUI)
    utils: true, // Enable the utility classes (required for DaisyUI)
  },
};
