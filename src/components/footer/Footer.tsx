import React from "react";
import { BiHotel } from "react-icons/bi";
import styled from "styled-components";
import { theme } from "../../theme/theme";
import { Column } from "../styles/Column";
import { Container } from "../styles/Container";
import { Section } from "../styles/Section";
import { BiEnvelope, BiPhoneCall, BiLocationPlus } from "react-icons/bi";

const Item = ({ icon, desc }: { icon: React.ReactNode; desc: string }) => {
  const ItemStyle = styled.div`
    color: #fff;
    display: flex;
    align-items: center;

    .icon {
      margin: 1rem 2rem 1rem 0;
      font-size: 3rem;
      display: flex;
      align-items: center;
    }

    span {
      font-size: 1.5rem;
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
          <Content></Content>
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
