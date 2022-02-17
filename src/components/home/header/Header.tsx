import React from "react";
import { theme } from "../../../theme/theme";
import { Column } from "../../styles/Column";
import { Container } from "../../styles/Container";
import { Heading } from "../../styles/Heading";
import { Image } from "../../styles/Image";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";
import HeaderImg from "../../../assets/header-img.jpg";
import styled from "styled-components";
import { Paragraph } from "../../styles/Paragraph";

export const Header = () => {
  return (
    <HeaderContainer bgColor={theme.colors.white} height={100}>
      <Container>
        <Column alignItems="flex-start">
          <Heading>Welcome Home</Heading>
          <Title as="h1" fontSize={4}>
            Our World is your playground
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            sed, veritatis magnam harum labore praesentium natus alias, ex totam
            minima quod est doloremque?
          </Paragraph>
        </Column>
        <Column>
          <Image src={HeaderImg} />
        </Column>
      </Container>
    </HeaderContainer>
  );
};

const HeaderContainer = styled(Section)`
  height: calc(100vh - 8rem);
`;
