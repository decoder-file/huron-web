import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'

import { SignIn } from './pages/SignIn'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <SignIn />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
