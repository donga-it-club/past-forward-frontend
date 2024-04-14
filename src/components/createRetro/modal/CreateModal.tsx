import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { Status } from '@/api/@types/@asConst';
import { PostRetrospectivesRequest } from '@/api/@types/Retrospectives';
import { RetrospectiveService } from '@/api/services/Retrospectives';
import DescriptionInput from '@/components/createRetro/modal/DescriptionInput';
import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import StartDateCalendar from '@/components/createRetro/modal/StartDateCalender';
import TemplateSelect from '@/components/createRetro/modal/TemplateSelect';
import TitleInput from '@/components/createRetro/modal/TitleInput';
import * as S from '@/styles/createRetro/modal/CreateModal.style';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const size = 'xl';
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<PostRetrospectivesRequest>({
    title: '',
    teamId: 1,
    userId: 1,
    templateId: 0,
    status: Status.NOT_STARTED,
    thumbnail: '',
    startDate: '',
    description: '',
  });

  const handleCreateClick = async () => {
    try {
      const response = await RetrospectiveService.create({
        ...requestData,
        status: Status.NOT_STARTED,
      });
      console.log('생성', response);
      onClose();
      navigate('/invite');
    } catch (error) {
      console.error('실패', error);
    }
  };

  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Retrospect</ModalHeader>
        <ModalCloseButton />

        <S.CustomModalBody>
          <S.LeftColumn>
            <ImageUpload onChange={thumbnail => setRequestData({ ...requestData, thumbnail })} />
          </S.LeftColumn>
          <S.RightColumn>
            <TitleInput onChange={title => setRequestData({ ...requestData, title })} />
            <TemplateSelect onChange={templateId => setRequestData({ ...requestData, templateId })} />
            <StartDateCalendar onChange={startDate => setRequestData({ ...requestData, startDate })} />
          </S.RightColumn>
        </S.CustomModalBody>
        <S.BottomModalBody>
          <div>회고 설명</div>
          <DescriptionInput onChange={description => setRequestData({ ...requestData, description })} />
        </S.BottomModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateClick}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateModal;
