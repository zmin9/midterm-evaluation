import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import { MediaType, setMediaQuery } from '../styles/mediaQuery';

type PrimOrMedia<T> = T | Record<MediaType, T>;

type LayoutProps = {
  column: PrimOrMedia<number>,
  flexDirection?: PrimOrMedia<'row' | 'row-reverse' | 'column-reverse'>,
  gap?: number,
  spaceBetween?: PrimOrMedia<boolean>,
};

const Grid = styled.div<Required<LayoutProps>>`
  display: flex;
  flex-wrap: wrap;
  ${({ column, gap }) => setMediaQuery(column, (value) => `
    & > * {flex: 0 1 calc((100% - (${(gap || 0)}px * (${value} - 1))) / ${value});}
  `)}
  ${({ gap }) => setMediaQuery(gap, (value) => `gap: ${value}px;`)}
  ${({ spaceBetween }) => setMediaQuery(spaceBetween, (value) => `
    ${value && 'justify-content: space-between;'}
    & > * {flex: 0 1 auto;}
  `)}
  ${({ flexDirection }) => setMediaQuery(flexDirection, (value) => `flex-direction:${value};`)}
`;

const Layout = ({
  column,
  children,
  gap = 0,
  spaceBetween = false,
  flexDirection = 'row',
}: PropsWithChildren<LayoutProps>) => {
  return (
    <Grid
      column={column}
      flexDirection={flexDirection}
      gap={gap}
      spaceBetween={spaceBetween}
    >
      {children}
    </Grid>
  );
};

export default Layout;
