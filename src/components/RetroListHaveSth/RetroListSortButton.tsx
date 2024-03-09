import React, { useState } from 'react';
import styled from 'styled-components';
import BoardIcon from '../../assets/RetroListBoardViewIcon.png';
import ListIcon from '../../assets/RetroListLIstViewIcon.png';

const BoardView = () => {
  return <>보드뷰</>;
};

const ListView = () => {
  return <>리스트뷰</>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Button = styled.button<{ active: boolean }>`
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

const Text = styled.span`
  font-size: 13px;
  font-weight: bold;
  padding-left: 10px;
`;

const Icon = styled.img<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;

const RetroListSortButton: React.FC = () => {
  const [isBoard, setIsBoard] = useState<'board' | 'list'>('board');

  const sortButtonClick = (sortType: 'board' | 'list') => {
    setIsBoard(sortType);
  };

  return (
    <>
      <Container>
        <Button active={isBoard === 'board'} onClick={() => sortButtonClick('board')}>
          <Icon src={BoardIcon} alt="board icon" size={18} />
          <Text>Board View</Text>
        </Button>
        <Button active={isBoard === 'list'} onClick={() => sortButtonClick('list')}>
          <Icon src={ListIcon} alt="list icon" size={22} />
          <Text>List View</Text>
        </Button>
      </Container>
      {isBoard === 'board' ? <BoardView /> : <ListView />}
    </>
  );
};

export default RetroListSortButton;
