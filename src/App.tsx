import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'

import { SignUp } from './pages/SignUp'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SignUp />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
