import { ChangeEvent, FC, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Flex, Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { sectionData } from '@/api/@types/Section';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  name: sectionData;
}

const TeamTaskMessage: FC<Props> = ({ name }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <>
      {/* TaskMessage */}
      <S.TaskMessageBoxStyle>
        {/* TaskMessageTop */}
        <Flex>
          <S.TaskMessageCount>5개의 댓글</S.TaskMessageCount>
          <S.TaskMessageLine></S.TaskMessageLine>
        </Flex>

        {/* TaskMessages */}
        <div>
          <S.TaskMessageStyle>
            {name.comments.map(data => (
              <Flex flexDirection="column">
                {/* TaskMessageTop */}
                <S.MessageTopStyle>
                  <CgProfile size={40} color="#DADEE5" />
                  <S.MessageUserName>{data.username}</S.MessageUserName>
                  {/* <S.MessageTime>1일 전</S.MessageTime> */}
                  <div style={{ margin: 'auto 0' }}>
                    <Flex>
                      <S.TaskRevise>삭제</S.TaskRevise>
                    </Flex>
                  </div>
                </S.MessageTopStyle>
                {/* TaskMessageMain */}
                <S.MessageText onClick={onOpen}>
                  {data.content}
                  {/* TeamActionItemsTask */}
                </S.MessageText>
                {/* MessageModal */}
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
              </Flex>
            ))}
          </S.TaskMessageStyle>
        </div>

        {/* AddMessage */}
        <Flex>
          <S.InputMessage value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1} />
          <S.InputButton>확인</S.InputButton>
        </Flex>
      </S.TaskMessageBoxStyle>
    </>
  );
};

export default TeamTaskMessage;
