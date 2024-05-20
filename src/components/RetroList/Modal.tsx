import { IoIosClose } from 'react-icons/io';
import * as S from '@/styles/RetroList/Modal.styles';

interface ModalProps {
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({ onClose, isOpen }) => {
  return (
    <S.ModalOverlay isOpen={isOpen}>
      <S.ModalContent>
        <div>
          <S.CloseBox>
            <IoIosClose onClick={onClose} style={{ cursor: 'pointer' }} />
          </S.CloseBox>
          <S.Text>생성자가 아닌 참여자는 수정 권한이 없습니다.</S.Text>
        </div>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
