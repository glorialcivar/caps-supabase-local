const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

const lightPrimary = "#4611cf";
const lightTheme = {
  // Background colors `bg`
  background: {
    // Majority of the design is this color
    DEFAULT: colors.white,
    // Secondary shade of the default background color
    2: colors.neutral["100"],
    // Tertiary shade of the default background color
    3: colors.neutral["200"],
    // Complementary bg color (vibrant for pale sites, pale for vibrant)
    accent: lightPrimary,
    // Neutral background
    neutral: colors.neutral["600"],
    // 1/3 Oposite background color to default
    "semi-contrast": colors.neutral["200"],
    // Oposite background color to default
    contrast: colors.neutral["500"],
    // Use when items should appear disabled
    disabled: colors.neutral["500"],
    // Use when items should appear with error
    danger: colors.red["500"],
    // Use when you need an absolute opposite color to the background
    negative: colors.black
  },
  // Text colors `text`
  typography: {
    // Most blocks of texts should be this color
    DEFAULT: colors.neutral["950"],
    // Secondary shade of default text color
    2: colors.neutral["900"],
    // Tertiary shade of default text color
    3: colors.neutral["800"],
    // Useful for less important text
    neutral: colors.neutral["600"],
    // Complementary text color (commonly the main brand color)
    accent: lightPrimary,
    // Text that are contained in blocks with a filled background (should play well with the background accent color)
    contrast: colors.white,
    // Text that is secondary and should not be the center of attention
    "low-contrast": colors.neutral["300"],
    // Use when items should appear disabled
    disabled: colors.white,
    // Use when items should appear with a warning
    warning: colors.amber["500"],
    // Use when items should appear with error
    danger: colors.red["500"],
    // Use when you need an absolute opposite color to the text
    negative: colors.white
  }
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: lightTheme,
      borderRadius: {
        theme: "16px"
      },
      gridTemplateColumns: {
        page: "[bleed-start] minmax(var(--pad),1fr) [content-start] minmax(0,1280px) [content-end] minmax(var(--pad),1fr) [bleed-end]"
      },
      gridColumn: {
        bleed: "bleed",
        content: "content"
      },
      minHeight: {
        "screen-dynamic": ["100vh", "100dvh"],
        "screen-small": ["100vh", "100svh"],
        "screen-large": ["100vh", "100lvh"]
      },
      height: {
        "screen-dynamic": ["100vh", "100dvh"],
        "screen-small": ["100vh", "100svh"],
        "screen-large": ["100vh", "100lvh"]
      },
      maxHeight: {
        "screen-dynamic": ["100vh", "100dvh"],
        "screen-small": ["100vh", "100svh"],
        "screen-large": ["100vh", "100lvh"]
      }
    }
  },
  plugins: [require("@tailwindcss/container-queries")]
};
