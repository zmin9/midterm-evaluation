import Image, { StaticImageData } from 'next/image';
import styled from 'styled-components';

import Book3dImg from '../../../public/images/3d_book.png';
import Money3dImg from '../../../public/images/3d_money.png';
import Test3dImg from '../../../public/images/3d_test.png';
import Video3dImg from '../../../public/images/3d_video.png';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import Text from '../../components/Text';
import mediaQuery from '../../styles/mediaQuery';

const Productions = styled.div`
  margin-right: 10px;
`;

const ItemTitle = styled.span`
  color: ${({ theme }) => theme.text1};
`;

const ItemDesc = styled.span`
  white-space: pre-wrap;
  color: ${({ theme }) => theme.text2};
  margin-top: 8px;
`;

const ItemImgContainer = styled.div<Pick<Product, 'imgBgColor'>>`
  position: relative;
  width: 64px;
  height: 64px;
  background-color: ${({ imgBgColor }) => imgBgColor};
  border-radius: 12px;
  padding: 0 14px;

  margin: auto 0;

  div {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

const ProductionText = styled.h3`
  text-align: center;
  color: ${({ theme }) => theme.text2};
  margin-top: 60px;
  margin-bottom: 80px;

  white-space: pre-wrap;

  ${mediaQuery.large} {
    white-space: normal;
    margin-bottom: 60px;
  }
`;

type Product = {
  title: string,
  description: string,
  imgBgColor: string,
  img: StaticImageData
};

const Products = () => {
  const products: Product[] = [
    {
      title: '다양한 문제',
      description: '문제집 200권 이상의 분량\n수준 높은 수학 콘텐츠',
      imgBgColor: '#E8F0FD',
      img: Book3dImg,
    },
    {
      title: '개념 강의',
      description: '현직 대치동 강사의 기초부터\n확실한 개념 강의',
      imgBgColor: '#FFF1FF',
      img: Video3dImg,
    },
    {
      title: '최대 180% 환급',
      description: '10개월 이용시 최대 환급액\n295,000원으로 180%까지 환급',
      imgBgColor: '#FFF1B4',
      img: Money3dImg,
    },
    {
      title: '추가적인 학습 지원',
      description: '무제한 오답노트, 단원별 학습\n해설강의등 추가적인 학습지원',
      imgBgColor: '#EDEDFD',
      img: Test3dImg,
    },
  ];

  return (
    <Section bgColor="bg1" paddingT={60}>
      <Productions>
        <Layout column={{ small: 1, large: 4 }} gap={24}>
          {
            products.map((item) => (
              <Layout key={item.title}
                      column={{ small: 2, large: 1 }}
                      gap={16}
                      spaceBetween
                      flexDirection={{ small: 'row', large: 'column-reverse' }}
              >
                <div>
                  <ItemTitle>
                    <Text type="textSR">
                      {item.title}
                    </Text>
                  </ItemTitle>
                  <ItemDesc>
                    <Text type="textSR">
                      {item.description}
                    </Text>
                  </ItemDesc>
                </div>
                <div>
                  <ItemImgContainer imgBgColor={item.imgBgColor}>
                    <div>
                      <Image src={item.img} alt={item.title + '_icon'} layout="fill" objectFit="contain"/>
                    </div>
                  </ItemImgContainer>
                </div>
              </Layout>
            ))
          }
        </Layout>
      </Productions>
      <ProductionText>
        <Text type="textMB">
          {'이 모든 구성이 수학대왕 '}<span>프리미엄</span>{'에 \n'}
          포함되어 있습니다.
        </Text>
      </ProductionText>
    </Section>
  );
};

export default Products;
