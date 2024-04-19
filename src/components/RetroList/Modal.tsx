import ModalClose from '@/assets/modalClose.png';
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
            <S.CloseImg src={ModalClose} onClick={onClose} />
          </S.CloseBox>
          <S.Text>생성자가 아닌 참여자는 수정 권한이 없습니다.</S.Text>
        </div>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default Modal;
