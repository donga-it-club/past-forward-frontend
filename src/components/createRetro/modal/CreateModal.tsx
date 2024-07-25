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
  Flex,
} from '@chakra-ui/react';
import axios from 'axios';
import { TRetrospective, TStatus } from '@/api/@types/@asConst';
import { PostRetrospectivesRequest } from '@/api/@types/Retrospectives';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import postRetrospective from '@/api/retrospectivesApi/postRetrospective';
import DescriptionInput from '@/components/createRetro/modal/DescriptionInput';
import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import StartDateCalendar from '@/components/createRetro/modal/StartDateCalender';
import TemplateSelect from '@/components/createRetro/modal/TemplateSelect';
import TitleInput from '@/components/createRetro/modal/TitleInput';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/createRetro/modal/CreateModal.style';

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
  templateId: number | null;
  type: keyof TRetrospective;
  status: keyof TStatus;
  name: string;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose, templateId, type, status, name }) => {
  const size = 'xl';
  const navigate = useNavigate();
  const toast = useCustomToast();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [image, setImage] = useState<Blob | null>(null);
  const [requestData, setRequestData] = useState<PostRetrospectivesRequest>({
    title: '',
    type: type,
    userId: 1,
    templateId: templateId || null,
    status: status,
    thumbnail: null,
    startDate: new Date(),
    description: '',
  });

  useEffect(() => {
    setRequestData(prevData => ({
      ...prevData,
      templateId: templateId || null, // templateId가 변경될 때마다 업데이트
      type: type,
      status: status,
    }));
  }, [templateId, type, status]);

  const handleCreateClick = async () => {
    if (isSubmitting) return; // 이미 제출 중이면 종료

    setIsSubmitting(true);
    try {
      if (!requestData.title) {
        // 회고 제목이 비어 있다면 사용자에게 알림을 표시함
        alert('회고 제목을 입력해 주세요.');
        return;
      }

      if (!requestData.description) {
        // 회고 내용이 비어있다면 requestData.description에 빈칸 한 개 삽입하고 회고 생성함
        requestData.description = ' ';
        // 회고 내용이 비어 있다면 사용자에게 알림을 표시함
        // alert('회고 내용을 입력하세요.');
        return;
      }

      if (requestData.templateId === null) {
        alert('회고 템플릿을 선택해주세요.');
        return;
      }

      let calculatedStatus: keyof TStatus = 'NOT_STARTED'; // 기본값은 'NOT_STARTED'로 설정

      // startDate 값이 오늘 이전이면 'IN_PROGRESS'로 설정
      const today = new Date();
      const startedDate = new Date(requestData.startDate);
      // console.log(startedDate);
      if (startedDate <= today) {
        calculatedStatus = 'IN_PROGRESS';
      }

      const isoDateString = startedDate.toISOString();

      // 회고 생성 요청 전송
      await postRetrospective({
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

        const imageUrl = imageResponse.data.preSignedUrl;
        await axios.put(imageUrl, image, {
          headers: {
            'Content-Type': image?.type,
          },
        });
      }

      onClose(); // 모달 닫기
      toast.success('회고 생성에 성공하였습니다.');
      navigate('/retrolist'); // 회고 목록 페이지로 이동
    } catch (error) {
      console.error('회고 생성 실패', error);
    } finally {
      setIsSubmitting(false);
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
        <ModalHeader>
          <p style={{ color: '#6C6C6C' }}>
            Create <span style={{ color: 'black' }}>{type}</span> Retrospect
          </p>
        </ModalHeader>
        <ModalCloseButton />

        <S.CustomModalBody>
          <Flex flexDirection={{ md: 'row', base: 'column' }}>
            <S.LeftColumn>
              <ImageUpload
                onChange={(file, imageUUID) => {
                  setRequestData({ ...requestData, thumbnail: imageUUID });
                  setImage(file);
                }}
                text="PC에서 이미지 선택"
              />
            </S.LeftColumn>
            <S.RightColumn>
              <TitleInput onChange={title => setRequestData({ ...requestData, title })} />
              <TemplateSelect onChange={handleTemplateChange} defaultTemplateId={requestData.templateId} />
              <StartDateCalendar onDateChange={handleStartDateChange} />
            </S.RightColumn>
          </Flex>
        </S.CustomModalBody>
        <S.BottomModalBody>
          <div>회고 설명</div>
          <DescriptionInput onChange={description => setRequestData({ ...requestData, description })} />
        </S.BottomModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleCreateClick} id={name} disabled={isSubmitting}>
            Create
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CreateModal;
