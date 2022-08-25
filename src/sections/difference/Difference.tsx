import Section from '../../components/Section';
import styled from 'styled-components';
import mediaQuery from '../../styles/mediaQuery';
import differenceWithOthers from '../../data/differenceWithOthers';
import QuestionBox from '../../components/QuestionBox';
import Text, { Highlight } from '../../components/Text';
import production, { Production } from '../../data/production';

const GraphImage = styled.img`
  width: 100%;
  border-radius: 5px;

  ${mediaQuery.large} {
    width: auto;
    height: 335px;
  }
`;

const ProductionItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mediaQuery.large} {
    flex-direction: column-reverse;
    align-items: start;
  }

  & + & {
    margin-top: 24px;

    ${mediaQuery.large} {
      margin-top: 0;
    }
  }
`;

const ItemText = styled.div`
  display: flex;
  flex-direction: column;

  & > * + * {
    margin-top: 8px;
  }

  ${mediaQuery.large} {
    margin-top: 16px;
  }
`;
const Productions = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  ${mediaQuery.large} {
    flex-direction: row;
    justify-content: space-between;
    margin-right: -56px;

    & > * {
      flex: 1 1 0;
    }
  }
`;

const ItemTitle = styled.span`
  color: ${({ theme }) => theme.text1};
`;

const ItemDesc = styled.span`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.text2};
`;

const ItemImgContainer = styled.div<Pick<Production, 'imgBgColor'>>`
  width: 64px;
  height: 64px;
  background-color: ${({ imgBgColor }) => imgBgColor};
  border-radius: 12px;
  padding: 0 14px;

  display: flex;
  align-items: center;

  img {
    width: 100%;
  }
`;

const ProductionText = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.text2};
  margin-top: 60px;

  & > * {
    display: block;

    ${mediaQuery.large} {
      display: inline;
    }
  }
`;

const Difference = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          <Text type="H1">수학대왕 <Highlight>프리미엄</Highlight>{'은 '}</Text>
          <Text type="H1">무엇이 다른가요?</Text>
        </QuestionBox>
      </Section>
      {differenceWithOthers.map((diff, idx) => (
        <Section key={diff.title} bgColor={idx % 2 ? 'bg1' : 'bg2'} paddingT={60} paddingB={40}>
          <Section.Subtitle>{`차이점 ${idx + 1}`}</Section.Subtitle>
          <Section.Title>{diff.title}</Section.Title>
          <Section.Content>{diff.description}</Section.Content>
          <Section.Card>
            <GraphImage src={diff.graphImg} alt={`difference graph ${idx + 1}`}/>
          </Section.Card>
        </Section>
      ))}
      <Section bgColor="bg1" paddingT={60} paddingB={80}>
        <Productions>
          {
            production.map((item) => (
              <ProductionItem key={item.title}>
                <Text type="textSR">
                  <ItemText>
                    <ItemTitle>
                      {item.title}
                    </ItemTitle>
                    <ItemDesc>
                      {item.description}
                    </ItemDesc>
                  </ItemText>
                </Text>
                <ItemImgContainer imgBgColor={item.imgBgColor}>
                  <img src={item.img} alt={item.title + '_icon'}/>
                </ItemImgContainer>
              </ProductionItem>
            ))
          }
        </Productions>
        <ProductionText>
          <Text type="textMB">
            {'이 모든 구성이 수학대왕 '}
            <Highlight>프리미엄</Highlight>
            {'에 '}
          </Text>
          <Text type="textMB">
            포함되어 있습니다.
          </Text>
        </ProductionText>
      </Section>
    </>
  );
};

export default Difference;
