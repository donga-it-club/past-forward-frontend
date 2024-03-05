import styled from 'styled-components';

const PageSideBar = () => {
  return <Template>side Bar</Template>;
};

export default PageSideBar;

const Template = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
  width: 400px;
  height: 100vh;
  color: white;
  background-color: black;
`;
