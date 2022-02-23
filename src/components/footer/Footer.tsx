import React from "react";
import {
  BiEnvelope,
  BiHotel,
  BiLocationPlus,
  BiPhoneCall,
} from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Column } from "../styles/Column";
import { Container } from "../styles/Container";
import { Section } from "../styles/Section";

const Item = ({ icon, desc }: { icon: React.ReactNode; desc: string }) => {
  const ItemStyle = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    .icon {
      margin: 1rem 2rem 1rem 0;
      font-size: 2rem;
      display: flex;
      align-items: center;
    }

    span {
      font-size: 1.3rem;
    }
  `;
  return (
    <ItemStyle>
      <div className="icon">{icon}</div>
      <span>{desc}</span>.
    </ItemStyle>
  );
};

export const Footer = () => {
  return (
    <Section background-color={theme.colors.armyGreen} padding="5rem 0">
      <Container fluid align-items="flex-start" gap="2rem">
        <FooterColumn>
          <Head>
            <BiHotel size={50} color="#fff" />
          </Head>
          <Content>
            <Item icon={<BiEnvelope />} desc="example@email.com" />
            <Item icon={<BiPhoneCall />} desc="(233) 024 123 4567" />
            <Item
              icon={<BiLocationPlus />}
              desc="Near Old WEAC, Adisadel Estate, Cape Coast"
            />
          </Content>
        </FooterColumn>
        <FooterColumn>
          <Head>
            <h6>Useful Links</h6>
          </Head>
          <Content>
            <FooterLinksSection>
              <FooterLink to="#">About Us</FooterLink>
              <FooterLink to="#">Rooms</FooterLink>
              <FooterLink to="#">Services</FooterLink>
              <FooterLink to="#">Contact</FooterLink>
              <FooterLink to="#">Gallery</FooterLink>
              <FooterLink to="#">Blog</FooterLink>
            </FooterLinksSection>
          </Content>
        </FooterColumn>
        <FooterColumn>
          <Head>
            <h6>Stay In Touch</h6>
          </Head>
          <Content></Content>
        </FooterColumn>
      </Container>
    </Section>
  );
};

const FooterColumn = styled(Column)`
  flex: 1;
  padding: 10rem;
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
      height: 0.2rem;
      width: 5rem;
      background-color: #777;
      margin-top: 0.3rem;
    }
  }
`;

const Content = styled.div``;
const FooterLinksSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.3rem;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  flex: 1;
  flex-basis: 15rem;
`;
