import React from "react";
import styled from "styled-components";

interface ColumnProps {
  [key: string]: any;
  children?: React.ReactNode;
}

export const Column = ({ children, ...props }: ColumnProps) => {
  const ColumnStyle = styled.div`
    flex: 1;
    ${props}
  `;

  return <ColumnStyle>{children}</ColumnStyle>;
};
