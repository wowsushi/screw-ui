import { CSSProperties } from "react";

type ScrewSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ScrewSizes = Record<ScrewSize, number>;
export interface TypographyStyle {
  fontSize: CSSProperties["fontSize"];
  lineHeight: CSSProperties["lineHeight"];
  fontWeight: CSSProperties["fontWeight"];
  letterSpacing: CSSProperties["letterSpacing"];
}

export interface ScrewTheme {
  dateFormat: string;
  colorScheme: "light" | "dark";
  white: string;
  black: string;
  colors: Record<string, string[]>;
  fontFamily: CSSProperties["fontFamily"];
  lineHeight: CSSProperties["lineHeight"];
  transitionTimingFunction: CSSProperties["transitionTimingFunction"];
  fontFamilyMonospace: CSSProperties["fontFamily"];
  primaryColor: string;

  fontSizes: ScrewSizes;
  radius: ScrewSizes;
  spacing: ScrewSizes;
  breakpoints: ScrewSizes;
  shadows: Record<ScrewSize, string>;

  typography: {
    fontFamily: CSSProperties["fontFamily"];
    sizes: Record<string, TypographyStyle>;
  };

  other: Record<string, unknown>;
}
