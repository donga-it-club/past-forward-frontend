import { useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAccessAlarm } from 'react-icons/md';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { PersonalTaskMessage } from './taskMessage/PersonalTaskMessage';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const PersonalTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userName: string = '김사과';
  const taskText: string = '문서 작성 - 수기를 담당하신 분이 작성한 회의록';
  const MessageCount: number = 4;
  const DaysLeftCount: number = 20240326;

  const [messaged, setMessaged] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const handleMessaged = () => {
    setMessaged(messaged => !messaged);
    setIsVisible(isVisible => !isVisible);
  };

  return (
    <>
      <S.TaskBox>
        <S.TaskMainStyle>
          {/* TaskTop */}
          <div style={{ display: 'flex' }}>
            <S.TaskUserProfile>
              <CgProfile size="20px" color="#DADEE5" />
            </S.TaskUserProfile>
            <S.TaskUserName>{userName}</S.TaskUserName>
            <div style={{ margin: 'auto 0', position: 'relative', left: '180px' }}>
              <div style={{ display: 'flex', width: '35px' }}>
                <S.TaskRevise>수정</S.TaskRevise>
                <p style={{ fontSize: '8px', fontWeight: '500', color: '#adb8cc' }}>/</p>
                <S.TaskRevise>수정</S.TaskRevise>
              </div>
            </div>
          </div>

          {/* TaskCenter */}
          <S.TaskText onClick={onOpen}>
            {taskText}
            <S.ReviseText>(수정됨)</S.ReviseText>
          </S.TaskText>
          {/* TaskTextModal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent sx={{ width: 'auto', height: 'auto', borderRadius: '30px', position: 'relative' }}>
              <ReviseModal />
              <ModalCloseButton
                sx={{
                  width: '30px',
                  height: '30px',
                  fontSize: '18px',
                  color: '#8B8B8B',
                  position: 'absolute',
                  top: '31px',
                  left: '600px',
                }}
              />
            </ModalContent>
          </Modal>

          {/* TaskBottom */}
          <S.SubTaskBox>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged}>
                {messaged ? (
                  <AiFillPlusCircle size="20px" color="#111B47" />
                ) : (
                  <CiCirclePlus size="20px" color="#DADEE5" />
                )}{' '}
              </S.SubTaskIcon>
              <S.SubTaskCount>{MessageCount}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* DaysLeft */}
            <S.SubTaskStyle>
              <S.SubTaskIcon>
                <MdAccessAlarm size="20px" color="#DADEE5" />
              </S.SubTaskIcon>
              <S.SubTaskCount>{DaysLeftCount}</S.SubTaskCount>
            </S.SubTaskStyle>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        {isVisible && <PersonalTaskMessage />}
      </S.TaskBox>
    </>
  );
};

export default PersonalTask;
