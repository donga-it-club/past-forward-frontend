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
      {isModalOpen && <Modal isClose={() => setIsModalOpen(false)} type="edit" groupId={6} />}{' '}
      {/* id,title,description,thumbnail 넘겨주기 -> 넘겨받은거 그대로 출력(수정하기 모달), deletemodal에 id 넘겨주기 */}
      <S.Container>
        {groups.map(group => (
          <div key={group.id}>
            <p>{group.title}</p>
            <p>{group.description}</p>
          </div>
        ))}
        <MdOutlineMoreHoriz onClick={handleModal} style={{ cursor: 'pointer' }} />
      </S.Container>
    </>
  );
};

export default GroupList;
