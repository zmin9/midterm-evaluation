import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          <meta charSet="utf-8"/>
          <link rel="icon" href={`${process.env.NODE_ENV !== 'production' ? '' : '/premium-page'}/mathking_logo.png`}/>
          <meta name="theme-color" content="#835EEB"/>
          <meta
            name="description"
            content="이제는 수학도 인공지능! 인공지능이 분석해주는 수학 실력과 나에게 꼭 필요한 문제만 풀고 싶다면 지금 바로 수학대왕으로! AI와 함께하는 수학공부는 수학대왕!"
          />
          <meta name="keywords" content="인공지능, AI, 수학, 학습"/>
          <link rel="apple-touch-icon" href="/mathking_logo.png"/>
          <link rel="manifest" href="/manifest.json"/>
          <link rel="stylesheet" as="style" crossOrigin="anonymous"
                href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.5/dist/web/variable/pretendardvariable.css"/>
          <link rel="canonical" href="https://zmin9.github.io/premium-page/"/>
          <meta property="og:url" content="https://zmin9.github.io/premium-page/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="수학대왕 - 인공지능으로 수학 끝내기"/>
          <meta property="og:description"
                content="이제는 수학도 인공지능! 인공지능이 분석해주는 수학 실력과 나에게 꼭 필요한 문제만 풀고 싶다면 지금 바로 수학대왕으로!"/>
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
