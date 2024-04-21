import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviseModal: FC<Props> = ({ section, setRendering }) => {
  // Input 높이 자동 조절
  const [value, setValue] = useState<string>('');
  const toast = useCustomToast();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const ChangeContent = async () => {
    try {
      await SectionServices.patch({ sectionId: section.sectionId, sectionContent: value });
      setRendering(prev => !prev);
    } catch (e) {
      toast.error(e);
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
          placeholder={section.content}
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
