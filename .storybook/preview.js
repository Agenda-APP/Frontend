import { addDecorator } from '@storybook/react';
import { ThemeProvider } from "styled-components";
import { index } from "../src/styles/theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(storyFn => <ThemeProvider theme={index}>{storyFn()}</ThemeProvider>)
