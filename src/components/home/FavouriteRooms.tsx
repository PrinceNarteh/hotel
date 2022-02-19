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
      <ImageBox />
    </Section>
  );
};
