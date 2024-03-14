import RetroListContentsFilter from '@/components/RetroListHaveSth/RetroListContentsFilter';
import RetroListSearch from '@/components/RetroListHaveSth/RetroListSearch';
import RetroListSortButton from '@/components/RetroListHaveSth/RetroListSortButton';
import * as S from '../styles/RetroListHaveSth/RetroListHaveSthPage.style';

const RetroListHaveSthPage = () => {
  return (
    <>
      <S.Container>
        <S.FilterContainer>
          <RetroListContentsFilter />
        </S.FilterContainer>
        <S.SearchContainer>
          <RetroListSearch />
        </S.SearchContainer>
        <S.SortButtonContainer>
          <RetroListSortButton />
        </S.SortButtonContainer>
      </S.Container>
    </>
  );
};

export default RetroListHaveSthPage;
