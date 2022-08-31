import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import mediaQuery from '../styles/mediaQuery';

type Media = keyof typeof mediaQuery;

type LayoutProps = {
  columns: Record<Media, number>,
  gap?: number
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
      columns={columns}
      smallCellNum={cellNumSmallScreen}
      largeCellNum={cellNumLargeScreen}
      gap={gap}
    >
      {children}
    </Grid>
  );
};

// 지금은 필요없지만 크기 비율을 조정하고 싶다면 compound component로 만들어서 사용할 수도 있겠다.

export default Layout;
