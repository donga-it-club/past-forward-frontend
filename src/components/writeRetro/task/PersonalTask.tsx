import { FC, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAccessAlarm } from 'react-icons/md';
import { Flex, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { PersonalTaskMessage } from './taskMessage/PersonalTaskMessage';
import { sectionData } from '@/api/@types/Section';
import { convertToLocalTime } from '@/components/RetroList/ContentsList';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  name: sectionData;
}

const PersonalTask: FC<Props> = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          <Flex>
            <S.TaskUserProfile style={{ flex: 2 }}>
              <CgProfile size={40} color="#DADEE5" />
              <S.TaskUserName>{name.username}</S.TaskUserName>
            </S.TaskUserProfile>
            <div style={{ margin: 'auto 0' }}>
              <Flex>
                <S.TaskRevise>삭제</S.TaskRevise>
              </Flex>
            </div>
          </Flex>

          {/* TaskCenter */}
          <S.TaskText onClick={onOpen}>
            {name.content}
            {/* {section?.data.id} */}
            {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
          </S.TaskText>

          {/* TaskTextModal */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent sx={{ borderRadius: '30px', position: 'relative' }}>
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
                )}
              </S.SubTaskIcon>
              <S.SubTaskCount>4</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* DaysLeft */}
            <S.SubTaskStyle>
              <S.SubTaskIcon>
                <MdAccessAlarm size="20px" color="#DADEE5" />
              </S.SubTaskIcon>
              <S.SubTaskCount>{convertToLocalTime(name.createdDate)}</S.SubTaskCount>
            </S.SubTaskStyle>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        {isVisible && <PersonalTaskMessage />}
      </S.TaskBox>
    </>
  );
};

export default PersonalTask;
