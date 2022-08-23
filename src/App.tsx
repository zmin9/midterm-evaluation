import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import StoryBook from './StoryBook';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <StoryBook/>
      </ThemeProvider>
    </>
  );
}

export default App;
