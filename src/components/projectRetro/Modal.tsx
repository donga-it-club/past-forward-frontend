import { useState } from 'react';
import { CgTimelapse } from 'react-icons/cg'; // ing
import { FaRegCircleCheck } from 'react-icons/fa6'; // done
import { IoMdClose } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
// import Thumbnail from '@/assets/Thumbnail.png';
// import ImageUpload from '@/components/createRetro/modal/ImageUpload';
import * as S from '@/styles/projectRetro/Modal.styles';

interface ModalProps {
  isClose: () => void;
  type: string;
}

const Modal: React.FC<ModalProps> = ({ isClose, type }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [statusOption, setStatusOption] = useState<string>('ING');
  const statusList = ['ING', 'DONE'];
  const availableOption = statusList.filter(statusList => statusList !== statusOption);

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
            {type === 'create' &&
              //   <ImageUpload
              //     onChange={(file, imageUUID) => {
              //       setRequestData({ ...requestData, thumbnail: imageUUID });
              //       setImage(file);
              //     }}
              //     text="PC에서 이미지 선택"
              //   />
              'PC에서 이미지 선택'}
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
          <S.NameInput placeholder="Project Name *" />
          <S.DescriptionBox>
            <S.Text>프로젝트 설명</S.Text>
            <S.DescriptionInput placeholder="프로젝트에 대한 설명을 입력해 주세요." />
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
                  <S.Button key={index} onClick={() => handleStatusOption(option)}>
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
          <S.SubmitButton>
            {type === 'create' && 'Create'}
            {type === 'edit' && 'Edit'}
          </S.SubmitButton>
        </S.Modal>
      </S.Container>
    </S.Background>
  );
};

export default Modal;
