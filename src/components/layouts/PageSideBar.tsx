import { CaretRightFill, PeopleFill, Person, PersonCircle, PersonFill } from 'react-bootstrap-icons';
import styled from 'styled-components';

const PageSideBar = () => {
  return (
    <Template>
      <LogoBox>
        <LogoText>Past Forward</LogoText>
      </LogoBox>
      <ProfileBox>
        <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
        <MainName>Clayton Santos</MainName>
        <MailName>Clayton@gmail.com</MailName>
      </ProfileBox>
      <MiniBox>
        <div style={{ padding: '2px 0' }}>
          <CaretRightFill /> <Person style={{ marginRight: '5px' }} />
          Personal Retro
        </div>
        <Line />
      </MiniBox>
      <MiniBox>
        <div style={{ padding: '2px 0' }}>
          <CaretRightFill /> <PeopleFill style={{ marginRight: '5px' }} />
          Team Retro
        </div>
        <Line />
      </MiniBox>
    </Template>
  );
};

export default PageSideBar;

const Template = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  height: 100vh;
  color: white;
  background-color: #f8f8f8;
  z-index: 999;
`;

const LogoBox = styled.div`
  height: auto;
  width: 200px;
  padding-top: 10px;
`;

const LogoText = styled.a`
  color: #111b47;
  font-size: 30px;
  font-weight: bold;
  border: 20px;
  padding: 10px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px 25%;
  margin: 0 auto;
  align-items: center;
`;

const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #111b47;
  padding: 10px 0;
  border: 3px solid #d2d2d2;
`;

const MainName = styled.h1`
  color: #111b47;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`;

const MailName = styled.h2`
  color: #d2d2d2;
`;

const Line = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 0;
  border: 1px solid #111b47;
`;
