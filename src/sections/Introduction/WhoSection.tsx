import Store1stImgL from '../../../public/images/store-1st-large.png';
import Store1stImgS from '../../../public/images/store-1st-small.png';
import Section from '../../components/Section';
import ImagesByMediaQuery from '../../components/image/ImagesByMediaQuery';

const WhoSection = () => {
  return (
    <Section bgColor="bg1" paddingT={60}>
      <Section.Title>
        {'국내 교육 1위 \n'}
        {'인공지능 학습앱 '}
        <span>수학대왕</span>
      </Section.Title>
      <Section.Content>
        <a href="https://platum.kr/archives/171236">
          관련 기사 보러가기
        </a>
      </Section.Content>
      <Section.Card>
        <ImagesByMediaQuery small={Store1stImgS} large={Store1stImgL} widthS={335} widthL={944} alt="어플 순위 1위 수학대왕" priority/>
      </Section.Card>
    </Section>
  );
};

export default WhoSection;
