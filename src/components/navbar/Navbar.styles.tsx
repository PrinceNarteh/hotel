import styled from "styled-components";

export const NavbarContainer = styled.nav`
  height: 8rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5rem;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Icon = styled.div`
  padding: 0.6rem;
  background-color: #eee;
  border-radius: 0.5rem;
`;

export const Menu = styled.ul`
  height: 100%;
`;

export const MenuItem = styled.li`
  font-size: 1.5rem;
  display: inline-block;
  line-height: 6rem;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
`;
