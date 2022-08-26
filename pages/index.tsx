import styled  from 'styled-components';
import Header from '../src/sections/Header';
import Introduction from '../src/sections/Introduction/Introduction';
import Question1 from '../src/sections/question1/Question1';
import Question2 from '../src/sections/question2/Question2';
import Question3 from '../src/sections/question3/Question3';
import PremiumTalk from '../src/sections/PremiumTalk';
import Typo from '../src/components/Typo';
import Footer from '../src/sections/Footer';
import mediaQuery from '../src/styles/mediaQuery';

const ResponseButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.onButton};

  position: sticky;
  bottom: 20px;
  display: block;
  margin: 0 auto 40px;

  border-radius: 9999px;
  border: none;
  padding: 12px 0;

  width: calc(100% - 40px);
  max-width: 732px;


  ${mediaQuery.large} {
    font-size: 20px;
    line-height: 30px;
    padding: 15px 0;
  }
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.bg2};
`;

const Index = () => {
  return (
    <Background>
      <Header/>
      <Introduction/>
      <Question1/>
      <Question2/>
      <Question3/>
      <PremiumTalk/>
      <ResponseButton onClick={() => alert('결제 성공')}>
        <Typo type="textMB">
          자녀분의 요청에 응답하기
        </Typo>
      </ResponseButton>
      <Footer/>
    </Background>
  );
};

export default Index;
