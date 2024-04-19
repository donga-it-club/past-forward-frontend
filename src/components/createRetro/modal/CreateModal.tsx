import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import axios from 'axios';
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
  //파일 상태 관리
  const [image, setImage] = useState<Blob | null>(null);

  const [requestData, setRequestData] = useState<PostRetrospectivesRequest>({
    title: '',
    type: type,
    userId: 1,
    templateId: templateId || 1,
    status: Status.NOT_STARTED,
    thumbnail: null,
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
      // 회고 생성 요청 전송
      const retrospectiveResponse = await postRetrospective({
        ...requestData,
        status: Status.NOT_STARTED,
        thumbnail: requestData.thumbnail || null, // thumbnail이 없으면 null을 전송
      });

      // thumbnail이 있는 경우에만 S3에 이미지 업로드
      if (requestData.thumbnail) {
        const imageResponse = await postImageToS3({
          filename: requestData.thumbnail, // imageUUID를 filename으로 설정
          method: 'PUT',
        });
        console.log('사진 S3 업로드 성공 및 url 확인', imageResponse.data.preSignedUrl);

        const imageUrl = imageResponse.data.preSignedUrl;

        const uploadResponse = await axios.put(imageUrl, image, {
          headers: {
            'Content-Type': image?.type,
          },
        });

        if (uploadResponse.status === 200) {
          console.log('사진 form-data 성공', uploadResponse);
        } else {
          console.error('사진 업로드 실패');
        }
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

  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Retrospect</ModalHeader>
        <ModalCloseButton />

        <S.CustomModalBody>
          <S.LeftColumn>
            <ImageUpload
              onChange={(file, imageUUID) => {
                setRequestData({ ...requestData, thumbnail: imageUUID });
                setImage(file);
              }}
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
