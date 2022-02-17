import styled, { css } from "styled-components";

interface ContainerProps {
  fluid?: boolean;
}

export const Container = styled.div`
  max-width: 120rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;

  ${({ fluid }: ContainerProps) =>
    fluid &&
    css`
      max-width: 90%;
    `}
`;
