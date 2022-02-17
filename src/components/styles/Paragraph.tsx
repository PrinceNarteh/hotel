import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 1.5rem;
  width: ${({ width }: { width?: number }) => (width ? `${width}%` : `100%`)};
  color: #555;
  line-height: 1.5;
`;
