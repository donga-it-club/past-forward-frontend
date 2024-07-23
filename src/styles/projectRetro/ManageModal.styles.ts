import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 500px;
  height: auto;
  padding: 15px 25px;
`;

export const Title = styled.span`
  background-color: #111b47;
  color: white;
  font-size: medium;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 35px;
  width: 300px;
`;

export const Box = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 10px 0px;
`;

export const Button = styled.button`
  color: white;
  background-color: #4972a8;
  border-radius: 3px;
  padding: 5px 20px;
  margin-left: auto;
  width: 100px;
`;
