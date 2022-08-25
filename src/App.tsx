import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './sections/Header';
import Introduction from './sections/Introduction/Introduction';
import Footer from './sections/Footer';
import Question1 from './sections/question1/Question1';
import Question2 from './sections/question2/Question2';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Introduction/>
        <Question1/>
        <Question2/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
