import React from "react";
import styled from "styled-components";
import HeaderImg from "../../assets/header-img.jpg";
import { Column } from "../styles/Column";
import { Container } from "../styles/Container";
import { Heading } from "../styles/Heading";
import { Image } from "../styles/Image";
import { Paragraph } from "../styles/Paragraph";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";

export const Header = () => {
  return (
    <HeaderContainer height={100} padding-bottom="4rem">
      <Container>
        <Column alignItems="flex-start">
          <Heading>Welcome Home</Heading>
          <Title as="h1" fontSize={4}>
            Our World is your playground
          </Title>
          <Paragraph width={80}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed, veritatis magnam harum labore praesentium natus alias, ex totam
            minima quod est doloremque?
          </Paragraph>
        </Column>
        <Column>
          <HeaderImage src={HeaderImg} />
        </Column>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Section)`
  height: calc(100vh - 6rem);
`;

const HeaderImage = styled(Image)`
  border-bottom-left-radius: 5rem;
`;
