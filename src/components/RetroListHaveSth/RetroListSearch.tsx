import React, { useState, ChangeEvent } from 'react';
import * as S from '../../styles/RetroListHaveSth/RetroListSearch.style';
import SearchIcon from '@/assets/SearchIcon.png';

interface RetroListSearchProps {
  onSearch: (searchInput: string) => void;
}

const RetroListSearch: React.FC<RetroListSearchProps> = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(value);
    onSearch(value);
  };

  return (
    <>
      <S.SearchLayout>
        <S.SearchInput type="search" placeholder="Search Tasks" value={searchInput} onChange={handleInputChange} />
        <S.SearchIconImg src={SearchIcon} />
      </S.SearchLayout>
    </>
  );
};

export default RetroListSearch;
