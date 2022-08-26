import Typo, { Highlight } from '../../components/Typo';
import Section from '../../components/Section';
import mediaQuery from '../../styles/mediaQuery';
import styled from 'styled-components';


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
  margin-bottom: 80px;
  img {
    position: relative;
    left: 50%;
    transform: translate(-38.15%, 0);
  }

  ${mediaQuery.large} {
    margin: 0;
    img {
      transform: translate(-50%, 0);
    }
  }
`;

const HowText = styled.div`
  text-align: center;
  margin-bottom: 40px;
  white-space: pre-wrap;
  ${mediaQuery.large}{
    margin-bottom: 0;
  }
`;

const HowSection = () => {
  return (
    <Section bgColor="bg2" paddingT={40} paddingB={40}>
      <HowLayout>
        <HowImage>
          <img src='/images/what-mathking-does.png' alt='what mathking does' height={280}/>
        </HowImage>
        <HowText>
          <HowHeadline>
            <Typo type="textMB">
              {'시간을 얼마나 쓰는지 보다 중요한 건,\n'}
              {'시간을 '}<Highlight>어떻게</Highlight>{' 쓰느냐입니다.'}
            </Typo>
          </HowHeadline>
          <Typo type="textMR">
            {'수천만건의 데이터는 자녀분의 시간을 더욱\n'}
            {'효율적으로 사용할 수 있도록 만들어줍니다.'}
          </Typo>
        </HowText>
      </HowLayout>
    </Section>
  );
};

export default HowSection;
