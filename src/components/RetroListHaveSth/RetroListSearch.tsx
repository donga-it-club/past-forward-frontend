import React from 'react';
import * as S from '../../styles/RetroListHaveSth/RetroListSearch.style';
import SearchIcon from '@/assets/SearchIcon.png';

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
