import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './sections/Header';
import Introduction from './sections/Introduction/Introduction';
import Difference from './sections/difference/Difference';
import Footer from './sections/Footer';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Introduction/>
        <Difference/>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
