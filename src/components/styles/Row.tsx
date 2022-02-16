import styled, { css } from "styled-components";

interface RowProps {
  gap?: number;
}

export const Row = styled.div`
  display: flex;
  align-items: center;
  ${({ gap }: RowProps) =>
    gap &&
    css`
      gap: ${gap}rem;
    `}
`;
