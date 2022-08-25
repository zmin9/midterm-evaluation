import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './sections/Header';
import Introduction from './sections/Introduction/Introduction';
import Footer from './sections/Footer';
import Question1 from './sections/question1/Question1';
import Question2 from './sections/question2/Question2';
import Question3 from './sections/question3/Question3';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Introduction/>
        <Question1/>
        <Question2/>
        <Question3/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
