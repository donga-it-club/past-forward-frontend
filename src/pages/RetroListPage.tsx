import { useEffect, useState } from 'react';
import { GetRetrospectiveRequest, GetRetrospectiveResponseNodes } from '@/api/@types/Retrospectives';
import { GetRetrospectiveData } from '@/api/@types/Retrospectives';
import { queryGetRetrospective } from '@/api/retrospectivesApi/getRetrospective';
import BookmarkButton from '@/components/RetroList/BookmarkButton';
import ContentsFilter from '@/components/RetroList/ContentsFilter';
import ContentList from '@/components/RetroList/ContentsList';
import OrderButton from '@/components/RetroList/OrderButton';
import Pagination from '@/components/RetroList/Pagination';
import ProgressButton from '@/components/RetroList/ProgressButton';
import Search from '@/components/RetroList/Search';
import ViewButton from '@/components/RetroList/ViewButton';
import * as S from '@/styles/RetroList/RetroListPage.style';

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
  const [data, setData] = useState<GetRetrospectiveData['data']>({ totalCount: 0, nodes: [] });
  const [page, setPage] = useState<number>(Math.ceil(data.totalCount / 10));
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [bookmarkUpdate, setBookmarkUpdate] = useState<boolean>(false);

  const [query, setQuery] = useState<GetRetrospectiveRequest>({
    page: 0,
    size: 9,
    order: 'NEWEST',
    status: 'ALL',
    keyword: '',
    isBookmarked: false,
  });

  useEffect(() => {
    setPage(Math.ceil(data.totalCount / 10));
  }, [data]);

  useEffect(() => {
    setQuery(prev => {
      return { ...prev, page: currentPage - 1 };
    });
  }, [currentPage]);

  useEffect(() => {
    const newStatus = 'ALL';
    setQuery(prev => {
      return { ...prev, status: newStatus };
    });
  }, [currentPage]);

  useEffect(() => {
    const fetchRetrolist = async () => {
      try {
        const responseData = await queryGetRetrospective(query);
        setData(responseData.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchRetrolist();
  }, [query, bookmarkUpdate]);

  const [retroData, setRetroData] = useState<Array<GetRetrospectiveResponseNodes>>([]);
  const [viewMode, setViewMode] = useState<string>('board');
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    const rawData = data.nodes.map(item => ({
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
      username: item.username,
    }));
    setRetroData(rawData);
  }, [data.nodes]);

  const handleContentsFilter = (filterType: string) => {
    if (filterType === 'Personal') {
      const filtered = data.nodes
        .filter(item => item.teamId === null)
        .map(item => ({
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
          username: item.username,
        }));
      setRetroData(filtered);
    } else if (filterType === 'Teams') {
      const filtered = data.nodes
        .filter(item => item.teamId !== null)
        .map(item => ({
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
          username: item.username,
        }));
      setRetroData(filtered);
    } else if (filterType === 'ALL') {
      const rawData = data.nodes.map(item => ({
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
        username: item.username,
      }));
      setRetroData(rawData);
    }
  };

  const handleStatus = (option: 'ALL' | 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED') => {
    setQuery(prev => {
      return { ...prev, status: option };
    });
  };
  const handleOrder = (option: 'NEWEST' | 'OLDEST') => {
    setQuery(prev => {
      return { ...prev, order: option };
    });
  };

  const handleBookmarkButton = (option: boolean) => {
    setCurrentPage(1);
    setQuery(prev => {
      return { ...prev, page: 0, isBookmarked: option };
    });
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
          <S.SubContainer>
            <S.SearchContainer>
              <Search onSearch={handleSearch} />
            </S.SearchContainer>
            <S.SortButtonContainer>
              <ViewButton viewMode={viewMode} onViewModeChange={handleViewModeChange} />
            </S.SortButtonContainer>
          </S.SubContainer>
        </S.Container>
        <S.ControlBarContainer>
          <ProgressButton handleStatus={handleStatus} />
          <OrderButton handleOrder={handleOrder} />
          <BookmarkButton handleBookmarkButton={handleBookmarkButton} />
        </S.ControlBarContainer>
        <S.Wrapper>
          <S.Box>
            <ContentList
              data={retroData}
              viewMode={viewMode}
              searchData={searchData}
              setBookmarkUpdate={setBookmarkUpdate}
            />
          </S.Box>
        </S.Wrapper>
        <S.PageContainer>
          <Pagination totalPage={page} limit={5} page={currentPage} setPage={setCurrentPage} />
        </S.PageContainer>
      </div>
    </>
  );
};

export default RetroListPage;
