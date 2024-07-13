import { useState } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { PostRetrospectivesGroupRequest } from '@/api/@types/Groups';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import postGroup from '@/api/retroGroupsApi/postGroup';
import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import DescriptionInput from '@/components/projectRetro/DescriptionInput';
import TitleInput from '@/components/projectRetro/TitleInput';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/Modal.styles';

interface ModalProps {
  isClose: () => void;
  type: string;
}

const Modal: React.FC<ModalProps> = ({ isClose, type }) => {
  const toast = useCustomToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [statusOption, setStatusOption] = useState<string>('ING');
  const statusList = ['ING', 'DONE'];
  const statusObj: { [key: string]: string } = { ING: 'IN_PROGRESS', DONE: 'COMPLETED' };
  const availableOption = statusList.filter(statusList => statusList !== statusOption);

  const [requestData, setRequestData] = useState<PostRetrospectivesGroupRequest>({
    title: '',
    status: statusObj.ING,
    thumbnail: null,
    description: '',
  });

  const [image, setImage] = useState<Blob | null>(null);

  const handleCreateGroup = async () => {
    try {
      if (!requestData.title) {
        alert('그룹 이름을 입력해 주세요.');
        return;
      }
      if (!requestData.description) {
        requestData.description = '';
        return;
      }

      if (requestData.thumbnail) {
        const imageResponse = await postImageToS3({
          filename: requestData.thumbnail,
          method: 'PUT',
        });

        const imageURL = imageResponse.data.preSignedUrl;

        const uploadResponse = await axios.put(imageURL, image, {
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

      // put 요청 전송
      await postGroup({
        ...requestData,
        thumbnail: requestData.thumbnail || null,
      });

      isClose();
    } catch (error) {
      toast.error('그룹 생성에 실패했습니다');
    }
  };

  // const handleEdit = async () => {};

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusOption = (option: string) => {
    setStatusOption(option);
    setIsOpen(false);
  };

  return (
    <S.Background>
      <S.Container>
        <S.Modal>
          <IoMdClose
            onClick={isClose}
            size={20}
            style={{ color: '#a9a9a9', marginLeft: 'auto', marginRight: '10px', marginTop: '10px', cursor: 'pointer' }}
          />
          <S.TitleBox>
            <S.ProjectText>Project</S.ProjectText>
            <S.TitleText>{type === 'create' ? '생성하기' : '수정하기'}</S.TitleText>
          </S.TitleBox>
          <S.ImageBox>
            {type === 'create' && (
              <ImageUpload
                onChange={(file, imageUUID) => {
                  setRequestData({ ...requestData, thumbnail: imageUUID });
                  setImage(file);
                }}
              />
            )}
            {type === 'edit' &&
              //   <ImageUpload
              //     onChange={(file, imageUUID) => {
              //       setRequestData({ ...requestData, thumbnail: imageUUID });
              //       setImage(file);
              //     }}
              //     text="PC에서 이미지 선택"
              //   />
              '변경하기'}
          </S.ImageBox>
          <TitleInput onChange={title => setRequestData({ ...requestData, title })} />
          <S.DescriptionBox>
            <S.Text>프로젝트 설명</S.Text>
            <DescriptionInput onChange={description => setRequestData({ ...requestData, description })} />
          </S.DescriptionBox>
          <S.StatusBox>
            <S.Text>프로젝트 상태</S.Text>
            <S.Button onClick={handleToggle}>
              {statusOption === 'ING' ? (
                <CgTimelapse style={{ color: '#57AD5A' }} />
              ) : (
                <FaRegCircleCheck style={{ color: '#FF1818' }} />
              )}
              <S.StatusText option={statusOption}>&nbsp; {statusOption}</S.StatusText>
              {statusOption === 'ING' && <S.DefaultText>&nbsp;(default)</S.DefaultText>}
              <IoIosArrowDown style={{ marginLeft: 'auto' }} />
            </S.Button>
            {isOpen && (
              <div>
                {availableOption.map((option, index) => (
                  <S.Button
                    key={index}
                    onClick={() => {
                      handleStatusOption(option);
                      setRequestData({ ...requestData, status: statusObj[option] });
                    }}
                  >
                    {option === 'ING' ? (
                      <CgTimelapse style={{ color: '#57AD5A' }} />
                    ) : (
                      <FaRegCircleCheck style={{ color: '#FF1818' }} />
                    )}
                    <S.StatusText option={option}> &nbsp;{option}</S.StatusText>
                  </S.Button>
                ))}
              </div>
            )}
          </S.StatusBox>
          <S.SubmitButton onClick={handleCreateGroup}>
            {type === 'create' && 'Create'}
            {type === 'edit' && 'Edit'}
          </S.SubmitButton>
        </S.Modal>
      </S.Container>
    </S.Background>
  );
};

export default Modal;
