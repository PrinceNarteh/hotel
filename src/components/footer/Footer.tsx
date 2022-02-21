import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Column } from "../styles/Column";
import { Container } from "../styles/Container";
import { Row } from "../styles/Row";
import { Section } from "../styles/Section";

export const Footer = () => {
  return (
    <Section background-color={theme.colors.armyGreen} padding="10rem 0">
      <Container fluid>
        <Row>
          <FooterColumn>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            repudiandae dignissimos consequatur eaque. Dolore non consequuntur
            eos laboriosam laudantium. Sunt ipsum quo dignissimos dolorum
            laboriosam necessitatibus maxime eius quidem vitae.
          </FooterColumn>
          <FooterColumn>
            <Head>
              <h6>Useful Links</h6>
            </Head>
            <div className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              vero eligendi asperiores debitis eaque consectetur sunt nisi fugit
              amet dolorum, quibusdam blanditiis, quasi nemo accusamus maiores
              nam consequuntur nesciunt animi.
            </div>
          </FooterColumn>
          <FooterColumn>
            <Head>
              <h6>Stay In Touch</h6>
            </Head>
          </FooterColumn>
        </Row>
      </Container>
    </Section>
  );
};

const FooterColumn = styled(Column)`
  flex: 1;
  justify-content: flex-start;
`;

const Head = styled.div`
  margin-bottom: 2rem;

  h6 {
    color: #ccc;
    font-size: 2rem;
    text-transform: uppercase;

    &::after {
      content: "";
      display: block;
      height: 0.4rem;
      width: 5rem;
      background-color: #777;
      margin-top: 0.3rem;
    }
  }
`;
