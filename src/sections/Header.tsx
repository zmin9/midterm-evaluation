import Image from 'next/image';
import styled from 'styled-components';

import HeaderImg from '../../public/images/header-bg.png';
import Text from '../components/Text';
import mediaQuery from '../styles/mediaQuery';

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
    font-size: 20px;
    line-height: 29.6px;
  }
`;

const Header = () => {
  return (
    <PageHeader>
      <HeaderTitle>
        <Text type='H1'>
          {'자녀분 공부는\n수학대왕이 시킬게요'}
        </Text>
      </HeaderTitle>
      <HeaderSubTitle>
        <Text type='textMR'>
          50만명이 선택한 인공지능 수학
        </Text>
      </HeaderSubTitle>
      <Image src={HeaderImg} layout="fill" objectFit="cover" objectPosition="bottom" quality={100} priority/>
    </PageHeader>
  );
};

export default Header;
