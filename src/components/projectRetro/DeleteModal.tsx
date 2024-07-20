import { IoMdClose } from 'react-icons/io';
import { RiFolder6Fill } from 'react-icons/ri';
import { DeleteGroup } from '@/api/retroGroupsApi/deleteGroup';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/DeleteModal.styles';

interface DeleteModalProps {
  isClose: () => void;
  modalClose: () => void;
  groupId: number;
  title: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isClose, modalClose, groupId, title }) => {
  const toast = useCustomToast();
  const handleDeleteGroup = async () => {
    try {
      await DeleteGroup({ retrospectiveGroupId: groupId });
      setTimeout(() => {
        isClose();
        modalClose();
        toast.info('그룹이 삭제되었습니다.');
        window.location.reload();
      }, 1000);
    } catch (e) {
      toast.error('그룹 삭제에 실패했습니다.');
    }
  };

  return (
    <S.Background>
      <S.Container>
        <S.Modal>
          <S.Top>
            <S.Title>회고 프로젝트 삭제</S.Title>
            <IoMdClose
              onClick={isClose}
              size={20}
              style={{ color: '#6c6c6c', marginLeft: 'auto', cursor: 'pointer' }}
            />
          </S.Top>
          <hr />
          <S.Bottom>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RiFolder6Fill size={25} style={{ color: '#FFE500', padding: 0 }} />
              <S.ProjectName>{title}</S.ProjectName>
              <S.Text>을(를) 삭제하시겠습니까?</S.Text>
            </div>
            <S.Button onClick={handleDeleteGroup}>Delete</S.Button>
          </S.Bottom>
        </S.Modal>
      </S.Container>
    </S.Background>
  );
};

export default DeleteModal;
