import { createGlobalStyle, ThemeProps } from "styled-components";

import { ScrewTheme } from "./types/ScrewTheme";

const GlobalStyles = createGlobalStyle<ThemeProps<ScrewTheme>>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fontFamily};
  }
`;

export default GlobalStyles;
