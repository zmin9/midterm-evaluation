import GlobalStyle from '../src/styles/GlobalStyle';
import theme from '../src/styles/theme';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>수학대왕 - 인공지능으로 수학 끝내기</title>
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;


