import { ChangeEvent, FC, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Flex, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import DeleteData from '../DeleteData';
import ReviseCommentModal from '../ReviseCommentModal';
import { sectionData } from '@/api/@types/Section';
import { CommentService } from '@/api/services/Comment';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamTaskMessage: FC<Props> = ({ section, setRendering }) => {
  const [value, setValue] = useState('');
  const toast = useCustomToast();

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handlePostComment = async () => {
    try {
      await CommentService.post({ sectionId: section.sectionId, commentContent: value });
      setRendering(prev => !prev);
      setValue('');
    } catch (e) {
      toast.error(e);
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await CommentService.delete({ commentId: id });
      setRendering(prev => !prev);
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <>
      {/* TaskMessage */}
      <S.TaskMessageBoxStyle>
        {/* TaskMessageTop */}
        <Flex>
          <S.TaskMessageCount>{section.comments.length}개의 댓글</S.TaskMessageCount>
          <S.TaskMessageLine></S.TaskMessageLine>
        </Flex>

        {/* TaskMessages */}
        <div>
          <S.TaskMessageStyle>
            {section.comments.map(section => (
              <Flex flexDirection="column">
                {/* TaskMessageTop */}
                <Flex>
                  <S.TaskUserProfile>
                    <CgProfile size="40px" color="#DADEE5" />
                    <S.TaskUserName>{section.username ?? '닉네임 없음'}</S.TaskUserName>
                  </S.TaskUserProfile>
                  {/* <S.MessageTime>1일 전</S.MessageTime> */}
                  <DeleteData
                    value="댓글"
                    handleDeleteValue={() => {
                      handleDeleteComment(section.commentId);
                    }}
                  />
                </Flex>
                <Popover>
                  <PopoverTrigger>
                    <S.TaskText>
                      {section.content}
                      {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
                    </S.TaskText>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ReviseCommentModal comment={section} setRendering={setRendering} />
                    {/* TaskTextModal */}
                  </PopoverContent>
                </Popover>

                {/* TaskMessageMain */}
              </Flex>
            ))}
          </S.TaskMessageStyle>
        </div>

        {/* AddMessage */}
        <Flex>
          <S.InputMessage value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1} />
          <S.InputButton onClick={handlePostComment}>확인</S.InputButton>
        </Flex>
      </S.TaskMessageBoxStyle>
    </>
  );
};

export default TeamTaskMessage;
