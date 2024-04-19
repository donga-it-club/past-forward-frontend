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
import { TRetrospective, TStatus } from '@/api/@types/@asConst';
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
  status: keyof TStatus;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, templateId, type, status }) => {
  const size = 'xl';
  const navigate = useNavigate();
  const [requestData, setRequestData] = useState<PostRetrospectivesRequest>({
    title: '',
    type: type,
    userId: 1,
    templateId: templateId || 1,
    status: status,
    thumbnail: null,
    startDate: new Date(),
    description: '',
  });

  useEffect(() => {
    setRequestData(prevData => ({
      ...prevData,
      templateId: templateId || 1, // templateId가 변경될 때마다 업데이트
      type: type,
      status: status,
    }));
  }, [templateId, type, status]);

  const handleCreateClick = async () => {
    try {
      let calculatedStatus: keyof TStatus = 'NOT_STARTED'; // 기본값은 'NOT_STARTED'로 설정

      // startDate 값이 오늘 이전이면 'IN_PROGRESS'로 설정
      const today = new Date();
      const startedDate = new Date(requestData.startDate);
      // console.log(startedDate);
      if (startedDate <= today) {
        calculatedStatus = 'IN_PROGRESS';
      }

      const isoDateString = startedDate.toISOString();
      // console.log(isoDateString);

      // 회고 생성 요청 전송
      const retrospectiveResponse = await postRetrospective({
        ...requestData,
        startDate: isoDateString,
        status: calculatedStatus, // 계산된 status 값으로 설정
        thumbnail: requestData.thumbnail || null, // thumbnail이 없으면 null을 전송
      });

      // thumbnail이 있는 경우에만 S3에 이미지 업로드
      if (requestData.thumbnail) {
        const imageResponse = await postImageToS3({
          filename: requestData.thumbnail, // imageUUID를 filename으로 설정
          method: 'PUT',
        });
        console.log('사진 S3 업로드 성공', imageResponse);
      }

      console.log('회고 생성 성공', retrospectiveResponse);
      onClose(); // 모달 닫기
      navigate('/retrolist'); // 회고 목록 페이지로 이동
    } catch (error) {
      console.error('회고 생성 실패', error);
    }
  };

  const handleTemplateChange = (selectedTemplateId: number) => {
    setRequestData({ ...requestData, templateId: selectedTemplateId });
  };

  const handleStartDateChange = (startDate: Date) => {
    console.log('startDate:', startDate); // startDate를 콘솔에 출력
    setRequestData({ ...requestData, startDate }); // startDate 상태 업데이트
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
            <StartDateCalendar onDateChange={handleStartDateChange} />
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
