import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";

export const Facts = () => {
  return (
    <Section padding="5rem 0" background-color="#fff">
      <Container>
        <Card>
          <Title as="h6" fontSize={4} margin-bottom="1rem">
            20<small>+</small>
          </Title>
          <Description>Various Services</Description>
        </Card>
        <Card>
          <Title as="h6" fontSize={4}>
            50<small>+</small>
          </Title>
          <Description>Different Rooms</Description>
        </Card>
        <Card>
          <Title as="h6" fontSize={4}>
            5<small>+</small>
          </Title>
          <Description>Experience</Description>
        </Card>
      </Container>
    </Section>
  );
};

const Card = styled.div`
  flex: 1;
  min-width: 20rem;
  text-align: center;
`;

const Description = styled.p`
  text-transform: uppercase;
  font-size: 2rem;
`;
