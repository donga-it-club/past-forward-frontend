import { useState } from 'react';
import { AiFillQuestionCircle } from 'react-icons/ai';
import { FiPlusCircle } from 'react-icons/fi';
import { RiFolder6Fill } from 'react-icons/ri';
import CreateModal from '@/components/projectRetro/CreateModal';
import DescriptionModal from '@/components/projectRetro/DescriptionModal';
import GroupList from '@/components/projectRetro/GroupList';
import StatusFilter from '@/components/projectRetro/StatusFilter';
import * as S from '@/styles/projectRetro/ProjectRetroPage.styles';

export interface RetroGroup {
  id: number;
  title: string;
  description: string;
  status: 'ING' | 'DONE';
}

const ProjectRetro = () => {
  const [selectedFilter, setSelectedFilter] = useState<'ALL' | 'ING' | 'DONE'>('ALL');
  const [descriptionOpen, setDescriptionOpen] = useState<boolean>(false);
  const [isCreateOpen, setIsCreateOpen] = useState<boolean>(false);
  const handleCreateModal = () => {
    setIsCreateOpen(true);
  };

  // 데이터 가져오기
  const groups: RetroGroup[] = [
    { id: 1, title: 'Task 1', description: 'Description 1', status: 'ING' },
    { id: 2, title: 'Task 2', description: 'Description 2', status: 'DONE' },
    { id: 3, title: 'Task 3', description: 'Description 3', status: 'ING' },
    { id: 4, title: 'Task 4', description: 'Description 4', status: 'DONE' },
    { id: 5, title: 'Task 5', description: 'Description 5', status: 'ING' },
  ];

  // 기본 ALL, 아니면 선택한거(ING,DONE)
  const filteredGroups = selectedFilter === 'ALL' ? groups : groups.filter(group => group.status === selectedFilter);

  return (
    <>
      <S.TopBox>
        <RiFolder6Fill size={50} style={{ color: '#111b47', padding: 0 }} />
        <S.ProjectMenuText>Project</S.ProjectMenuText>
      </S.TopBox>
      <S.DescriptionBox>
        <AiFillQuestionCircle size={40} style={{ color: '#111b47' }} onClick={() => setDescriptionOpen(true)} />
        <S.DescriptionText>사용법</S.DescriptionText>
      </S.DescriptionBox>
      <StatusFilter onSelectedFilter={setSelectedFilter} />
      <div>
        <S.CreateBox>
          <FiPlusCircle size={40} style={{ color: '#a9a9a9' }} onClick={handleCreateModal} />
          {isCreateOpen && <CreateModal />}
        </S.CreateBox>
        <GroupList groups={filteredGroups} />
      </div>
      {descriptionOpen ? <DescriptionModal isClose={() => setDescriptionOpen(false)} /> : null}
    </>
  );
};

export default ProjectRetro;
