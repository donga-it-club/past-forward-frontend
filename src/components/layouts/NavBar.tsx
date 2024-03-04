import styled from 'styled-components';
import { Gear, Bell, PersonCircle } from 'react-bootstrap-icons';

const NavBar = () => {
  return (
    <Container>
      <LeftBox>
        <Link href='#'>Home</Link>
        <Link href='#'>Template</Link>
        <Link href='#'>About us</Link>
        <Link href='#'>Contact</Link>
        <OrdinaryButton>Create</OrdinaryButton>
      </LeftBox>

      <RightBox>
        <IconStyle borderRadius='10px'>
          <div style={{ display: 'flex' }}>
            <PersonCircle style={{ padding: '5px' }} />
            <p style={{ alignItems: 'center' }}>Clayton Santos</p>
          </div>
        </IconStyle>
        <IconStyle borderRadius='45%'>
          <Gear />
        </IconStyle>
        <IconStyle borderRadius='50%'>
          <Bell />
        </IconStyle>
        <Link href='#'>Logout</Link>
      </RightBox>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  display: flex;
  width: 100%;
  margin: 30px;
  position: sticky;
  display: flex;
  align-items: center;
`;

const LeftBox = styled.div`
  flex: auto;
  text-align: center;
`;

const RightBox = styled.div`
  flex: auto;
  flex-direction: row;
  text-align: center;
`;

const IconStyle = styled.div<{ borderRadius: string }>`
  border-radius: ${(props) => props.borderRadius};
  display: inline-block;
  border: 2px solid black;
  padding: 5px;
  margin: 5px;
`;

const OrdinaryButton = styled.button`
  background: #111b47;
  color: white;
  margin: 10px 20px;
  border: 2px solid;
  border-radius: 3px;
  font-size: 20px;
  padding: 10px;
  border-radius: 15%;
`;

const Link = styled.a`
  text-decoration-line: none;
  color: #505f98;
  margin: 10px;
`;
