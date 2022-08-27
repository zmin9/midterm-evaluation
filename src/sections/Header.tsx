import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import Typo from '../components/Typo';
import Image from 'next/image';

const PageHeader = styled.header`
  color: ${({ theme }) => theme.bg1};
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

  ${mediaQuery.large} {
    span {
      font-size: 32px;
      line-height: 47.36px;
    }
  }
`;

const HeaderSubTitle = styled.h2`
  z-index: 1;
  position: relative;
  margin-top: 12px;

  ${mediaQuery.large} {
    span {
      font-size: 20px;
      line-height: 29.6px;
    }
  }
`;

const Header = () => {
  return (
    <PageHeader>
      <HeaderTitle>
        <Typo type="H1">
          자녀분 공부는
        </Typo><br/>
        <Typo type="H1">
          수학대왕이 시킬게요
        </Typo>
      </HeaderTitle>
      <HeaderSubTitle>
        <Typo type="textMR">
          50만명이 선택한 인공지능 수학
        </Typo>
      </HeaderSubTitle>
      <Image src="/images/header-bg.png" layout="fill" objectFit="cover" objectPosition="bottom" priority/>
    </PageHeader>
  );
};

export default Header;
