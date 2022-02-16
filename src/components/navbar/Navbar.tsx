import React from "react";
import {
  Button,
  Icon,
  Logo,
  Menu,
  MenuItem,
  NavbarContainer,
} from "./Navbar.styles";
import { BiCart, BiHotel } from "react-icons/bi";
import { Row } from "../styles/Row";

export const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo>
        <BiHotel size={50} />
      </Logo>
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Rooms</MenuItem>
        <MenuItem>Services</MenuItem>
        <MenuItem>Gallery</MenuItem>
        <MenuItem>About Us</MenuItem>
        <MenuItem>Contact Us</MenuItem>
      </Menu>
      <Row gap={2}>
        <Icon>
          <BiCart size={20} />
        </Icon>
        <Button>Login</Button>
      </Row>
    </NavbarContainer>
  );
};
