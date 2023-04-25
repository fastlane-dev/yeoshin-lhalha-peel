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
        mobileLogoSpin: "logoSpin 1.2s forwards linear",

        smoothAppear: "smoothAppear 1s forwards ease-in-out",
        smoothDisappear: "smoothDisappear 0.8s forwards ease-in-out",

        mainLogoAppear: "smoothAppear 1.2s forwards 1.5s ease-in-out",
        mainLogoDisappear: "smoothDisappear 1.2s forwards 1.3s ease-in-out",

        lineAppear: "lineAppear 1.5s forwards linear",
        imageAppear: "smoothAppear 0.8s forwards linear",

        keywordStartAt0s: "moveFromLeftToRight 0.4s forwards ease-in-out",
        keywordStartAt0_2s:
          "moveFromLeftToRight 0.4s forwards 0.5s ease-in-out",
        keywordStartAt0_4s:
          "moveFromLeftToRight 0.4s forwards 1.3s ease-in-out",
        keywordStartAt0_6s:
          "moveFromLeftToRight 0.4s forwards 2.1s ease-in-out",
        keywordStartAt0_8s:
          "moveFromLeftToRight 0.4s forwards 2.9s ease-in-out",
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
        smoothDisappear: {
          "0%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
            transform: "translateY(-20px)",
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
        moveFromLeftToRight: {
          "0%": {
            opacity: 0,
            transform: "translateX(-20px)",
          },

          "100%": {
            opacity: 1,
            transform: "translateX(0px)",
          },
        },
      },
    },
  },
  plugins: [],
};
