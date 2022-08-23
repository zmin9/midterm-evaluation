import styled from 'styled-components';

const IframeContainer = styled.div`
  position: relative;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    border-radius: 5px;
    border-style: none;
    left: 0;
    top:0;
    width: 100%;
    height: 100%;
  }
`;

const Video = ({ url }: { url: string }) => (
  <IframeContainer>
    <iframe src={url}/>
  </IframeContainer>
);

export default Video;
