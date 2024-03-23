import { useState } from 'react';
import * as S from '../styles/RetroListHaveSth/RetroListHaveSthPage.style';
import ContentList from '@/components/RetroListHaveSth/ContentsList';
import ControlBar from '@/components/RetroListHaveSth/ControlBar';
import RetroListContentsFilter from '@/components/RetroListHaveSth/RetroListContentsFilter';
import RetroListSearch from '@/components/RetroListHaveSth/RetroListSearch';
import RetroListViewButton from '@/components/RetroListHaveSth/RetroListViewButton';

const RetroListHaveSthPage = () => {
  const [status, setStatus] = useState<string>('All files');
  const [viewMode, setViewMode] = useState<string>('board');
  const [searchData, setSearchData] = useState('');

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
  };

  const handleViewModeChange = (newStatus: string) => {
    setViewMode(newStatus);
  };
  const handleSearch = (searchTerm: string) => {
    setSearchData(searchTerm);
  };

  const handleSortButtonClick = () => {
    // 정렬 버튼
  };

  const handleBookmarkButton3Click = () => {
    // 북마크 버튼
  };
  return (
    <>
      <div>
        <S.Container>
          <S.FilterContainer>
            <RetroListContentsFilter status={status} onStatusChange={handleStatusChange} />
          </S.FilterContainer>
          <S.SearchContainer>
            <RetroListSearch onSearch={handleSearch} />
          </S.SearchContainer>
          <S.SortButtonContainer>
            <RetroListViewButton viewMode={viewMode} onViewModeChange={handleViewModeChange} />
          </S.SortButtonContainer>
        </S.Container>
        <ControlBar onSortButtonClick={handleSortButtonClick} onBookmarkButtonClick={handleBookmarkButton3Click} />
        <S.Box>
          <ContentList status={status} viewMode={viewMode} searchData={searchData} />
        </S.Box>
      </div>
    </>
  );
};

export default RetroListHaveSthPage;
