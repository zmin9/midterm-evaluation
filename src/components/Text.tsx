import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import typography, { Typography } from '../styles/typography';

type TextProps = {
  type: Typography
};

const CustomSpan = styled.span<TextProps>`
  white-space: pre;
  ${({ type }) => typography[type]}
`;

const Text = ({ children, type }: PropsWithChildren<TextProps>) => <CustomSpan type={type}>{children}</CustomSpan>;

export default Text;
