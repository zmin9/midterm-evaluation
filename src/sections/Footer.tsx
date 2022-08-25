import Typo from '../components/Typo';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg1};
  padding: 60px 20px;
`;

const CompanyName = styled.div`
  color: ${({ theme }) => theme.headline};
`;

const CompanyAddress = styled.div`
  margin-top: 4px;
  color: ${({ theme }) => theme.headline};
`;

const CompanyMores = styled.div`
  color: ${({ theme }) => theme.text2};
  margin-top: 16px;
  
  & > * + * {
    margin-left: 16px;
  }
`;

const NoDecorateA = styled.a`
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <CompanyName>
        <Typo type="textXSB">
          (주)수학대왕
        </Typo>
      </CompanyName>
      <CompanyAddress>
        <Typo type="textXSR">
          사업자등록번호 : 809-87-01523<br/>
          통신판매업 : 2019-서울강남-04112호<br/>
          주소 : 서울특별시 강남구 삼성로 508, 1804호 (삼성동)<br/>
        </Typo>
      </CompanyAddress>
      <CompanyMores>
        <NoDecorateA href='https://docs.google.com/document/u/1/d/e/2PACX-1vSk3Pu7ySBM0-cMTDOmH3rF_7vyzPzzec_kFZRanJ3mvmuf6jLyUuHndrFNQoXQCr3SujRGGYennDy4/pub'>
          <Typo type="textXSM">
            이용약관
          </Typo>
        </NoDecorateA>
        <Typo type="textXSM">|</Typo>
        <NoDecorateA href='https://docs.google.com/document/u/1/d/e/2PACX-1vTVLKPyzChzxEaZChVDWZjtDz7Sgm_xD2-rDqMMCSdwzyx19Az0Q8nqacPQY0tkbHVszy9eA_eHyMR0/pub'>
          <Typo type="textXSM">
            개인정보취급방침
          </Typo>
        </NoDecorateA>
        <Typo type="textXSM">|</Typo>
        <NoDecorateA href='https://docs.google.com/document/d/e/2PACX-1vQ1kh6vbZ6vqsmDlrASJTQWYmJKwA2ixeTaVZxacTBuh4MUG5aAiRg4fBBx7G74Ac4R5MIIvKqu2BO1/pub'>
          <Typo type="textXSM">
            마케팅정보수신동의
          </Typo>
        </NoDecorateA>
      </CompanyMores>
    </FooterContainer>
  );
};

export default Footer;
