import { IoMdClose } from 'react-icons/io';
import { RiFolder6Fill } from 'react-icons/ri';
import * as S from '@/styles/projectRetro/DeleteModal.styles';

interface DeleteModalProps {
  isClose: () => void;
  //   groupId: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ isClose }) => {
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
              <S.ProjectName>프로젝트1</S.ProjectName> {/* 프로젝트 이름 */}
              <S.Text>를 삭제하시겠습니까?</S.Text>
            </div>
            <S.Button>Delete</S.Button>
          </S.Bottom>
        </S.Modal>
      </S.Container>
    </S.Background>
  );
};

export default DeleteModal;
