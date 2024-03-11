import React from 'react';
import SearchIcon from '@/assets/SearchIcon.png';
import * as S from '../../styles/RetroListHaveSth/RetroListSearch.style';

const RetroListSearch: React.FC = () => {
  return (
    <>
      <S.SearchLayout>
        <S.SearchInput type="search" placeholder="Search Tasks"></S.SearchInput>
        <S.SearchIconImg src={SearchIcon} />
      </S.SearchLayout>
    </>
  );
};

export default RetroListSearch;
