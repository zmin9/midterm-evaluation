import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import Header from './sections/Header';
import Introduction from './sections/Introduction/Introduction';
import Difference from './sections/difference/Difference';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Header/>
        <Introduction/>
        <Difference/>
      </ThemeProvider>
    </>
  );
}

export default App;
