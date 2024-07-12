import styled from 'styled-components';

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 250;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 300;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid #8b8b8b;
  border-radius: 5px;
  width: 800px;
  height: 300px;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #111b47;
  color: white;
  border-radius: 3px;
  width: 250px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
