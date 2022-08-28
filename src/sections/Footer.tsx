import styled from 'styled-components';
import mediaQuery from '../styles/mediaQuery';
import typography from '../styles/typography';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg1};
  padding: 60px 20px;
  ${mediaQuery.large}{
    padding-right: 40px;
    padding-left: 40px;
  }
`;

const CompanyName = styled.div`
  color: ${({ theme }) => theme.headline};
  ${typography.textXSB}
`;

const CompanyAddress = styled.div`
  color: ${({ theme }) => theme.headline};
  ${typography.textXSR}
  white-space: pre-wrap;
  margin-top: 4px;
`;

const CompanyMores = styled.div`
  color: ${({ theme }) => theme.text2};
  ${typography.textXSM}
  margin-top: 16px;
  
  a {
  text-decoration: none;
  }
  * + * {
    margin-left: 16px;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CompanyName>
        (주)수학대왕
      </CompanyName>
      <CompanyAddress>
        {'사업자등록번호 : 809-87-01523\n통신판매업 : 2019-서울강남-04112호\n주소 : 서울특별시 강남구 삼성로 508, 1804호 (삼성동)'}
      </CompanyAddress>
      <CompanyMores>
        <a
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vSk3Pu7ySBM0-cMTDOmH3rF_7vyzPzzec_kFZRanJ3mvmuf6jLyUuHndrFNQoXQCr3SujRGGYennDy4/pub"
        >
          이용약관
        </a>
        <span>|</span>
        <a
          href="https://docs.google.com/document/u/1/d/e/2PACX-1vTVLKPyzChzxEaZChVDWZjtDz7Sgm_xD2-rDqMMCSdwzyx19Az0Q8nqacPQY0tkbHVszy9eA_eHyMR0/pub"
        >
          개인정보취급방침
        </a>
        <span>|</span>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQ1kh6vbZ6vqsmDlrASJTQWYmJKwA2ixeTaVZxacTBuh4MUG5aAiRg4fBBx7G74Ac4R5MIIvKqu2BO1/pub"
        >
          마케팅정보수신동의
        </a>
      </CompanyMores>
    </FooterContainer>
  );
};

export default Footer;
