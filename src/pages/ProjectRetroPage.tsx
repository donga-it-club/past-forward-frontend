import { useState, useEffect } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { RiFolder6Fill } from 'react-icons/ri';
import { GetRetrospectiveGroups, GetRetrospectiveGroupsRequest } from '@/api/@types/Groups';
import { queryGetRetrospectiveAllGroups } from '@/api/retroGroupsApi/getAllGroups';
import DescriptionModal from '@/components/projectRetro/DescriptionModal';
import GroupList from '@/components/projectRetro/GroupList';
import StatusFilter from '@/components/projectRetro/StatusFilter';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/ProjectRetroPage.styles';

export interface RetroGroup {
  id: number;
  title: string;
  description: string;
  status: 'ING' | 'DONE';
}

const ProjectRetro = () => {
  const toast = useCustomToast();
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [data, setData] = useState<GetRetrospectiveGroups['data']>({ totalCount: 0, nodes: [] });
  const [query, setQuery] = useState<GetRetrospectiveGroupsRequest>({
    page: 0,
    size: 5,
    status: '',
    keyword: '',
    isBookmarked: false,
  });

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const responseData = await queryGetRetrospectiveAllGroups(query);
        setData(responseData.data);
      } catch (error) {
        toast.error('그룹 불러오기에 실패했습니다');
      }
    };
    fetchGroup();
  }, [query]);

  const handleStatusFilter = (option: 'ALL' | 'IN_PROGRESS' | 'COMPLETED') => {
    setQuery(prev => {
      return { ...prev, status: option };
    });
  };

  return (
    <>
      <S.TopBox>
        <RiFolder6Fill size={50} style={{ color: '#111b47', padding: 0 }} />
        <S.ProjectMenuText>Project</S.ProjectMenuText>
      </S.TopBox>
      <S.DescriptionBox>
        <AiFillQuestionCircle
          size={40}
          style={{ color: '#111b47', cursor: 'pointer' }}
          onClick={() => setIsDescriptionOpen(true)}
        />
        <S.DescriptionText>사용법</S.DescriptionText>
      </S.DescriptionBox>
      <S.FilterContainer>
        <StatusFilter onSelectedFilter={handleStatusFilter} />
      </S.FilterContainer>
      <GroupList groups={data} />
      {isDescriptionOpen ? <DescriptionModal isClose={() => setIsDescriptionOpen(false)} /> : null}
    </>
  );
};

export default ProjectRetro;
