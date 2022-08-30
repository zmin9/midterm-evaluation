import { PropsWithChildren } from 'react';
import styled from 'styled-components';

import mediaQuery from '../styles/mediaQuery';

type Media = keyof typeof mediaQuery;

type LayoutProps = {
  columns: Record<Media, number>,
  gap?: number
};

type CellNum = Record<`${Media}CellNum`, number>;

const Grid = styled.div<LayoutProps & CellNum>`
  display: grid;
  gap: ${({ gap }) => `${gap}px`};
  @media (max-width: 1023px) {
    grid-template-columns: repeat(${({ smallCellNum }) => smallCellNum}, 1fr);
    & > * {
      grid-column: ${({ columns }) => columns.small};
    }
  }

  ${mediaQuery.large} {
    grid-template-columns: repeat(${({ largeCellNum }) => largeCellNum}, 1fr);

    & > * {
      grid-column: ${({ columns }) => columns.large};
    }
  }
`;

const Layout = ({ columns, children, gap = 0 }: PropsWithChildren<LayoutProps>) => {
  const cellNumSmallScreen = 1 / columns.small;
  const cellNumLargeScreen = 1 / columns.large;
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
