import React from "react";
import styled from "styled-components";

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: number;
  [key: string]: any;
  children: React.ReactNode;
}

export const Title = ({ as, fontSize, children, ...props }: TitleProps) => {
  const TitleStyle = styled(as)`
    font-size: clamp(2rem, ${fontSize ? `${fontSize}vw` : `2rem`}, 4rem);
    margin: 3rem 0;
    ${props}
  `;
  return <TitleStyle>{children}</TitleStyle>;
};
