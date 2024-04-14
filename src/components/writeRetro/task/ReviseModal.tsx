import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  name: sectionData;
}

const ReviseModal: FC<Props> = ({ name }) => {
  // Input 높이 자동 조절
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const ChangeContent = async () => {
    try {
      const data = await SectionServices.patch({ sectionId: name.sectionId, sectionContent: value });
      console.log(data);
    } catch (e) {
      console.error(e);
    }
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
          placeholder={name.content}
          rows={1}
        ></S.ReviseModalInput>

        <S.ReviseModalButtonBox>
          {/* <S.ReviseModalButton>삭제</S.ReviseModalButton> */}

          <Button colorScheme="brand" marginRight={10} onClick={ChangeContent}>
            확인
          </Button>
        </S.ReviseModalButtonBox>
      </S.ReviseModalStyle>
    </>
  );
};

export default ReviseModal;
