import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { theme } from "../src/style";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>)
