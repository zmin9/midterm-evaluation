import styled from 'styled-components';

import ImprovingImgL from '../../../public/images/improving-graph-large.png';
import ImprovingImgS from '../../../public/images/improving-graph-small.png';
import Section from '../../components/Section';
import ImagesByMediaQuery from '../../components/image/ImagesByMediaQuery';
import mediaQuery from '../../styles/mediaQuery';


const GraphDescription = styled.div`
  margin-top: 16px;
  color: ${({ theme }) => theme.description};
  text-align: center;
  vertical-align: baseline;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  span {
    font-size: 10px;
    line-height: 15px;
  }

  white-space: pre-wrap;

  ${mediaQuery.large} {
    white-space: normal;
  }
`;

const WhatSection = () => {
  return (
    <Section bgColor="bg1" paddingT={60} paddingB={40}>
      <Section.Title>
        {'데이터로 검증된 \n'}
        {'성적 향상'}
      </Section.Title>
      <Section.Content>
        누적된 데이터를 통해 증명된 자녀의 성적 향상
      </Section.Content>
      <Section.Card>
        <ImagesByMediaQuery small={ImprovingImgS} large={ImprovingImgL} widthS={335} widthL={944} alt="improving graph"/>
      </Section.Card>
      <GraphDescription>
        {'*6개월간의 누적 데이터를 기준으로 산출됨\n'}
        <span>
          (2021-04-01월 ~ 09-30)
        </span>
      </GraphDescription>
    </Section>
  );
};

export default WhatSection;
