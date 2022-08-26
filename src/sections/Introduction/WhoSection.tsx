import Section from '../../components/Section';
import { Highlight } from '../../components/Typo';
import ImagesByMediaQuery from '../../components/image/ImagesByMediaQuery';

const WhoSection = () => {
  return (
    <Section bgColor="bg1" paddingT={60}>
      {/*TODO responsive*/}
      <Section.Title>
        {'국내 교육 1위 \n'}
        {'인공지능 학습앱 '}
        <Highlight>
          수학대왕
        </Highlight>
      </Section.Title>
      <Section.Content>
        <a href="https://platum.kr/archives/171236">
          관련 기사 보러가기
        </a>
      </Section.Content>
      <Section.Card>
        <ImagesByMediaQuery small='/images/store-1st-small.png' large='/images/store-1st-large.png' alt="store-1st-app"/>
      </Section.Card>
    </Section>
  );
};

export default WhoSection;
