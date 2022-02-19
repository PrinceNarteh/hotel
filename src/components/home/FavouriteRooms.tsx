import React from "react";
import styled from "styled-components";
import { Container } from "../styles/Container";
import { ImageBox } from "../styles/ImageBox";
import { Section } from "../styles/Section";
import { SectionHeader } from "../styles/SectionHeader";

export const FavouriteRooms = () => {
  return (
    <Section>
      <Container fluid>
        <SectionHeader title="Our Favourite Rooms" />
      </Container>
      <Container fluid>
        <ImageSection>
          <ImageBox />
          <GridSection>
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
          </GridSection>
        </ImageSection>
      </Container>
    </Section>
  );
};

const ImageSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 2rem;

  @media screen and (max-width: 140rem) {
    grid-template-columns: 1fr;
  }
`;

const GridSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 2rem;
  flex-wrap: wrap;
`;
