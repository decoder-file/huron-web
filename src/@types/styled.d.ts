import 'styled-components'
import '@mui/material/styles'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module '@mui/material/style' {
  export interface DefaultTheme extends ThemeType {}
}
