import React, { useState } from 'react';
import styled from 'styled-components';

import RetroListContentsFilter from '../components/RetroList/RetroListContentsFilter';
import RetroListSearch from '../components/RetroList/RetroListSearch';
import RetroListSortButton from '../components/RetroList/RetroListSortButton';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const FilterContainer = styled.div`
  flex: 5;
  padding-left: 10px;
  padding-right: 10px;
`;

const SearchContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

const SortButtonContainer = styled.div`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
`;

const RetroListHaveSthPage: React.FC = () => {
  return (
    <>
      <Container>
        <FilterContainer>
          <RetroListContentsFilter />
        </FilterContainer>
        <SearchContainer>
          <RetroListSearch />
        </SearchContainer>
        <SortButtonContainer>
          <RetroListSortButton />
        </SortButtonContainer>
      </Container>
    </>
  );
};

export default RetroListHaveSthPage;
