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

const DeleteAccountButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <S.OrdinaryButton color="orange" onClick={onOpen}>
        계정 삭제
      </S.OrdinaryButton>
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
