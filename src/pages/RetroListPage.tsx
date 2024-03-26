import { useState } from 'react';
import ContentsFilter from '@/components/RetroList/ContentsFilter';
import ContentList from '@/components/RetroList/ContentsList';
import ControlBar from '@/components/RetroList/ControlBar';
import Search from '@/components/RetroList/Search';
import ViewButton from '@/components/RetroList/ViewButton';
import * as S from '@/styles/RetroList/RetroListPage.style';

const RetroListPage = () => {
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

  return (
    <>
      <div>
        <S.Container>
          <S.FilterContainer>
            <ContentsFilter status={status} onStatusChange={handleStatusChange} />
          </S.FilterContainer>
          <S.SearchContainer>
            <Search onSearch={handleSearch} />
          </S.SearchContainer>
          <S.SortButtonContainer>
            <ViewButton viewMode={viewMode} onViewModeChange={handleViewModeChange} />
          </S.SortButtonContainer>
        </S.Container>
        <ControlBar />
        <S.Box>
          <ContentList status={status} viewMode={viewMode} searchData={searchData} />
        </S.Box>
      </div>
    </>
  );
};

export default RetroListPage;
