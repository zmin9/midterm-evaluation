import Section from '../../components/Section';
import ImprovingGraphS from '../../statics/improving-graph-small.png';
import ImprovingGraphL from '../../statics/improving-graph-large.png';
import styled from 'styled-components';
import ImagesByMediaQuery from '../../components/ImagesByMediaQuery';

const GraphDescription = styled.div`
  margin-top: 16px;
  color: ${({ theme }) => theme.description};
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  div {
    font-size: 10px;
    line-height: 15px;
  }
`;

const WhatSection = () => {
  return (
      <Section bgColor="bg1" paddingT={60} paddingB={40}>
        {/*TODO responsive*/}
        <Section.Title>
          {'데이터로 검증된 '}
          {'성적향상'}
        </Section.Title>
        <Section.Content>
          누적된 데이터를 통해 증명된 자녀의 성적 향상
        </Section.Content>
        <Section.Card>
          <ImagesByMediaQuery small={ImprovingGraphS} large={ImprovingGraphL} alt='improving graph'/>
        </Section.Card>
        <GraphDescription>
          *6개월간의 누적 데이터를 기준으로 산출됨
          <div>
            (2021-04-01 ~ 09-30)
          </div>
        </GraphDescription>
      </Section>
  );
};

export default WhatSection;
