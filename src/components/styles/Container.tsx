import React from "react";
import styled, { css } from "styled-components";

interface ContainerProps {
  fluid?: boolean;
  [key: string]: any;
  children: React.ReactNode;
}

export const Container = ({ fluid, children, ...props }: ContainerProps) => {
  const ContainerStyle = styled.div`
    max-width: 120rem;
    margin-left: auto;
    margin-right: auto;
    display: flex;

    ${fluid &&
    css`
      max-width: 90%;
    `}

    ${props}
  `;

  return <ContainerStyle>{children}</ContainerStyle>;
};
