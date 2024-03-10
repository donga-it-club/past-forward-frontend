import styled from 'styled-components';
import { Gear, Bell, PersonCircle } from 'react-bootstrap-icons';
import { ReactNode } from 'react';
import PageSideBar from './PageSideBar';

interface Props {
  children: ReactNode;
}

const NavBar = ({ children }: Props) => {
  return (
    <BGContainer>
      <PageSideBar />
      <MainContainer>
        <Container>
          <LeftBox>
            <Link href="#">Home</Link>
            <Link href="#">Template</Link>
            <Link href="#">About us</Link>
            <Link href="#">Contact</Link>
            <OrdinaryButton>Create</OrdinaryButton>
          </LeftBox>

          <RightBox>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              <IconStyle borderRadius="10px" width="auto">
                <div
                  style={{
                    display: 'flex',
                    textAlign: 'center',
                    alignContent: 'center',
                    margin: '2px',
                  }}
                >
                  <PersonCircle style={{ padding: '5px' }} />
                  <p style={{ margin: 'auto 10px' }}>Clayton Santos</p>
                </div>
              </IconStyle>

              <IconStyle borderRadius="45%" width="20px">
                <Gear />
              </IconStyle>
              <IconStyle borderRadius="50%" width="20px">
                <Bell />
              </IconStyle>
              <Link href="#">Logout</Link>
            </div>
          </RightBox>
        </Container>
        <main>{children}</main>
      </MainContainer>
    </BGContainer>
  );
};

export default NavBar;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BGContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  align-self: flex-start;
  z-index: 1;
  width: 95%;
  margin: 30px;
  position: sticky;
  align-items: center;
`;

const LeftBox = styled.div`
  flex: auto;
  margin: '10px';
  justify-content: 'flex-start';
`;

const RightBox = styled.div`
  flex: auto;
  text-align: center;
`;

export const IconStyle = styled.div<{ borderRadius: string; width: string }>`
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
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
