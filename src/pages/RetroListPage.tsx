import { useState } from 'react';
import ContentsFilter from '@/components/RetroList/ContentsFilter';
import ContentList from '@/components/RetroList/ContentsList';
import ControlBar from '@/components/RetroList/ControlBar';
import Search from '@/components/RetroList/Search';
import ViewButton from '@/components/RetroList/ViewButton';
import * as S from '@/styles/RetroList/RetroListPage.style';

// 예시 데이터
const dummy = {
  code: 200,
  message: null,
  data: {
    totalCount: 5,
    nodes: [
      {
        id: 1,
        title: 'Sample Title 1',
        userId: 100,
        teamId: 200, // team
        templateId: 0,
        status: 'NOT_STARTED',
        isBookmarked: false,
        thumbnail: '',
        startDate: '2024-04-10T09:22:51.538Z',
        createdDate: '2024-04-10T09:22:51.538Z',
        updatedDate: '2024-04-10T09:22:51.538Z',
      },
      {
        id: 2,
        title: 'Sample Title 2',
        userId: 101,
        teamId: 300, // team
        templateId: 0,
        status: 'NOT_STARTED',
        isBookmarked: true,
        thumbnail: '',
        startDate: '2024-04-11T09:22:51.538Z',
        createdDate: '2024-04-11T09:22:51.538Z',
        updatedDate: '2024-04-11T09:22:51.538Z',
      },
      {
        id: 3,
        title: 'Sample Title 3',
        userId: 102,
        teamId: 400, // team
        templateId: 0,
        status: 'IN_PROGRESS',
        isBookmarked: false,
        thumbnail: 'https://example.com/thumbnail3.jpg',
        startDate: '2024-04-12T09:22:51.538Z',
        createdDate: '2024-04-12T09:22:51.538Z',
        updatedDate: '2024-04-12T09:22:51.538Z',
      },
      {
        id: 4,
        title: 'Sample Title 4',
        userId: 103,
        teamId: null, // personal
        templateId: 0,
        status: 'IN_PROGRESS',
        isBookmarked: true,
        thumbnail: 'https://example.com/thumbnail4.jpg',
        startDate: '2024-04-13T09:22:51.538Z',
        createdDate: '2024-04-13T09:22:51.538Z',
        updatedDate: '2024-04-13T09:22:51.538Z',
      },
      {
        id: 5,
        title: 'Sample Title 5',
        userId: 104,
        teamId: null, // personal
        templateId: 0,
        status: 'COMPLETED',
        isBookmarked: false,
        thumbnail: 'https://example.com/thumbnail5.jpg',
        startDate: '2024-04-14T09:22:51.538Z',
        createdDate: '2024-04-14T09:22:51.538Z',
        updatedDate: '2024-04-14T09:22:51.538Z',
      },
    ],
  },
};

const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

const RetroListPage = () => {
  // data 부분만 가져오기
  const { nodes } = dummy.data;

  const rawData = nodes.map(item => ({
    id: item.id,
    title: item.title,
    userId: item.userId,
    teamId: item.teamId,
    templateId: item.templateId,
    status: item.status,
    isBookmarked: item.isBookmarked,
    thumbnail: item.thumbnail,
    startDate: formatDate(item.startDate),
    createdDate: formatDate(item.createdDate),
    updatedDate: formatDate(item.updatedDate),
  }));

  // useEffect(() => {
  //   fetch(''); // url
  // });

  const [retroData, setRetroData] = useState(rawData);
  const [viewMode, setViewMode] = useState<string>('board');
  const [searchData, setSearchData] = useState('');

  const handleContentsFilter = (filterType: string) => {
    if (filterType === 'Personal') {
      const filtered = rawData.filter(item => item.teamId === null);
      setRetroData(filtered);
    } else if (filterType === 'Teams') {
      const filtered = rawData.filter(item => item.teamId !== null);
      setRetroData(filtered);
    } else if (filterType === 'ALL') {
      setRetroData(rawData);
    }
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
            <ContentsFilter onFilter={handleContentsFilter} />
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
          <ContentList data={retroData} viewMode={viewMode} searchData={searchData} />
        </S.Box>
      </div>
    </>
  );
};

export default RetroListPage;
