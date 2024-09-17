/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  theme: {
    extend: {
      keyframes: {
        bounceIn: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-30px)' },
          '60%': { transform: 'translateY(-15px)' },
        },
        fade: {
          '0%, 100%': { opacity: 1 },  // Fully visible
          '50%': { opacity: 0.5 },     // Half faded
        },
      },
      animation: {
        'bounce-in': 'bounceIn 1.5s ease-in-out', // Bounce effect
        'fade': 'fade 2s ease-in-out infinite',   // Fade effect
      },
    },
  },

  plugins: [],
};


