import DifferenceSection from './DifferenceSection';
import ProductSection from './ProductSection';
import QuestionBox from '../../components/QuestionBox';
import Highlight from '../../components/TextHighlight';
import Section from '../../components/Section';

const Question1 = () => {
  return (
    <>
      <Section bgColor="bg2" paddingT={60}>
        <QuestionBox>
          {'수학대왕 '}<Highlight text='프리미엄'/>{'은 \n'}
          {'무엇이 다른가요?'}
        </QuestionBox>
      </Section>
      <DifferenceSection />
      <ProductSection/>
    </>
  );
};

export default Question1;
