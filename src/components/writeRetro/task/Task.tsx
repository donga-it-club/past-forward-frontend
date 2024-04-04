import { useState, ChangeEvent } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { BiLike } from 'react-icons/bi';
import { BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { CiCirclePlus } from 'react-icons/ci';
import { MdMessage } from 'react-icons/md';
import { MdAccessAlarm } from 'react-icons/md';
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, useDisclosure } from '@chakra-ui/react';
import { TeamTaskMessage, PersonalTaskMessage } from '@/components/writeRetro/task/TaskMessage';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const TeamTaskReviseBox = () => {
  return (
    <div style={{ display: 'flex', width: '35px' }}>
      <TeamTaskRevise></TeamTaskRevise>
      <p style={{ fontSize: '8px', fontWeight: '500', color: '#adb8cc' }}>/</p>
      <TeamTaskDelete></TeamTaskDelete>
    </div>
  );
};

export const TeamTaskRevise = () => {
  return (
    <>
      <S.TaskRevise>수정</S.TaskRevise>
    </>
  );
};

export const TeamTaskDelete = () => {
  return (
    <>
      <S.TaskRevise>삭제</S.TaskRevise>
    </>
  );
};

export const PersonalTaskReviseBox = () => {
  return (
    <div style={{ display: 'flex', width: '35px' }}>
      <PersonalTaskRevise></PersonalTaskRevise>
      <p style={{ fontSize: '8px', fontWeight: '500', color: '#adb8cc' }}>/</p>
      <PersonalTaskRevise></PersonalTaskRevise>
    </div>
  );
};

export const PersonalTaskRevise = () => {
  return (
    <>
      <S.TaskRevise>수정</S.TaskRevise>
    </>
  );
};

export const PersonalTaskDelete = () => {
  return (
    <>
      <S.TaskRevise>삭제</S.TaskRevise>
    </>
  );
};

export const ReviseModal = () => {
  // Input 높이 자동 조절
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };
  return (
    <>
      <S.ReviseModalStyle>
        <S.ReviseModalLine>
          <S.ReviseModalTitle>수정</S.ReviseModalTitle>
        </S.ReviseModalLine>
        <S.ReviseModalInput
          value={value}
          onChange={handleChange}
          placeholder="내용을 입력하세요."
          rows={1}
        ></S.ReviseModalInput>

        <S.ReviseModalButtonBox>
          <S.ReviseModalButton>삭제</S.ReviseModalButton>
          <S.ReviseModalButton>확인</S.ReviseModalButton>
        </S.ReviseModalButtonBox>
      </S.ReviseModalStyle>
    </>
  );
};

export const Manager = () => {
  return (
    <>
      <S.ManagerStyle>
        <S.ManagerText>담당자</S.ManagerText>
        <div>
          <S.ManagerButton>M</S.ManagerButton>
        </div>
      </S.ManagerStyle>
    </>
  );
};

export const TeamTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userName: string = '김사과';
  const taskText: string = '문서 작성 - 수기를 담당하신 분이 작성한 회의록';
  const likeCount: number = 3;
  const MessageCount: number = 4;
  const DaysLeftCount: number = 20240326;

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
            <S.TaskUserName>{userName}</S.TaskUserName>
            <div style={{ margin: 'auto 0', position: 'relative', left: '180px' }}>
              <TeamTaskReviseBox></TeamTaskReviseBox>
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
              <ReviseModal></ReviseModal>
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
            {/* Like */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleLike}>
                {liked ? <BiSolidLike size="20px" color="#111B47" /> : <BiLike size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>{likeCount}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged}>
                {messaged ? <MdMessage size="20px" color="#111B47" /> : <MdMessage size="20px" color="#DADEE5" />}
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

        {isVisible && <TeamTaskMessage />}
      </S.TaskBox>
    </>
  );
};

export const TeamActionItemsTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const userName: string = '김사과';
  const taskText: string = '문서 작성 - 수기를 담당하신 분이 작성한 회의록';
  const likeCount: number = 3;
  const MessageCount: number = 4;
  const DaysLeftCount: number = 20240326;

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
            <S.TaskUserName>{userName}</S.TaskUserName>
            <div style={{ margin: 'auto 0', position: 'relative', left: '180px' }}>
              <TeamTaskReviseBox></TeamTaskReviseBox>
            </div>
          </div>

          {/* TaskCenter */}
          <div style={{ display: 'flex', position: 'relative' }}>
            <S.ActionTaskText onClick={onOpen}>
              {taskText}
              <S.ReviseText>(수정됨)</S.ReviseText>
            </S.ActionTaskText>
            {/* TaskTextModal */}
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent sx={{ width: 'auto', height: 'auto', borderRadius: '30px', position: 'relative' }}>
                <ReviseModal></ReviseModal>
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
            <Manager></Manager>
          </div>

          {/* TaskBottom */}
          <S.SubTaskBox>
            {/* Like */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleLike}>
                {liked ? <BiSolidLike size="20px" color="#111B47" /> : <BiLike size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>{likeCount}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged}>
                {messaged ? <MdMessage size="20px" color="#111B47" /> : <MdMessage size="20px" color="#DADEE5" />}
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

        {isVisible && <TeamTaskMessage />}
      </S.TaskBox>
    </>
  );
};

export const PersonalTask = () => {
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
              <PersonalTaskReviseBox></PersonalTaskReviseBox>
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
              <ReviseModal></ReviseModal>
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
