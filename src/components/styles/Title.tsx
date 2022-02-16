import React from "react";
import styled from "styled-components";

interface TitleProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?: number;
  children: React.ReactNode;
}

export const Title = ({ as, fontSize, children }: TitleProps) => {
  const TitleStyle = styled(as)`
    font-size: ${fontSize ? `${fontSize}rem` : `2.5rem`};
  `;
  return <TitleStyle>{children}</TitleStyle>;
};
