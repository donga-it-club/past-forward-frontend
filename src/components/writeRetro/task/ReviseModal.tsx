import { FC, useState } from 'react';
import {
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@chakra-ui/react';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
  userId: number;
}

const ReviseModal: FC<Props> = ({ section, setRendering, userId }) => {
  // Input 높이 자동 조절
  const [value, setValue] = useState<string>('');
  const toast = useCustomToast();

  const ChangeContent = async () => {
    try {
      await SectionServices.patch({ sectionId: section.sectionId, sectionContent: value, userId: userId });
      setRendering(prev => !prev);
    } catch (e) {
      toast.error(e);
    }
  };
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <S.TaskRevise style={{ color: 'blue' }}>수정</S.TaskRevise>
        </PopoverTrigger>
        <PopoverContent>
          <S.ReviseModalStyle>
            <S.ReviseModalLine>
              <S.ReviseModalTitle>수정</S.ReviseModalTitle>
            </S.ReviseModalLine>
            <Editable defaultValue={section.content} margin="10px 0 ">
              <EditablePreview />
              <Input as={EditableInput} value={value} onChange={e => setValue(e.target.value)} />
            </Editable>

            <S.ReviseModalButtonBox>
              <Button colorScheme="brand" marginRight={10} onClick={ChangeContent}>
                확인
              </Button>
            </S.ReviseModalButtonBox>
          </S.ReviseModalStyle>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ReviseModal;
