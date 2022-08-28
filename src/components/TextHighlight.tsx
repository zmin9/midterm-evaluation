import styled from 'styled-components';

const TextHighlight = styled.span`
  color: ${({ theme }) => theme.highlight};
`;

const Highlight = ({ text }: { text: string }) => <TextHighlight>{text}</TextHighlight>;

export default Highlight;
