import Section from '../../components/Section';
import { Highlight } from '../../components/Text';
import Store1stImageS from '../../statics/store-1st-small.png';
import styled from 'styled-components';

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const WhoSection = () => {
  return (
    <Section bgColor="bg1" paddingT={60}>
      {/*TODO responsive*/}
      <Section.Title>
        {'국내 교육 1위 '}
        <span>
          {'인공지능 학습앱 '}
          <Highlight>
            수학대왕
            </Highlight>
          </span>
      </Section.Title>
      <Section.Content>
        <a href="https://platum.kr/archives/171236">
          관련 기사 보러가기
        </a>
      </Section.Content>
      <Section.Card>
        <Image alt="store-1st-app" src={Store1stImageS}/>
      </Section.Card>
    </Section>
  );
};

export default WhoSection;
