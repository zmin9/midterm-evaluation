import MathkingSeviceImg from '../../../public/images/what-mathking-does.png';
import Section from '../../components/Section';
import Highlight from '../../components/TextHighlight';
import ImageHavingMaxWidth from '../../components/image/ImageHavingMaxWidth';
import mediaQuery from '../../styles/mediaQuery';
import typography from '../../styles/typography';
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
  ${typography.textMB}
  margin-bottom: 24px;

  ${mediaQuery.large} {
    ${typography.H3}
  }
`;
const HowImage = styled.div`
  margin-bottom: 80px;
  margin-right: -104px;
  
  & > * {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }

  ${mediaQuery.large} {
    margin: 0;
    & > * {
      position: relative;
      left: 7px;
      transform: none;
    }
  }
`;

const HowText = styled.div`
  ${typography.textMR}
  text-align: center;
  margin-bottom: 40px;
  white-space: pre-wrap;

  ${mediaQuery.large} {
    margin-bottom: 0;
  }
`;

const HowSection = () => {
  return (
    <Section bgColor="bg2" paddingT={40} paddingB={40}>
      <HowLayout>
        <HowImage>
          <ImageHavingMaxWidth src={MathkingSeviceImg} alt="수학대왕이 하는 일" maxWidth={439}/>
        </HowImage>
        <HowText>
          <HowHeadline>
            {'시간을 얼마나 쓰는지 보다 중요한 건,\n'}
            {'시간을 '}<Highlight text='어떻게'/>{' 쓰느냐입니다.'}
          </HowHeadline>
          {'수천만건의 데이터는 자녀분의 시간을 더욱\n'}
          {'효율적으로 사용할 수 있도록 만들어줍니다.'}
        </HowText>
      </HowLayout>
    </Section>
  );
};

export default HowSection;
