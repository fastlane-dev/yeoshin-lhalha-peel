/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: "#FE3B1F",
        gray: "#555555",
      },
      fontFamily: {
        sans: [...fontFamily.sans],
        pretendard: ["var(--font-pretendard)"],
        faktumTest: ["var(--font-faktumTest)"],
      },
      animation: {
        logoSpin: "logoSpin 0.8s forwards linear",
        mobileLogoSpin: "logoSpin 0.8s forwards linear",

        smoothAppear: "smoothAppear 0.7s forwards ease-in-out",

        mainLogoAppear: "fade 2.5s both ease-in-out infinite alternate-reverse",
        mainLogoDisappear: "fade 2.5s both ease-in-out infinite alternate",

        lineAppear: "lineAppear 1.5s forwards linear",
        imageAppear: "smoothAppear 0.8s forwards linear",

        keywordStartAt0s: "moveFromDownToUp 0.4s forwards 0.3s ease-in-out",
        keywordStartAt0_2s: "moveFromDownToUp 0.4s forwards 0.5s ease-in-out",
        keywordStartAt0_4s: "moveFromDownToUp 0.4s forwards 0.7s ease-in-out",
        keywordStartAt0_6s: "moveFromDownToUp 0.4s forwards 0.9s ease-in-out",
        keywordStartAt0_8s: "moveFromDownToUp 0.4s forwards 1.1s ease-in-out",
      },
      keyframes: {
        logoSpin: {
          from: {
            transform: "rotate(-45deg)",
          },

          to: {
            transform: "rotate(5deg)",
          },
        },

        fade: {
          "0%": {
            opacity: 0,
            transform: "translateY(0px)",
          },
          "50%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(20px)",
          },
        },

        smoothAppear: {
          "0%": {
            opacity: 0,
            transform: "translateY(40px)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
        lineAppear: {
          "0%": {
            width: "0%",
            zIndex: 0,
          },

          "100%": {
            width: "110vw",
            zIndex: 0,
          },
        },
        moveFromDownToUp: {
          "0%": {
            opacity: 0,
            transform: "translateY(20px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
