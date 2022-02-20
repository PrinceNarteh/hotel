import React from "react";
import styled from "styled-components";
import { Column } from "../styles/Column";
import { Container } from "../styles/Container";
import { Row } from "../styles/Row";
import { Section } from "../styles/Section";
import { SectionHeader } from "../styles/SectionHeader";
import { RiRestaurant2Line } from "react-icons/ri";
import { FaSwimmer } from "react-icons/fa";
import { BiSpa } from "react-icons/bi";
import { GiSuitcase } from "react-icons/gi";

interface CardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}
const services: CardProps[] = [
  {
    icon: <RiRestaurant2Line size={50} color="crimson" />,
    title: "Restaurant",
    subtitle: "Breakfast & Dinner",
  },
  {
    icon: <GiSuitcase size={50} color="#777" />,
    title: "Best Suites",
    subtitle: "Cool View",
  },
  {
    icon: <BiSpa size={50} color="lime" />,
    title: "SPA & Wellness",
    subtitle: "Open Daily",
  },
  {
    icon: <FaSwimmer size={50} color="#0DAEC3" />,
    title: "Swimming Pool",
    subtitle: "Open Daily",
  },
];

const Card = ({ icon, title, subtitle }: CardProps) => {
  return (
    <CardStyle>
      <div className="icon">{icon}</div>
      <div className="body">
        <h6>{title}</h6>
        <p>{subtitle}</p>
      </div>
    </CardStyle>
  );
};

export const Services = () => {
  return (
    <Section background-color="#fff">
      <Container fluid>
        <SectionHeader title="Services" />
      </Container>
      <Container fluid>
        <Column>
          {services.map((service, idx) => (
            <Card key={idx} {...service} />
          ))}
        </Column>
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

const CardStyle = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  gap: 1rem;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;

  .icon {
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 4rem;

    h6 {
      text-transform: uppercase;
      font-size: 1.4rem;
    }

    p {
      font-size: 1.2rem;
      color: #777;
      font-weight: bold;
    }
  }
`;
