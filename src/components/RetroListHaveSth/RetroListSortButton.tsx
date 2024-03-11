import React, { useState } from 'react';
import BoardIcon from '@/assets/RetroListBoardViewIcon.png';
import ListIcon from '@/assets/RetroListLIstViewIcon.png';
import * as S from '../../styles/RetroListHaveSth/RetroListSortButton.style';

const BoardView = () => {
  return <>보드뷰</>;
};

const ListView = () => {
  return <>리스트뷰</>;
};

const RetroListSortButton: React.FC = () => {
  const [isBoard, setIsBoard] = useState<'board' | 'list'>('board');

  const sortButtonClick = (sortType: 'board' | 'list') => {
    setIsBoard(sortType);
  };

  return (
    <>
      <S.Container>
        <S.Button active={isBoard === 'board'} onClick={() => sortButtonClick('board')}>
          <S.Icon src={BoardIcon} alt="board icon" size={18} />
          <S.Text>Board View</S.Text>
        </S.Button>
        <S.Button active={isBoard === 'list'} onClick={() => sortButtonClick('list')}>
          <S.Icon src={ListIcon} alt="list icon" size={22} />
          <S.Text>List View</S.Text>
        </S.Button>
      </S.Container>
      {isBoard === 'board' ? <BoardView /> : <ListView />}
    </>
  );
};

export default RetroListSortButton;
