import { useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdAccessAlarm, MdMessage } from 'react-icons/md';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import TeamTaskMessage from './taskMessage/TeamTaskMessage';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const TeamActionItemsTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [liked, setLiked] = useState(false);
  const handleLike = () => {
    setLiked(!liked);
  };

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
            <S.TaskUserName>김사과</S.TaskUserName>
            <div style={{ margin: 'auto 0', position: 'relative', left: '180px' }}>
              <div style={{ display: 'flex', width: '35px' }}>
                <S.TaskRevise>수정</S.TaskRevise>
                <p style={{ fontSize: '8px', fontWeight: '500', color: '#adb8cc' }}>/</p>
                <S.TaskRevise>삭제</S.TaskRevise>
              </div>
            </div>
          </div>

          {/* TaskCenter */}
          <div style={{ display: 'flex', position: 'relative' }}>
            <S.ActionTaskText onClick={onOpen}>
              문서 작성 - 수기를 담당하신 분이 작성한 회의록
              <S.ReviseText>(수정됨)</S.ReviseText>
            </S.ActionTaskText>
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
          </div>

          {/* TaskBottom */}
          <S.SubTaskBox>
            {/* Like */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleLike}>
                {liked ? <BiSolidLike size="20px" color="#111B47" /> : <BiLike size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>3</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged}>
                {messaged ? <MdMessage size="20px" color="#111B47" /> : <MdMessage size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>4</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* DaysLeft */}
            <S.SubTaskStyle>
              <S.SubTaskIcon>
                <MdAccessAlarm size="20px" color="#DADEE5" />
              </S.SubTaskIcon>
              <S.SubTaskCount>20240326</S.SubTaskCount>
            </S.SubTaskStyle>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        {isVisible && <TeamTaskMessage />}
      </S.TaskBox>
    </>
  );
};
