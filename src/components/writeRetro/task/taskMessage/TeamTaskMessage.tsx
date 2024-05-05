import { ChangeEvent, FC, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Flex, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import DeleteData from '../DeleteData';
import ReviseCommentModal from '../ReviseCommentModal';
import { CommentData, sectionData } from '@/api/@types/Section';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { CommentService } from '@/api/services/Comment';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as M from '@/styles/my/myPage.style';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamTaskMessage: FC<Props> = ({ section, setRendering }) => {
  const [value, setValue] = useState<string>('');
  const toast = useCustomToast();
  const [image, setImage] = useState<{ [key: number]: string }>('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handlePostComment = async () => {
    try {
      await CommentService.post({ sectionId: section.sectionId, commentContent: value });
      setRendering(prev => !prev);
      setValue('');
      toast.success('댓글이 추가되었습니다.');
    } catch {
      toast.error('댓글 추가에 실패했습니다.');
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await CommentService.delete({ commentId: id });
      setRendering(prev => !prev);
      toast.info('해당 댓글이 삭제되었습니다.');
    } catch {
      toast.error('댓글 삭제에 실패하였습니다.');
    }
  };

  const fetchImage = async (item: CommentData) => {
    try {
      if (item.thumbnail) {
        const imageURL = await postImageToS3({ filename: item.thumbnail, method: 'GET' });
        setImage(prev => ({
          ...prev,
          [item.commentId]: imageURL.data.preSignedUrl,
        }));
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (section.comments) {
      section.comments.forEach(item => fetchImage(item));
    }
  }, [section.comments, section.comments, image]);

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
            {section.comments &&
              section.comments.map((section: CommentData) => (
                <Flex flexDirection="column">
                  {/* TaskMessageTop */}
                  <Flex>
                    <S.TaskUserProfile>
                      {section.thumbnail ? (
                        <M.UploadImage sizes="40px" width="40px" height="auto" src={image[section.commentId]} />
                      ) : (
                        <CgProfile size="40px" color="#DADEE5" />
                      )}
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
