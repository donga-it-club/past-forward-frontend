import React, { useState, ChangeEvent } from 'react';
import SearchIcon from '@/assets/SearchIcon.png';
import * as S from '@/styles/RetroList/Search.style';

interface SearchProps {
  onSearch: (searchInput: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
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

export default Search;
