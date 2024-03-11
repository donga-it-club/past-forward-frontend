import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  width: 140px;
  height: 40px;
  padding: 10px;
  border: none;
  color: #505f98;
  background-color: white;
  align-items: center;
  justify-content: center;
  border: 1px solid #999999;
  border-left: ${({ active }) => (active ? 'none' : '1px solid #949494')};
  border-right: ${({ active }) => (active ? 'none' : '1px solid #949494')};
  &:active {
    background-color: #505f98;
    color: white;
  }
  &:focus {
    background-color: #505f98;
    color: white;
  }
`;

export const Text = styled.span`
  font-size: 13px;
  font-weight: bold;
  padding-left: 10px;
`;

export const Icon = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
