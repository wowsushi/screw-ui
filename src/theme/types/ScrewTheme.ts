import { CSSProperties } from "react";

type ScrewSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ScrewSizes = Record<ScrewSize, number>;
export interface HeadingStyle {
  fontSize: CSSProperties["fontSize"];
  lineHeight: CSSProperties["lineHeight"];
}

export interface ScrewTheme {
  dateFormat: string;
  colorScheme: "light" | "dark";
  white: string;
  black: string;
  colors: Record<string, any>;
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

  headings: {
    fontFamily: CSSProperties["fontFamily"];
    fontWeight: CSSProperties["fontWeight"];
    sizes: {
      h1: HeadingStyle;
      h2: HeadingStyle;
      h3: HeadingStyle;
      h4: HeadingStyle;
      h5: HeadingStyle;
      h6: HeadingStyle;
    };
  };

  other: Record<string, unknown>;
}
