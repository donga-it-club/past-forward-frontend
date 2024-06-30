import styled from 'styled-components';

export const Background = styled.div`
  background-color: #111b47;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WhiteContainer = styled.div`
  background-color: white;
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const TitleCircle = styled.div`
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    justify-content: center;
    background-color: #111b47;
    border-radius: 50%;
    position: absolute;
    top: -150px;
    z-index: 0;
  }
`;
