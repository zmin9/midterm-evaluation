import styled from 'styled-components';
import BgImg from '../statics/headerImg.png';
import mediaQuery from '../styles/mediaQuery';
import Text from '../components/Text';

const PageHeader = styled.header`
  color: ${({ theme }) => theme.bg1};
  padding-top: 44px;
  text-align: center;
  
  background: url(${BgImg}) 45%/cover no-repeat;
  height: 463px;

  ${mediaQuery.large}{
    height: 648px;
  }
`;

const HeaderTitle = styled.h1`
  ${mediaQuery.large} {
    span {
      font-size: 32px;
      line-height: 47.36px;
    }
  }
`;

const HeaderSubTitle = styled.h2`
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
        <Text type='H1'>
          {'자녀분 공부는\n수학대왕이 시킬게요'}
        </Text>
      </HeaderTitle>
      <HeaderSubTitle>
        <Text type='textMR'>
          {'50만명이 선택한 인공지능 수학'}
        </Text>
      </HeaderSubTitle>
    </PageHeader>
  );
};

export default Header;
