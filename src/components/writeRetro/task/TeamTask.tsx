import { FC, useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdAccessAlarm, MdMessage } from 'react-icons/md';
import { Flex, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import dayjs from 'dayjs';
import TeamTaskMessage from './taskMessage/TeamTaskMessage';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const formattedDate = (name: any) => dayjs(name).format('YYYY/MM/DD HH:MM');

interface Props {
  name: sectionData;
}

const TeamTask: FC<Props> = ({ name }) => {
  const toast = useCustomToast();
  const [liked, setLiked] = useState<number>(0);
  const [messaged, setMessaged] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleLike = async () => {
    try {
      const data = await SectionServices.likePost({ sectionId: name.sectionId });
      setLiked(data.data.likeCnt);
      console.log('like', liked);
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
      await SectionServices.delete({ sectionId: name.sectionId });
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
              <S.TaskUserName>{name.username}</S.TaskUserName>
            </S.TaskUserProfile>

            <S.TaskRevise onClick={DeleteSection}>삭제</S.TaskRevise>
          </Flex>

          {/* TaskCenter */}
          <Popover>
            <PopoverTrigger>
              <S.TaskText>
                {name.content}
                {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
              </S.TaskText>
            </PopoverTrigger>
            <PopoverContent>
              {/* TaskTextModal */}

              <ReviseModal name={name} />
            </PopoverContent>
          </Popover>
          {name.sectionName === 'Action Items' && (
            <S.ManagerStyle>
              <div>
                <S.ManagerButton>M</S.ManagerButton>
              </div>
              <S.ManagerText>{name.username}</S.ManagerText>
            </S.ManagerStyle>
          )}

          {/* TaskBottom */}
          <S.SubTaskBox>
            {/* Like */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleLike}>
                {liked ? <BiSolidLike size="20px" color="#111B47" /> : <BiLike size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>{name.likeCnt}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged}>
                {messaged ? <MdMessage size="20px" color="#111B47" /> : <MdMessage size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>4</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* DaysLeft */}
            <S.SubTaskStyle>
              <S.SubTaskIcon>
                <MdAccessAlarm size="20px" color="#DADEE5" />
              </S.SubTaskIcon>
              <S.SubTaskCount>{formattedDate(name.createdDate)}</S.SubTaskCount>
            </S.SubTaskStyle>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        {isVisible && <TeamTaskMessage name={name} />}
      </S.TaskBox>
    </>
  );
};

export default TeamTask;
