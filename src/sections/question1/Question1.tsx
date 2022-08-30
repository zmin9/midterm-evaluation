import QuestionBox from '../../components/QuestionBox';
import Section from '../../components/Section';

import DifferenceSection from './DifferenceSection';
import ProductSection from './ProductSection';

const Question1 = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          {'수학대왕 '}<span>프리미엄</span>{'은 \n'}
          {'무엇이 다른가요?'}
        </QuestionBox>
      </Section>
      <DifferenceSection />
      <ProductSection/>
    </>
  );
};

export default Question1;
