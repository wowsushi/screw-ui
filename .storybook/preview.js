import NormalizeCSS from '../src/theme/NormalizeCSS'
import GlobalStyles from '../src/theme/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { DEFAULT_THEME } from '../src/theme/default-theme'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    expanded: true
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={DEFAULT_THEME}>
      <NormalizeCSS/>
      <GlobalStyles/>
      <Story />
    </ThemeProvider>
  ),
];