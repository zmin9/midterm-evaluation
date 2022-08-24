import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import typography, { Typography } from '../styles/typography';

type TextProps = {
  type: Typography
};

const CustomSpan = styled.span<TextProps>`
  ${({ type }) => typography[type]}
`;

export const Highlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const Text = ({ children, type }: PropsWithChildren<TextProps>) => <CustomSpan type={type}>{children}</CustomSpan>;

export default Text;
