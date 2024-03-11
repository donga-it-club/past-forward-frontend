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

export const IconStyle = styled.div<{ borderRadius: string; width: string }>`
  width: ${props => props.width};
  border-radius: ${props => props.borderRadius};
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
  height: 100vh;
  color: white;
  background-color: #f8f8f8;
  z-index: 999;
`;

export const LogoBox = styled.div`
  height: auto;
  width: 200px;
  padding-top: 10px;
`;

export const LogoText = styled.a`
  color: #111b47;
  font-size: 30px;
  font-weight: bold;
  border: 20px;
  padding: 10px;
  text-decoration: none;
`;

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px 25%;
  margin: 0 auto;
  align-items: center;
`;

export const MiniBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #111b47;
  padding: 10px 0;
  border: 3px solid #d2d2d2;
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
