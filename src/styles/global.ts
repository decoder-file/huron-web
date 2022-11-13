import { createGlobalStyle } from 'styled-components'
import { theme } from './themes/default'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
    :focus { 
        outline: 0;
        box-shadow: 0 0 0 2px ${theme.palette.secondary.dark};
    }
    body {
        background: ${theme.palette.background.paper};
        color: ${theme.palette.common.black};
        -webkit-font-smoothing: antialiased;
        font-family: 'Roboto', sans-serif;
    }
    border-style, input-security, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem
    }
`
