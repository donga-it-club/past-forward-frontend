import { IoMdClose } from 'react-icons/io';
import * as S from '@/styles/projectRetro/ManageModal.styles';
import * as T from '@/styles/projectRetro/Modal.styles';

interface ManageModalProps {
  isClose: () => void;
}

const ManageModal: React.FC<ManageModalProps> = ({ isClose }) => {
  return (
    <>
      <T.Background>
        <T.Container>
          <S.Modal>
            <IoMdClose
              onClick={isClose}
              size={20}
              style={{
                color: '#a9a9a9',
                marginLeft: 'auto',
                marginRight: '10px',
                marginTop: '10px',
                cursor: 'pointer',
              }}
            />
            <S.Title>프로젝트로 회고 관리하기</S.Title>
            <S.Box>회고 list</S.Box>
            <S.Button>적용하기</S.Button>
          </S.Modal>
        </T.Container>
      </T.Background>
    </>
  );
};

export default ManageModal;
