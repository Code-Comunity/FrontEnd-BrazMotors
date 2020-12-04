import 'styled-components'

import theme from './theme'

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
//d.ts é a extensão de arquivo responsavel por definir coisas.