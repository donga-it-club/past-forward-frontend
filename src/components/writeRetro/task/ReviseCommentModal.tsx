import { ChangeEvent, FC, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { CommentData } from '@/api/@types/Section';
import { CommentService } from '@/api/services/Comment';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  comment: CommentData;
}

const ReviseCommentModal: FC<Props> = ({ comment }) => {
  // Input 높이 자동 조절
  const [value, setValue] = useState('');
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const ChangeContent = async () => {
    try {
      const data = await CommentService.put({ commentId: comment.commentId, commentContent: value });
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
          placeholder={comment.content}
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

export default ReviseCommentModal;
