import React from "react";
import { theme } from "../../../theme/theme";
import { Column } from "../../styles/Column";
import { Container } from "../../styles/Container";
import { Heading } from "../../styles/Heading";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";

export const Header = () => {
  return (
    <Section bgColor={theme.colors.white}>
      <Container>
        <Column>
          <Heading>Welcome Home</Heading>
          <Title as="h1">Our World is your playground</Title>
        </Column>
      </Container>
    </Section>
  );
};
