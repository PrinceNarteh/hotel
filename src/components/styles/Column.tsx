import React from "react";
import styled from "styled-components";

interface ColumnProps {
  [key: string]: any;
  alignItems?: "flex-start" | "center" | "flex-end";
  children?: React.ReactNode;
}

export const Column = ({ children, alignItems, ...props }: ColumnProps) => {
  const ColumnStyle = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${alignItems ? alignItems : "flex-start"};
    ${props}
  `;

  return <ColumnStyle>{children}</ColumnStyle>;
};
