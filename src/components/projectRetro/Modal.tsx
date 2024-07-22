import { useState } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import axios from 'axios';
import { PostRetrospectivesGroupRequest } from '@/api/@types/Groups';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import postGroup from '@/api/retroGroupsApi/postGroup';
import { putGroup } from '@/api/retroGroupsApi/putGroup';
import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import DeleteModal from '@/components/projectRetro/DeleteModal';
import DescriptionInput from '@/components/projectRetro/DescriptionInput';
import TitleInput from '@/components/projectRetro/TitleInput';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/projectRetro/Modal.styles';

interface GroupData {
  id: number;
  title: string;
  description: string;
  thumbnail: string | null;
  status: string;
}

interface ModalProps {
  isClose: () => void;
  type: string;
  selectedGroupData?: GroupData;
}

const Modal: React.FC<ModalProps> = ({ isClose, type, selectedGroupData }) => {
  const toast = useCustomToast();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [statusOption, setStatusOption] = useState<string>('ING');
  const statusList = ['ING', 'DONE'];
  const statusObj: { [key: string]: string } = { ING: 'IN_PROGRESS', DONE: 'COMPLETED' };
  const availableOption = statusList.filter(statusList => statusList !== statusOption);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [editData, setEditData] = useState<GroupData>(
    selectedGroupData || { id: 0, title: '', description: '', thumbnail: null, status: 'IN_PROGRESS' },
  );
  const editStatusList = ['IN_PROGRESS', 'COMPLETED'];
  const editStatusOption = editStatusList.filter(editStatusList => editStatusList !== editData?.status);
  const [image, setImage] = useState<Blob | null>(null);
  const [editImage, setEditImage] = useState<Blob | null>(null);
  const [requestData, setRequestData] = useState<PostRetrospectivesGroupRequest>({
    title: '',
    status: statusObj.ING,
    thumbnail: null,
    description: '',
  });

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

        await axios.put(imageURL, image, {
          headers: {
            'Content-Type': image?.type,
          },
        });
      }

      // put 요청 전송
      await postGroup({
        ...requestData,
        thumbnail: requestData.thumbnail || null,
      });

      isClose();
      window.location.reload();
    } catch (error) {
      toast.error('그룹 생성에 실패했습니다');
    }
  };

  const handleEditGroup = async () => {
    if (editData.thumbnail && selectedGroupData?.thumbnail !== editData.thumbnail) {
      const response = await postImageToS3({
        filename: editData.thumbnail,
        method: 'PUT',
      });

      await axios.put(response.data.preSignedUrl, editImage, {
        headers: {
          'Content-Type': editImage?.type,
        },
      });
    }

    try {
      await putGroup({
        retrospectiveGroupId: editData.id,
        title: selectedGroupData?.title === editData.title ? selectedGroupData?.title : editData.title,
        status: selectedGroupData?.status === editData.status ? selectedGroupData.status : editData.status,
        description:
          selectedGroupData?.description === editData.description
            ? selectedGroupData.description
            : editData.description,
        thumbnail:
          selectedGroupData?.thumbnail === editData.thumbnail ? selectedGroupData.thumbnail : editData.thumbnail,
      });
      isClose();
      toast.info('그룹 수정이 정상 처리되었습니다.');
      window.location.reload();
    } catch (e) {
      toast.error('그룹 수정에 실패했습니다.');
    }
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCreateStatusOption = (option: string) => {
    setStatusOption(option);
    setIsOpen(false);
  };

  const handleEditStatusOption = (option: string) => {
    setStatusOption(option);
    setIsOpen(false);
  };

  const handleDeleteModal = () => {
    setDeleteModal(true);
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
                text="PC에서 이미지 선택"
              />
            )}
            {type === 'edit' && (
              <>
                {!editData.thumbnail && <S.ImageText>변경 전 사진이 없습니다.</S.ImageText>}
                <ImageUpload
                  onChange={(file, imageUUID) => {
                    setEditData({ ...editData, thumbnail: imageUUID });
                    setEditImage(file);
                  }}
                  text="변경하기"
                />
              </>
            )}
          </S.ImageBox>
          <TitleInput
            placeholder={selectedGroupData?.title ? selectedGroupData?.title : 'Project Name *'}
            onChange={title => {
              setRequestData({ ...requestData, title });
              setEditData({ ...editData, title });
            }}
          />
          <S.DescriptionBox>
            <S.Text>프로젝트 설명</S.Text>
            <DescriptionInput
              placeholder={
                selectedGroupData?.description
                  ? selectedGroupData?.description
                  : '프로젝트에 대한 설명을 입력해 주세요.'
              }
              onChange={description => {
                setRequestData({ ...requestData, description });
                setEditData({ ...editData, description });
              }}
            />
          </S.DescriptionBox>
          <S.StatusBox>
            <S.Text>프로젝트 상태</S.Text>
            <S.Button onClick={handleToggle}>
              {type === 'create' && statusOption === 'ING' && <CgTimelapse style={{ color: '#57AD5A' }} />}
              {type === 'create' && statusOption === 'DONE' && <FaRegCircleCheck style={{ color: '#FF1818' }} />}
              {type === 'edit' && editData?.status === 'IN_PROGRESS' && <CgTimelapse style={{ color: '#57AD5A' }} />}
              {type === 'edit' && editData?.status === 'COMPLETED' && <FaRegCircleCheck style={{ color: '#FF1818' }} />}
              {type === 'create' && <S.StatusText option={statusOption}>&nbsp; {statusOption}</S.StatusText>}
              {type === 'edit' && (
                <S.StatusEditText option={editData?.status}>
                  {editData?.status === 'IN_PROGRESS' ? 'ING' : 'DONE'}
                </S.StatusEditText>
              )}
              {type === 'create' && statusOption === 'ING' && <S.DefaultText>&nbsp;(default)</S.DefaultText>}
              {type === 'edit' && editData?.status === 'IN_PROGRESS' && <S.DefaultText>&nbsp;(default)</S.DefaultText>}
              <IoIosArrowDown style={{ marginLeft: 'auto' }} />
            </S.Button>
            {isOpen && type === 'edit' && (
              <div>
                {editStatusOption.map((option, index) => (
                  <S.Button
                    key={index}
                    onClick={() => {
                      handleEditStatusOption(option);
                      setEditData({ ...editData, status: option });
                    }}
                  >
                    {option === 'IN_PROGRESS' ? (
                      <CgTimelapse style={{ color: '#57AD5A' }} />
                    ) : (
                      <FaRegCircleCheck style={{ color: '#FF1818' }} />
                    )}
                    <S.StatusEditText option={option}>
                      {option === 'IN_PROGRESS' ? 'ING' : option === 'COMPLETED' && 'DONE'}
                    </S.StatusEditText>
                  </S.Button>
                ))}
              </div>
            )}
            {isOpen && type === 'create' && (
              <div>
                {availableOption.map((option, index) => (
                  <S.Button
                    key={index}
                    onClick={() => {
                      handleCreateStatusOption(option);
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
          <S.ButtonContainer>
            <S.SubmitButton onClick={type === 'create' ? handleCreateGroup : handleEditGroup}>
              {type === 'create' && 'Create'}
              {type === 'edit' && 'Edit'}
            </S.SubmitButton>
            {type === 'edit' && <S.DeleteButton onClick={handleDeleteModal}>Delete</S.DeleteButton>}
          </S.ButtonContainer>
        </S.Modal>
      </S.Container>
      {deleteModal && (
        <DeleteModal
          groupId={editData.id}
          title={editData.title}
          isClose={() => setDeleteModal(false)}
          modalClose={isClose}
        />
      )}{' '}
    </S.Background>
  );
};

export default Modal;
