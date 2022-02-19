import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";
import { Section } from "../styles/Section";
import { Title } from "../styles/Title";
import { Paragraph } from "../styles/Paragraph";
import { Image } from "../styles/Image";
import Beach from "../../assets/beach.jpg";

export const Report = () => {
  return (
    <Section padding="10rem 0">
      <Container>
        <Box>
          <Image src={Beach} />
          <Content>
            <Title as="h3" fontSize={4}>
              Beach Hotel More than a stay
            </Title>
            <Paragraph width={90}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              totam, dolorem blanditiis quae suscipit quisquam provident tempora
              voluptatibus!
            </Paragraph>
          </Content>
        </Box>
      </Container>
    </Section>
  );
};

const Box = styled.div`
  max-width: 85%;
  margin: 0 auto;
  display: flex;
  position: relative;
  padding-left: 4rem;
  background-color: white;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;

  img {
    max-width: 50rem;
    position: relative;
    border-radius: 1rem;
    top: -4rem;
  }
`;

const Content = styled.div`
  padding-left: 4rem;
`;
