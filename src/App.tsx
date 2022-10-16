import { ThemeProvider } from 'styled-components'

import { defaultTheme } from './styles/themes/default'

import { GlobalStyle } from './styles/global'
import { LandingPage } from './pages/LandingPage'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LandingPage />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
