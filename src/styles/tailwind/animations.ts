export const animations = {
  keyframes: {
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    float: {
      "0%, 100%": { transform: "translateY(0)" },
      "50%": { transform: "translateY(-10px)" },
    },
    glow: {
      "0%, 100%": { opacity: "1" },
      "50%": { opacity: "0.5" },
    },
    "gradient-x": {
      "0%, 100%": {
        "background-position": "200% 0",
        "background-size": "200% 100%"
      },
      "50%": {
        "background-position": "0 0",
        "background-size": "200% 100%"
      }
    },
    "gradient-y": {
      "0%, 100%": {
        "background-position": "0 200%",
        "background-size": "100% 200%"
      },
      "50%": {
        "background-position": "0 0",
        "background-size": "100% 200%"
      }
    },
    aurora: {
      "0%": { transform: "rotate(0deg) scale(1)" },
      "50%": { transform: "rotate(180deg) scale(1.5)" },
      "100%": { transform: "rotate(360deg) scale(1)" }
    },
    "slide-up": {
      "0%": { transform: "translateY(20px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" }
    },
    "slide-down": {
      "0%": { transform: "translateY(-20px)", opacity: "0" },
      "100%": { transform: "translateY(0)", opacity: "1" }
    }
  },
  animation: {
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
    float: "float 6s ease-in-out infinite",
    glow: "glow 2s ease-in-out infinite",
    "gradient-x": "gradient-x 15s ease infinite",
    "gradient-y": "gradient-y 15s ease infinite",
    "aurora": "aurora 20s ease infinite",
    "slide-up": "slide-up 0.5s ease-out",
    "slide-down": "slide-down 0.5s ease-out",
  },
};