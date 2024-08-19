import { ChangeEvent, FC, useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Button, Center, Flex, Spinner } from '@chakra-ui/react';
import DeleteData from '../DeleteData';
import ReviseCommentModal from '../ReviseCommentModal';
import { CommentData, sectionData } from '@/api/@types/Section';
import { UserData } from '@/api/@types/Users';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { CommentService } from '@/api/services/Comment';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as M from '@/styles/my/myPage.style';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
  user: UserData;
  teamId: number | null;
}

const TeamTaskMessage: FC<Props> = ({ section, setRendering, user, teamId }) => {
  const [value, setValue] = useState<string>('');
  const toast = useCustomToast();
  const [image, setImage] = useState<{ [key: number]: string }>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handlePostComment = async () => {
    setIsDisabled(true);

    try {
      await CommentService.post({ sectionId: section.sectionId, commentContent: value });
      setTimeout(() => setIsDisabled(false), 1500);
      setRendering(prev => !prev);
      setIsLoading(false);
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
    } finally {
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
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (section.comments) {
      section.comments.forEach(item => fetchImage(item));
    }
  }, [section.comments, section.comments, isLoading]);

  if (isLoading && section.comments.length !== 0) {
    return (
      <Center w="100%" h="100%" margin="20px 0">
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      {/* TaskMessage */}
      <S.TaskMessageBoxStyle>
        {/* TaskMessageTop */}
        <Flex>
          <S.TaskMessageCount>
            {section.comments.length}개의 {teamId !== null ? '댓글' : '메모'}
          </S.TaskMessageCount>
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
                        isImageLoaded ? (
                          <M.UploadImage sizes="40px" width="40px" height="auto" src={image[section.commentId]} />
                        ) : (
                          <>
                            <Spinner size="md" />
                            <M.UploadImage
                              sizes="40px"
                              width="40px"
                              height="auto"
                              src={image[section.commentId]}
                              onLoad={() => setIsImageLoaded(true)}
                              style={{ display: 'none' }} // 숨겨진 이미지, 로드 완료 후 스피너를 제거하려면 필요
                            />
                          </>
                        )
                      ) : (
                        <CgProfile size="40px" color="#DADEE5" />
                      )}
                      <S.TaskUserName>{section.username ?? '닉네임 없음'}</S.TaskUserName>
                    </S.TaskUserProfile>
                    {user.userName === section.username && (
                      <>
                        <ReviseCommentModal comment={section} setRendering={setRendering} />
                        <DeleteData
                          value="댓글"
                          handleDeleteValue={() => {
                            handleDeleteComment(section.commentId);
                          }}
                        />
                      </>
                    )}
                  </Flex>
                  <Flex>
                    <S.TaskText>{section.content} </S.TaskText>{' '}
                    {section.createdDate !== section.lastModifiedDate && (
                      <S.TaskText style={{ color: '#DADEE5' }}>(수정됨)</S.TaskText>
                    )}
                  </Flex>
                </Flex>
              ))}
          </S.TaskMessageStyle>
        </div>

        {/* AddMessage */}
        <Flex>
          <S.InputMessage value={value} onChange={handleChange} placeholder="내용을 입력해주세요" rows={1} />
          {isDisabled ? (
            <Button marginTop={10} margin="5px 10px" colorScheme="blue" isLoading loadingText="Loading">
              로딩 중
            </Button>
          ) : (
            <S.InputButton onClick={handlePostComment}>확인</S.InputButton>
          )}
        </Flex>
      </S.TaskMessageBoxStyle>
    </>
  );
};

export default TeamTaskMessage;
