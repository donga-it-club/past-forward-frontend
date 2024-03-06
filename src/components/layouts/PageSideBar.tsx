import styled from 'styled-components';

const PageSideBar = () => {
  return (
    <Template>
      <LogoText>Past Forward</LogoText>
    </Template>
  );
};

export default PageSideBar;

const LogoText = styled.a`
  padding: 10px;
  border: 20px;
  color: #111b47;
  font-size: 30px;
  font-weight: bold;
`;

const Template = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
  width: 400px;
  height: 100vh;
  color: white;
  background-color: #e6e6e6;
`;
