import { useState } from 'react';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import Modal from '@/components/projectRetro/Modal';
import * as S from '@/styles/projectRetro/GroupList.styles';

export interface RetroGroup {
  id: number;
  title: string;
  description: string;
  status: 'ING' | 'DONE';
}

interface GroupListProps {
  groups: RetroGroup[];
}

const GroupList: React.FC<GroupListProps> = ({ groups }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <S.Container>
        {groups.map(group => (
          <div key={group.id}>
            <p>{group.title}</p>
            <p>{group.description}</p>
          </div>
        ))}
        <MdOutlineMoreHoriz onClick={handleModal} style={{ cursor: 'pointer' }} />
      </S.Container>
      {isModalOpen && <Modal isClose={() => setIsModalOpen(false)} type="edit" />}
    </>
  );
};

export default GroupList;
