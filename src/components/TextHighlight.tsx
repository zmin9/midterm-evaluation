import styled from 'styled-components';

const TextHighlight = styled.strong`
  font-weight: inherit;
  color: ${({ theme }) => theme.highlight};
`;

const Highlight = ({ text }: { text: string }) => <TextHighlight>{text}</TextHighlight>;

export default Highlight;
