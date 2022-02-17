import React from "react";
import styled from "styled-components";
import { Container } from "./Container";
import { Title } from "./Title";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <SectionHeaderContainer>
      <Title as="h3">{title}</Title>
      <span>See more</span>
    </SectionHeaderContainer>
  );
};

const SectionHeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 3rem;
    text-transform: uppercase;
  }
`;
