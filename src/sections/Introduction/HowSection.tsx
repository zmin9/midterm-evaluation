import WhatImage from '../../statics/what-mathking-does.png';
import Text, { Highlight } from '../../components/Text';
import Section from '../../components/Section';
import mediaQuery from '../../styles/mediaQuery';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const HowLayout = styled.span`
  ${mediaQuery.large} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }

  & > * {
    flex: 1 1 0;
  }
`;

const HowHeadline = styled.h3`
  margin-bottom: 24px;

  ${mediaQuery.large} {
    span {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
const HowImage = styled.div`
  margin: 0 -40px 80px 0;

  ${mediaQuery.large} {
    margin: 0;

    img {
      width: auto;
      height: 280px;
    }
  }
`;

const HowText = styled.div`
  text-align: center;
  margin-bottom: 40px;
  ${mediaQuery.large}{
    margin-bottom: 0;
  }
`;

const HowSection = () => {
  return (
    <Section bgColor="bg2" paddingT={40} paddingB={40}>
      <HowLayout>
        <HowImage>
          <Image src={WhatImage} alt='what mathking does'/>
        </HowImage>
        <HowText>
          <HowHeadline>
            <Text type="textMB">
              시간을 어떻게 쓰는지 보다 중요한 건,<br/>
              시간을 <Highlight>어떻게</Highlight> 쓰느냐입니다.
            </Text>
          </HowHeadline>
          <Text type="textMR">
            수천만건의 데이터는 자녀분의 시간을 더욱<br/>
            효율적으로 사용할 수 있도록 만들어줍니다.
          </Text>
        </HowText>
      </HowLayout>
    </Section>
  );
};

export default HowSection;
