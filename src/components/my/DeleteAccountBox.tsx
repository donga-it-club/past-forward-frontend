import * as S from '@/styles/my/myPage.style';
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { InfoCircle } from 'react-bootstrap-icons';

const DeleteAccountButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <S.MainName>계정 삭제 </S.MainName>
      <S.DivingLine />
      <S.SubName fontSize="13px">
        <div style={{ display: 'flex' }}>
          <InfoCircle style={{ width: '15px', color: 'orange', margin: 'auto 2px' }} />
          삭제 후 복구 할 수 없습니다.
        </div>
      </S.SubName>
      <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
        <S.OrdinaryButton id="mypage_rmacc" color="orange" onClick={onOpen}>
          계정 삭제
        </S.OrdinaryButton>
      </div>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader margin="auto auto">진심이지?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="red" mr={3}>
              삭제하기
            </Button>
            <Button onClick={onClose}>취소하기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteAccountButton;
