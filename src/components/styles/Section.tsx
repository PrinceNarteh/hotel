import styled, { css } from "styled-components";

interface SectionProps {
  bgColor?: string;
}

export const Section = styled.section`
  width: 100%;

  ${({ bgColor }: SectionProps) =>
    bgColor &&
    css`
      background-color: ${bgColor};
    `}
`;
