import { ChangeEvent, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import * as S from '@/styles/writeRetroStyles/Layout.style';

export const PersonalTaskMessage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // Input 높이 자동 조절
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
        <div style={{ display: 'flex' }}>
          <S.TaskMessageCount>5개의 댓글</S.TaskMessageCount>
          <S.TaskMessageLine></S.TaskMessageLine>
        </div>

        {/* TaskMessages */}
        <div style={{ width: '279px', height: 'auto' }}>
          <S.TaskMessageStyle>
            <div style={{ display: 'flex' }}>
              <div>
                <FaPlus size="20px" color="#DADEE5" />
              </div>

              <div style={{ marginLeft: '5px' }}>
                {/* TaskMessageTop */}
                <S.MessageTopStyle>
                  <S.MessageUserName>김체리</S.MessageUserName>
                  <S.MessageTime>1일 전</S.MessageTime>
                  <div style={{ margin: 'auto 0', position: 'relative', left: '165px' }}>
                    <div style={{ display: 'flex', width: '35px' }}>
                      <S.TaskRevise>수정</S.TaskRevise>
                      <p style={{ fontSize: '8px', fontWeight: '500', color: '#adb8cc' }}>/</p>
                      <S.TaskRevise>삭제</S.TaskRevise>
                    </div>
                  </div>
                </S.MessageTopStyle>
                {/* TaskMessageMain */}
                <S.MessageText onClick={onOpen}>
                  맥락까지 꼼꼼하게 문서에 기재해주셔서 너무 좋아요!
                  <S.ReviseMessageText>(수정됨)</S.ReviseMessageText>
                </S.MessageText>
                {/* MessageModal */}
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
            </div>
          </S.TaskMessageStyle>
        </div>

        {/* AddMessage */}
        <div style={{ display: 'flex', marginTop: '10px' }}>
          <S.InputMessage
            value={value}
            onChange={handleChange}
            placeholder="내용을 입력해주세요"
            rows={1}
          ></S.InputMessage>
          <S.InputButton style={{ marginTop: '3px', marginLeft: '5px' }}>확인</S.InputButton>
        </div>
      </S.TaskMessageBoxStyle>
    </>
  );
};
