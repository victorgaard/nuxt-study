export default {
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": {
            transform: "translateY(-5%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "fade-in": "fade-in 130ms ease forwards",
      },
    },
  },
};
