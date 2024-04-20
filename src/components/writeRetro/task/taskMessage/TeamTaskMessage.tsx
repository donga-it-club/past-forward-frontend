import { ChangeEvent, FC, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from '@chakra-ui/react';
import ReviseCommentModal from '../ReviseCommentModal';
import { PostCommentData } from '@/api/@types/Comment';
import { sectionData } from '@/api/@types/Section';
import { CommentService } from '@/api/services/Comment';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
}

const TeamTaskMessage: FC<Props> = ({ section }) => {
  const [value, setValue] = useState('');
  const [comment, setComment] = useState<PostCommentData>();
  const toast = useCustomToast();
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handlePostComment = async () => {
    try {
      const response = await CommentService.post({ sectionId: section.sectionId, commentContent: value });
      setComment(response.data);
      console.log(comment);
    } catch (e) {
      toast.error(e);
    }
  };

  const handleDeleteComment = async (id: number) => {
    try {
      await CommentService.delete({ commentId: id });
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
                  <Popover>
                    <PopoverTrigger>
                      <S.TaskRevise>삭제</S.TaskRevise>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader display="flex">
                          <FaRegTrashAlt style={{ margin: 'auto 0', marginRight: '10px' }} />
                          삭제요청
                        </PopoverHeader>

                        <PopoverBody>
                          <S.DeleteSectionText>선택한 회고 카드를 삭제하시겠습니까?</S.DeleteSectionText>
                          <Flex flexDirection="row-reverse">
                            <Button
                              colorScheme="brand"
                              margin="0 10px"
                              onClick={() => {
                                handleDeleteComment(section.commentId);
                              }}
                            >
                              <PopoverCloseButton hidden />
                              삭제
                            </Button>
                          </Flex>
                        </PopoverBody>
                      </PopoverContent>
                    </Portal>
                  </Popover>
                </Flex>
                <Popover>
                  <PopoverTrigger>
                    <S.TaskText>
                      {section.content}
                      {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
                    </S.TaskText>
                  </PopoverTrigger>
                  <PopoverContent>
                    <ReviseCommentModal comment={section} />
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
