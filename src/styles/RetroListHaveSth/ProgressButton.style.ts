import styled from 'styled-components';

export const Box = styled.div`
  width: 80px;
  height: 30px;
  background-color: #f0f2ef;
  border-radius: 3px;
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20px 45px 15px;
  align-content: center;
`;

export const ProgressIcon = styled.img`
  justify-self: center;
  align-self: center;
  width: 12px;
  height: 12px;
`;

export const ArrowIcon = styled.img`
  justify-self: center;
  align-self: center;
  width: 15px;
  height: 12px;
`;

export const Text = styled.text`
  justify-self: start;
  align-self: center;
  color: #494949;
  font-size: 14px;
`;

export const ListBox = styled.div`
  position: absolute;
`;

export const DropBox = styled.li`
  width: 80px;
  height: 30px;
  background-color: #f0f2ef;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 20px 45px 15px;
  align-content: center;
`;
