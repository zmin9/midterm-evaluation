import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

const fontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
};

function getFontCss(size: number, lineHeight: number, weight: keyof typeof fontWeight) {
  return css`
    font-size: ${size}px;
    line-height: ${lineHeight}px;
    font-weight: ${fontWeight[weight]};
  `;
}

const typography = {
  H1: getFontCss(24, 36, 'bold'),
  H3: getFontCss(20, 30, 'bold'),

  textLB: getFontCss(18, 27, 'bold'),
  textMB: getFontCss(16, 24, 'bold'),
  textSB: getFontCss(14, 21, 'bold'),
  textXSB: getFontCss(12, 18, 'bold'),

  textLM: getFontCss(18, 27, 'medium'),
  textMM: getFontCss(16, 24, 'medium'),
  textSM: getFontCss(14, 21, 'medium'),
  textXSM: getFontCss(12, 18, 'medium'),

  textLR: getFontCss(18, 27, 'regular'),
  textMR: getFontCss(16, 24, 'regular'),
  textSR: getFontCss(14, 21, 'regular'),
  textXSR: getFontCss(12, 18, 'regular'),
};

type TypoType = keyof typeof typography;
type TextProps = {
  type: TypoType,
};

const CustomText = styled.span<TextProps>`
  ${({ type }) => typography[type]}
  & > span {
    color: ${({ theme }) => theme.highlight};
  }
`;

const Text = ({ children, type }: PropsWithChildren<TextProps>) => <CustomText type={type}>{children}</CustomText>;

export default Text;
