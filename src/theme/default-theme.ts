import { DEFAULT_COLORS } from "./default-colors";
import { ScrewTheme } from "./types/ScrewTheme";

export const SCREW_COLORS = Object.keys(DEFAULT_COLORS);
export const SCREW_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

export const DEFAULT_THEME: ScrewTheme = {
  dateFormat: "MMMM D, YYYY",
  colorScheme: "light",
  white: "#fff",
  black: "#000",
  transitionTimingFunction: "cubic-bezier(.51,.3,0,1.21)",
  colors: DEFAULT_COLORS,
  lineHeight: 1.55,
  fontFamily:
    "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Microsoft YaHei",
  fontFamilyMonospace:
    "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  primaryColor: "blue",

  shadows: {
    xs: "0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",
    sm: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",
    md: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
    lg: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",
    xl: "0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px",
  },

  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
  },

  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 32,
  },

  spacing: {
    xs: 10,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },

  breakpoints: {
    xs: 576,
    sm: 768,
    md: 992,
    lg: 1200,
    xl: 1400,
  },

  typography: {
    fontFamily:
      "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",
    sizes: {
      h1: {
        fontSize: "3rem",
        fontWeight: "700",
        lineHeight: "1.5",
        letterSpacing: "0.1em",
      },
      h2: {
        fontSize: "2.25rem",
        fontWeight: "600",
        lineHeight: "1.5",
        letterSpacing: "0.1em",
      },
      h3: {
        fontSize: "1.875rem",
        fontWeight: "500",
        lineHeight: "1.5",
        letterSpacing: "0.05em",
      },
      h4: {
        fontSize: "1.75rem",
        fontWeight: "500",
        lineHeight: "1.5",
        letterSpacing: "0.05em",
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: "500",
        lineHeight: "1.5",
        letterSpacing: "0.025em",
      },
      h6: {
        fontSize: "1.375rem",
        fontWeight: "500",
        lineHeight: "1.5",
        letterSpacing: "0.025em",
      },
      body1: {
        fontSize: "1rem",
        fontWeight: "400",
        lineHeight: "1.5rem",
        letterSpacing: 0,
      },
      body2: {
        fontSize: "0.875rem",
        fontWeight: "400",
        lineHeight: "1.25rem",
        letterSpacing: 0,
      },
      button1: {
        fontSize: "0.875rem",
        fontWeight: "500",
        lineHeight: "2.5rem",
        letterSpacing: "0.025em",
      },
      button2: {
        fontSize: "0.875rem",
        fontWeight: "500",
        lineHeight: "2rem",
        letterSpacing: "0.025em",
      },
    },
  },

  other: {},
};
