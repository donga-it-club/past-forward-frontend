import { useState } from 'react';
import * as S from '../styles/RetroListHaveSth/RetroListHaveSthPage.style';
import ContentList from '@/components/RetroListHaveSth/ContentsList';
import RetroListContentsFilter from '@/components/RetroListHaveSth/RetroListContentsFilter';
import RetroListSearch from '@/components/RetroListHaveSth/RetroListSearch';
import RetroListViewButton from '@/components/RetroListHaveSth/RetroListViewButton';

const RetroListHaveSthPage = () => {
  const [status, setStatus] = useState<string>('All files');
  const [viewMode, setViewMode] = useState<string>('board');

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  const handleViewModeChange = (newStatus: string) => {
    setViewMode(newStatus);
  };

  return (
    <>
      <div>
        <S.Container>
          <S.FilterContainer>
            <RetroListContentsFilter status={status} onStatusChange={handleStatusChange} />
          </S.FilterContainer>
          <S.SearchContainer>
            <RetroListSearch />
          </S.SearchContainer>
          <S.SortButtonContainer>
            <RetroListViewButton viewMode={viewMode} onViewModeChange={handleViewModeChange} />
          </S.SortButtonContainer>
        </S.Container>
        <S.Box>
          <ContentList status={status} viewMode={viewMode} />
        </S.Box>
      </div>
    </>
  );
};

export default RetroListHaveSthPage;
