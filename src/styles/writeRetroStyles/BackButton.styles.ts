import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: inline-block;
  @media (max-width: 1000px) {
    width: 90vw;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 33px;
  padding: 5px;
  margin-left: 35px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  background-color: #eeeeee;
  color: 'black';
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1000px) {
    position: relative;
    top: 10px;
  }
`;
