import styled from 'styled-components';

/* navbar */
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const BGContainer = styled.div`
  display: flex;
`;

export const Container = styled.div`
  display: flex;
  align-self: flex-start;
  z-index: 1;
  width: 95%;
  margin: 30px;
  position: sticky;
  align-items: center;
`;

export const LeftBox = styled.div`
  flex: auto;
  margin: '10px';
  justify-content: 'flex-start';
`;

export const RightBox = styled.div`
  flex: auto;
  text-align: center;
`;

interface IconProps {
  'border-radius': string;
}

export const IconStyle = styled.button<IconProps>`
  width: auto;
  border-radius: ${props => props['border-radius']};
  display: inline-block;
  border: 2px solid black;
  padding: 5px;
  margin: 5px;
`;

export const OrdinaryButton = styled.button`
  background: #111b47;
  color: white;
  margin: 10px 20px;
  border: 2px solid;
  border-radius: 3px;
  font-size: 20px;
  padding: 10px;
  border-radius: 15%;
`;

export const Link = styled.a`
  text-decoration-line: none;
  color: #505f98;
  margin: 10px;
`;

/* sideBar*/
export const SideBarBGContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 400px;
  min-width: 300px;
  height: 120vh;
  color: white;
  background-color: #f8f8f8;
  z-index: 999;
`;

export const LogoBox = styled.div``;

interface ColorProps {
  color: string;
}

export const LogoText = styled.a<ColorProps>`
  display: flex;
  width: 40vh;
  color: ${props => props['color']};
  font-size: 30px;
  font-weight: bold;
  border: 20px;
  padding: 10px 20px;
  text-decoration: none;
  padding-top: 10px;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px 25%;
  margin: 0 auto;
  align-items: center;
`;

export const ProfileLink = styled(ProfileBox)`
  a {
    text-decoration: none;
  }
`;

export const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const MainName = styled.h1`
  color: #111b47;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 0;
`;

export const MailName = styled.h2`
  color: #d2d2d2;
`;

export const DivingLine = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 0;
  border: 1px solid #111b47;
`;

export const GetStaredButton = styled.button`
  padding: 5px;
  background-color: #111b47;
  color: white;
  border-radius: 5px;
`;

export const MenuText = styled.a`
  color: #111b47;
  text-decoration: none;
`;

export const AlarmContents = styled.div`
  background-color: #f8f8f8;
  width: 90%;
  height: auto;
  border-radius: 10px;
  padding: 2px 5px;
  margin-bottom: 20px;
`;
