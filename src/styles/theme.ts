import palette from './palette';
import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  bg1: palette.white,
  bg2: palette.gray1,

  headline: palette.black,
  text1: palette.gray4,
  text2: palette.gray3,
  text3: palette.gray2,
  highlight: palette.purple2,

  button: palette.purple2,
  onButton: palette.white,
};

export default theme;
