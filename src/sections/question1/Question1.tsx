import DifferenceSection from './DifferenceSection';
import ProductSection from './ProductSection';
import QuestionBox from '../../components/QuestionBox';
import Text, { Highlight } from '../../components/Text';
import Section from '../../components/Section';

const Question1 = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          <Text type="H1">수학대왕 <Highlight>프리미엄</Highlight>{'은 '}</Text>
          <Text type="H1">무엇이 다른가요?</Text>
        </QuestionBox>
      </Section>
      <DifferenceSection />
      <ProductSection/>
    </>
  );
};

export default Question1;
