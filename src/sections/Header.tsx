import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import Image from 'next/image';
import typography from '../styles/typography';
import HeaderImg from '../../public/images/header-bg.png';

const PageHeader = styled.header`
  color: ${({ theme }) => theme.text4};
  padding-top: 44px;
  text-align: center;
  position: relative;

  height: 463px;

  ${mediaQuery.large} {
    height: 648px;
  }
`;

const HeaderTitle = styled.h1`
  z-index: 1;
  position: relative;
  white-space: pre-wrap;
  ${typography.H1}

  ${mediaQuery.large} {
    font-size: 32px;
    line-height: 47.36px;
  }
`;

const HeaderSubTitle = styled.h2`
  z-index: 1;
  position: relative;
  margin-top: 12px;
  ${typography.textMR}

  ${mediaQuery.large} {
    font-size: 20px;
    line-height: 29.6px;
  }
`;

const Header = () => {
  return (
    <PageHeader>
      <HeaderTitle>
        {'자녀분 공부는\n수학대왕이 시킬게요'}
      </HeaderTitle>
      <HeaderSubTitle>
        50만명이 선택한 인공지능 수학
      </HeaderSubTitle>
      <Image src={HeaderImg} layout="fill" objectFit="cover" objectPosition="bottom" quality={100} priority placeholder='blur'/>
    </PageHeader>
  );
};

export default Header;
