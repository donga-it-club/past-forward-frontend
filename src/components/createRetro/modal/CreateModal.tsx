import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import StartDateCalendar from '@/components/createRetro/modal/StartDateCalender';
import TemlplateSelect from '@/components/createRetro/modal/TemplateSelect';
import TitleInput from '@/components/createRetro/modal/TitleInput';
import * as S from '@/styles/createRetro/modal/CreateModal.style';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const size = 'xl';

  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Retrospect</ModalHeader>
        <ModalCloseButton />

        <S.CustomModalBody>
          <S.LeftColumn>
            <ImageUpload />
          </S.LeftColumn>
          <S.RightColumn>
            <TitleInput />
            <TemlplateSelect />
            <StartDateCalendar />
          </S.RightColumn>
        </S.CustomModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateModal;
