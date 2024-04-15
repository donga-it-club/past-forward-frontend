import React, { useEffect, useState } from 'react';
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
import { Status, TRetrospective } from '@/api/@types/@asConst';
import { PostRetrospectivesRequest } from '@/api/@types/Retrospectives';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import postRetrospective from '@/api/retrospectivesApi/postRetrospective';
import DescriptionInput from '@/components/createRetro/modal/DescriptionInput';
import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import StartDateCalendar from '@/components/createRetro/modal/StartDateCalender';
import TemplateSelect from '@/components/createRetro/modal/TemplateSelect';
import TitleInput from '@/components/createRetro/modal/TitleInput';
import * as S from '@/styles/createRetro/modal/CreateModal.style';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  templateId: number | null;
  type: keyof TRetrospective;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, templateId, type }) => {
  const size = 'xl';
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<PostRetrospectivesRequest>({
    title: '',
    type: type,
    userId: 1,
    templateId: templateId || 1,
    status: Status.NOT_STARTED,
    thumbnail: '',
    startDate: '',
    description: '',
  });

  useEffect(() => {
    setRequestData(prevData => ({
      ...prevData,
      templateId: templateId || 1, // templateId가 변경될 때마다 업데이트
      type: type,
    }));
  }, [templateId, type]);

  const handleCreateClick = async () => {
    try {
      // 회고 먼저 생성
      const retrospectiveResponse = await postRetrospective({
        ...requestData,
        status: Status.NOT_STARTED,
      });

      // 이미지를 S3에 업로드
      const imageResponse = await postImageToS3({
        filename: requestData.thumbnail, // imageUUID를 filename으로 설정
        method: 'PUT',
      });

      console.log('회고 생성 성공', retrospectiveResponse);
      console.log('사진 S3 업로드 성공', imageResponse);

      onClose();
      navigate('/invite');
    } catch (error) {
      console.error('실패', error);
    }
  };

  const handleTemplateChange = (selectedTemplateId: number) => {
    setRequestData({ ...requestData, templateId: selectedTemplateId });
  };

  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Retrospect</ModalHeader>
        <ModalCloseButton />

        <S.CustomModalBody>
          <S.LeftColumn>
            <ImageUpload
              onChange={(_thumbnail, imageUUID) => setRequestData({ ...requestData, thumbnail: imageUUID })}
            />
          </S.LeftColumn>
          <S.RightColumn>
            <TitleInput onChange={title => setRequestData({ ...requestData, title })} />
            <TemplateSelect onChange={handleTemplateChange} defaultTemplateId={requestData.templateId} />

            <StartDateCalendar onDateChange={startDate => setRequestData({ ...requestData, startDate })} />
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
