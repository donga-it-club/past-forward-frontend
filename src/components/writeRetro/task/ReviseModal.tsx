import { ChangeEvent, useState } from 'react';
import { Button } from '@chakra-ui/react';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const ReviseModal = () => {
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
          {/* <S.ReviseModalButton>삭제</S.ReviseModalButton> */}
          <Button colorScheme="red" variant="outline" margin="0 10px">
            삭제
          </Button>
          <Button colorScheme="brand">확인</Button>
        </S.ReviseModalButtonBox>
      </S.ReviseModalStyle>
    </>
  );
};

export default ReviseModal;
