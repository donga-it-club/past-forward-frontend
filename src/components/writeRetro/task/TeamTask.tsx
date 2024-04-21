import { FC, useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdAccessAlarm, MdMessage } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
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
import TeamTaskMessage from './taskMessage/TeamTaskMessage';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import { convertToLocalTime } from '@/components/RetroList/ContentsList';
import ActionItemTask from '@/components/writeRetro/ActionItems/ActionItemTask';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
}

const TeamTask: FC<Props> = ({ section, setRendering }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const toast = useCustomToast();
  const [messaged, setMessaged] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [liked, setLiked] = useState<number>(0);

  const rId = Number(query[1]); // action-items로 넘겨줄 Id값들
  const tId = Number(query[3]);
  const sId: number = section.sectionId;

  const handleLike = async () => {
    try {
      const data = await SectionServices.likePost({ sectionId: section.sectionId });
      setLiked(data.data.likeCnt);
      setRendering(prev => !prev);
    } catch (e) {
      toast.error(e);
    }
  };

  const handleMessaged = () => {
    setMessaged(messaged => !messaged);
    setIsVisible(isVisible => !isVisible);
  };

  const DeleteSection = async () => {
    try {
      await SectionServices.delete({ sectionId: section.sectionId });
      setRendering(prev => !prev);
    } catch (e) {
      toast.error(e);
    }
  };

  return (
    <>
      <S.TaskBox>
        <S.TaskMainStyle>
          {/* TaskTop */}
          <Flex margin="10px auto">
            <S.TaskUserProfile>
              <CgProfile size="40px" color="#DADEE5" />
              <S.TaskUserName>{section.username ?? '닉네임 없음'}</S.TaskUserName>
            </S.TaskUserProfile>

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
                      <Button colorScheme="brand" onClick={DeleteSection} margin="0 10px">
                        <PopoverCloseButton hidden />
                        삭제
                      </Button>
                    </Flex>
                  </PopoverBody>
                </PopoverContent>
              </Portal>
            </Popover>
          </Flex>

          {/* TaskCenter */}
          <Popover>
            <PopoverTrigger>
              <div>
                <S.TaskText>
                  {section.content}
                  {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
                </S.TaskText>
              </div>
            </PopoverTrigger>
            {section.sectionName === 'Action Items' && (
              <S.ManagerStyle>
                <ActionItemTask tId={tId} rId={rId} sId={sId} />
                <S.ManagerText>담당자</S.ManagerText>
              </S.ManagerStyle>
            )}
            <PopoverContent>
              <ReviseModal section={section} setRendering={setRendering} />
            </PopoverContent>
          </Popover>

          {/* TaskBottom */}
          <S.SubTaskBox>
            {/* Like */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleLike}>
                {liked ? <BiSolidLike size="20px" color="#111B47" /> : <BiLike size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>{section.likeCnt}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged}>
                {messaged ? <MdMessage size="20px" color="#111B47" /> : <MdMessage size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>{section.comments.length}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* DaysLeft */}
            <S.SubTaskStyle>
              <S.SubTaskIcon>
                <MdAccessAlarm size="20px" color="#DADEE5" />
              </S.SubTaskIcon>
              <S.SubTaskCount>{convertToLocalTime(section.createdDate)}</S.SubTaskCount>
            </S.SubTaskStyle>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        {isVisible && <TeamTaskMessage section={section} setRendering={setRendering} />}
      </S.TaskBox>
    </>
  );
};

export default TeamTask;
