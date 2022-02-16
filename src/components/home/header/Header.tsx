import React from "react";
import { theme } from "../../../theme/theme";
import { Column } from "../../styles/Column";
import { Container } from "../../styles/Container";
import { Heading } from "../../styles/Heading";
import { Image } from "../../styles/Image";
import { Section } from "../../styles/Section";
import { Title } from "../../styles/Title";
import FeatureImg from "../../../assets/feature.jpg";

export const Header = () => {
  return (
    <Section bgColor={theme.colors.white}>
      <Container>
        <Column>
          <Heading>Welcome Home</Heading>
          <Title as="h1" fontSize={4}>
            Our World is your playground
          </Title>
        </Column>
        <Column>
          <Image src={FeatureImg} />
        </Column>
      </Container>
    </Section>
  );
};
