import React from "react";
import styled, { css } from "styled-components";

interface SectionProps {
  bgColor?: string;
  height?: number;
  [key: string]: any;
  children?: React.ReactNode;
}

export const Section = ({
  bgColor,
  height,
  children,
  ...props
}: SectionProps) => {
  const SectionStyle = styled.section`
    width: 100%;

    ${({ bgColor }: SectionProps) =>
      bgColor &&
      css`
        background-color: ${bgColor};
      `}

    ${({ height }: SectionProps) =>
      height &&
      css`
        height: ${height}vh;
      `}
      
    ${props}
  `;

  return <SectionStyle>{children}</SectionStyle>;
};
