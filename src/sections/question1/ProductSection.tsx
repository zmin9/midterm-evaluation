import Typo, { Highlight } from '../../components/Typo';
import Section from '../../components/Section';
import mediaQuery from '../../styles/mediaQuery';
import styled from 'styled-components';
import products, { Product } from '../../data/product';

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

const ItemImgContainer = styled.div<Pick<Product, 'imgBgColor'>>`
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
  margin-bottom: 80px;

  white-space: pre-wrap;
  ${mediaQuery.large}{
    white-space: normal;
    margin-bottom: 60px;
  }
`;

const Products = () => {
  return (
    <Section bgColor="bg1" paddingT={60}>
      <Productions>
        {
          products.map((item) => (
            <ProductionItem key={item.title}>
              <Typo type="textSR">
                <ItemText>
                  <ItemTitle>
                    {item.title}
                  </ItemTitle>
                  <ItemDesc>
                    {item.description}
                  </ItemDesc>
                </ItemText>
              </Typo>
              <ItemImgContainer imgBgColor={item.imgBgColor}>
                <img src={item.img} alt={item.title + '_icon'} loading='lazy'/>
              </ItemImgContainer>
            </ProductionItem>
          ))
        }
      </Productions>
      <Typo type="textMB">
        <ProductionText>
          {'이 모든 구성이 수학대왕 '}
          <Highlight>프리미엄</Highlight>
          {'에 \n'}
          포함되어 있습니다.
        </ProductionText>
      </Typo>
    </Section>
  );
};

export default Products;
