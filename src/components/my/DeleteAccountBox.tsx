import { InfoCircle } from 'react-bootstrap-icons';
import { AccountSettings } from '@aws-amplify/ui-react';
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { deleteUser } from 'aws-amplify/auth';
import * as S from '@/styles/my/myPage.style';
import '@/styles/user/AuthPage.css';

const DeleteAccountButton = () => {
  const { isOpen, onClose } = useDisclosure();

  const handleSuccess = () => {
    alert('성공적으로 탈퇴되었습니다.');
  };

  async function handleDelete() {
    try {
      await deleteUser();
    } catch (error) {
      console.log(error);
    }
  }

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
      <S.deleteContainer>
        <AccountSettings.DeleteUser
          onSuccess={handleSuccess}
          handleDelete={handleDelete}
          displayText={{
            deleteAccountButtonText: '계정 삭제',
            cancelButtonText: '취소',
            confirmDeleteButtonText: '삭제',
            warningText: '계정을 삭제하시겠습니까? 관련 데이터도 함께 삭제됩니다.',
          }}
        />
      </S.deleteContainer>
      <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader margin="auto auto">계정을 삭제하시겠습니까?</ModalHeader>
          <ModalCloseButton />

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteAccountButton;
