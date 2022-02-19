import React from "react";
import styled from "styled-components";
import { Image } from "./Image";
import Img from "../../assets/header-img.jpg";
import { Title } from "./Title";
import { FaUsers, FaUser, FaRulerCombined } from "react-icons/fa";

interface CardItemProps {
  numberOfChildren: number;
  numberOfadult: number;
  roomSize: number;
}

const CardItem = ({
  numberOfChildren,
  numberOfadult,
  roomSize,
}: CardItemProps) => {
  return (
    <>
      <CardItemStyle>
        <FaUsers size={20} />
        <span>{numberOfChildren} Children</span>
      </CardItemStyle>
      <CardItemStyle>
        <FaUser size={15} /> {numberOfadult} Adult
      </CardItemStyle>
      <CardItemStyle>
        <FaRulerCombined size={15} /> {roomSize} ft<sup>2</sup>
      </CardItemStyle>
    </>
  );
};

export const ImageBox = () => {
  return (
    <ImageContainer>
      <Image src={Img} />
      <Content>
        <PriceTag>$100/Night</PriceTag>
        <div>
          <Title as="h3" color="white" margin-bottom="1rem">
            Luxury Room
          </Title>
          <Card>
            <CardItem numberOfChildren={2} numberOfadult={2} roomSize={100} />
          </Card>
        </div>
      </Content>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  overflow: hidden;
  position: relative;

  border-radius: 2rem;
`;

const Content = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  inset: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
`;

const PriceTag = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 1rem;
  font-size: 1.3rem;
  font-weight: bold;
`;

const Card = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 5rems;
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  border-radius: 1rem;
`;

const CardItemStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: bold;
`;
