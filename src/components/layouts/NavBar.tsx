import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  margin: 30px;
  position: sticky;
  display: flex;
  align-items: center;
`;

const OrdinaryButton = styled.button`
  background: #111b47;
  color: white;
  margin: 10px 20px;
  border: 2px solid;
  border-radius: 3px;
  font-size: 20px;
  padding: 10px;
`;

const Link = styled.a`
  text-decoration-line: none;
  color: #505f98;
  margin: 10px 20px;
`;

const LogoText = styled.a`
  padding: 10px;
  border: 20px;
  color: #111b47;
  font-size: 30px;
  font-weight: bold;
`;

const NavBar: React.FC = () => {
  return (
    <Box>
      <img src='public/logo.png' />
      <LogoText>Past Forward</LogoText>
      <Link href='#'>Home</Link>
      <Link href='#'>Template</Link>
      <Link href='#'>About us</Link>
      <Link href='#'>Contact</Link>
      <OrdinaryButton>Create</OrdinaryButton>
    </Box>
  );
};

export default NavBar;
