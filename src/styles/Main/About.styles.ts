import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-left: 115px;
  padding-right: 115px;
  padding-top: 30px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: auto;
  }
`;
export const Img = styled.img`
  margin-top: 40px;
  width: 75%;
  height: 70%;
  align-content: center;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: auto;
  }
`;
