import RetroListContentsFilter from '@/components/RetroListHaveSth/RetroListContentsFilter';
import RetroListSearch from '@/components/RetroListHaveSth/RetroListSearch';
import RetroListSortButton from '@/components/RetroListHaveSth/RetroListSortButton';
import styled from 'styled-components';

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

const RetroListHaveSthPage = () => {
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
