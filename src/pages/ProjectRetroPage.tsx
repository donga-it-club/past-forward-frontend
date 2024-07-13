import { useState, useEffect } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import { RiFolder6Fill } from 'react-icons/ri';
import { GetRetrospectiveGroups, GetRetrospectiveGroupsRequest } from '@/api/@types/Groups';
import { queryGetRetrospectiveAllGroups } from '@/api/retroGroupsApi/getAllGroups';
import DescriptionModal from '@/components/projectRetro/DescriptionModal';
import GroupList from '@/components/projectRetro/GroupList';
import Modal from '@/components/projectRetro/Modal';
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
  // const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'ING' | 'DONE'>('ALL');
  const [isDescriptionOpen, setIsDescriptionOpen] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const toast = useCustomToast();

  const [data, setData] = useState<GetRetrospectiveGroups['data']>({ totalCount: 0, nodes: [] });
  const [query, setQuery] = useState<GetRetrospectiveGroupsRequest>({
    page: 0,
    size: 9,
    status: 'ALL',
    keyword: '',
    isBookmarked: false,
  });

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const responseData = await queryGetRetrospectiveAllGroups(query);
        setData(responseData.data);
        console.log(data);
      } catch (error) {
        toast.error('그룹 불러오기에 실패했습니다');
      }
    };
    fetchGroup();
  }, [query]);

  const handleModal = () => {
    setIsModalOpen(true);
  };
  // 데이터 가져오기
  const groups: RetroGroup[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'ING' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'DONE' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'ING' },
    { id: 4, title: 'Task 4', description: 'Description 4', status: 'DONE' },
    { id: 5, title: 'Task 5', description: 'Description 5', status: 'ING' },
  ];

  const handleStatusFilter = (option: 'ALL' | 'IN_PROGRESS' | 'COMPLETED') => {
    setQuery(prev => {
      return { ...prev, status: option };
    });
  };

  // 기본 ALL, 아니면 선택한거(ING,DONE)
  const selectedFilter: 'ALL' | 'ING' | 'DONE' = 'ALL';
  const filteredGroups = selectedFilter === 'ALL' ? groups : groups.filter(group => group.status === selectedFilter);

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
      <StatusFilter onSelectedFilter={handleStatusFilter} />
      <div>
        <S.CreateBox>
          <FiPlusCircle size={40} style={{ color: '#a9a9a9', cursor: 'pointer' }} onClick={handleModal} />
        </S.CreateBox>
        <GroupList groups={filteredGroups} />
      </div>
      {isDescriptionOpen ? <DescriptionModal isClose={() => setIsDescriptionOpen(false)} /> : null}
      {isModalOpen && <Modal isClose={() => setIsModalOpen(false)} type="create" />}
    </>
  );
};

export default ProjectRetro;
