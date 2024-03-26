import styled from 'styled-components';
interface BoxProps {
  isOpen: boolean;
}

export const Box = styled.div<BoxProps>`
  width: 80px;
  height: 30px;
  background-color: #f0f2ef;
  border-radius: 3px;
  border-radius: ${props => (props.isOpen ? '3px 3px 0 0' : '3px')};
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 20px 42px 18px;
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
  display: grid;
  grid-template-columns: 20px 42px 18px;
  align-content: center;
  border-top: 1px solid #949494;
  &:hover {
    background-color: #d9d9d9;
  }
  &:last-child {
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
  }
`;
