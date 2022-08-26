import { AppProps } from 'next/app';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../src/styles/GlobalStyle';
import Head from 'next/head';
import { GlobalVariable } from '../src/createCtx';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>수학대왕 - 인공지능으로 수학 끝내기</title>
      </Head>
      <GlobalVariable value={process.env.NODE_ENV !== 'production' ? '' : '/premium-page'}>
        <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Component {...pageProps} />
        </ThemeProvider>
      </GlobalVariable>
    </>
  );
}

export default MyApp;


