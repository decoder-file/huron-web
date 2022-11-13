import { BrowserRouter } from 'react-router-dom'

import { ThemeProvider } from '@mui/material/styles'

import { GlobalStyle } from './styles/global'

import { Router } from './router'
import { theme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
