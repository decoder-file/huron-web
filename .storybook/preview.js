
import '../src/styles/global'

import { themes } from '@storybook/theming'
import { GlobalStyle } from '../src/styles/global'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      {Story()}
    </>
  ),
]
