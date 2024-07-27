import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 350;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 400;
`;

export const Modal = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
  width: 600px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 350px;
    /* padding: 10px 20px 10px 20px; */
  }
`;

export const Top = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;

  justify-content: space-between;
`;

export const Title = styled.p`
  color: #6c6c6c;
`;

export const Bottom = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProjectName = styled.span`
  color: #111b47;
  font-size: large;
  margin: 0px 5px;
  font-weight: bold;
`;

export const Text = styled.span`
  color: #111b47;
`;

export const Button = styled.button`
  color: white;
  background-color: #111b47;
  border-radius: 5px;
  width: auto;
  margin-left: auto;
  padding: 3px 20px;
`;
