import React from "react";
import styled from "styled-components";
import { Column } from "../styles/Column";
import { Container } from "../styles/Container";
import { ImageBox } from "../styles/ImageBox";
import { Row } from "../styles/Row";
import { Section } from "../styles/Section";
import { SectionHeader } from "../styles/SectionHeader";

export const FavouriteRooms = () => {
  return (
    <Section background-color="#fff">
      <Container fluid>
        <SectionHeader title="Our Favourite Rooms" />
      </Container>
      <Container fluid>
        <ImageSection>
          <Column width="30%">
            <ImageBox />
          </Column>
          <Column width="70%">
            <GridSection>
              <ImageBox />
              <ImageBox />
              <ImageBox />
              <ImageBox />
            </GridSection>
          </Column>
        </ImageSection>
      </Container>
    </Section>
  );
};

const ImageSection = styled(Row)`
  gap: 2rem;
  @media screen and (max-width: 50rem) {
    flex-direction: column;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  flex-wrap: wrap;
`;
