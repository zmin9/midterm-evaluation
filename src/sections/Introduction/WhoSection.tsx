import Section from '../../components/Section';
import Highlight from '../../components/TextHighlight';
import ImagesByMediaQuery from '../../components/image/ImagesByMediaQuery';
import Store1stImgS from '../../../public/images/store-1st-small.png';
import Store1stImgL from '../../../public/images/store-1st-large.png';

const WhoSection = () => {
  return (
    <Section bgColor="bg1" paddingT={60}>
      {/*TODO responsive*/}
      <Section.Title>
        {'국내 교육 1위 \n'}
        {'인공지능 학습앱 '}
        <Highlight text='수학대왕'/>
      </Section.Title>
      <Section.Content>
        <a href="https://platum.kr/archives/171236">
          관련 기사 보러가기
        </a>
      </Section.Content>
      <Section.Card>
        <ImagesByMediaQuery small={Store1stImgS} large={Store1stImgL} widthS={335} widthL={944} alt="어플 순위 1위 수학대왕"/>
      </Section.Card>
    </Section>
  );
};

export default WhoSection;
