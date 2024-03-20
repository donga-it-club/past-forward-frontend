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
import * as S from '@/styles/my/myPage.style';

const ChangePWButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <S.OrdinaryButton color="#111b47" onClick={onOpen}>
        비밀번호 변경
      </S.OrdinaryButton>

      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader margin="auto auto">진심이지?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              삭제하기
            </Button>
            <Button onClick={onClose}>취소하기</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChangePWButton;
