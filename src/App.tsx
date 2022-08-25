import styled from 'styled-components';
import Header from './sections/Header';
import Introduction from './sections/Introduction/Introduction';
import Footer from './sections/Footer';
import Question1 from './sections/question1/Question1';
import Question2 from './sections/question2/Question2';
import Question3 from './sections/question3/Question3';
import PremiumTalk from './sections/PremiumTalk';
import Typo from './components/Typo';
import mediaQuery from './styles/mediaQuery';

const ResponseButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: ${({ theme }) => theme.onButton};

  position: sticky;
  bottom: 20px;
  display: block;
  margin: 0 auto 40px;

  border-radius: 9999px;
  border: none;
  padding: 12px;

  width: calc(100% - 40px);
  max-width: 732px;


  ${mediaQuery.large} {
    font-size: 20px;
    line-height: 30px;
  }
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.bg2};
`;

function App() {
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
}

export default App;
