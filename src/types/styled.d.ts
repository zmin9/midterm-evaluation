import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg1: string,
    bg2: string,
    bg3: string,

    headline: string,
    text1: string,
    text2: string,
    text3: string,
    highlight: string,
    description: string,

    purpleGradient: string

    button: string,
    onButton: string,
  }
}
