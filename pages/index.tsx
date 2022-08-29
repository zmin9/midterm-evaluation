import styled  from 'styled-components';
import Header from '../src/sections/Header';
import Introduction from '../src/sections/Introduction/Introduction';
import Question1 from '../src/sections/question1/Question1';
import Question2 from '../src/sections/question2/Question2';
import Question3 from '../src/sections/question3/Question3';
import PremiumTalk from '../src/sections/PremiumTalk';
import Footer from '../src/sections/Footer';

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
      <Footer/>
    </Background>
  );
};

export default Index;
