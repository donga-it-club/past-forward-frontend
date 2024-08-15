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
import { CommentData } from '@/api/@types/Section';
import { CommentService } from '@/api/services/Comment';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  comment: CommentData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}

const ReviseCommentModal: FC<Props> = ({ comment, setRendering }) => {
  // Input 높이 자동 조절
  const [value, setValue] = useState('');
  const toast = useCustomToast();

  const ChangeContent = async () => {
    try {
      await CommentService.put({ commentId: comment.commentId, commentContent: value });
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
          {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
        </PopoverTrigger>
        <PopoverContent>
          <S.ReviseModalStyle>
            <S.ReviseModalLine>
              <S.ReviseModalTitle>수정</S.ReviseModalTitle>
            </S.ReviseModalLine>
            <Editable defaultValue={comment.content} margin="10px 0 ">
              <EditablePreview />
              <Input as={EditableInput} value={value} onChange={e => setValue(e.target.value)} />
            </Editable>

            <S.ReviseModalButtonBox>
              {/* <S.ReviseModalButton>삭제</S.ReviseModalButton> */}

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

export default ReviseCommentModal;
