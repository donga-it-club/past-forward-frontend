import { FC, useEffect, useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdAccessAlarm, MdMessage } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Flex, Popover, PopoverContent, PopoverTrigger, Image } from '@chakra-ui/react';
import DeleteData from './DeleteData';
import TeamTaskMessage from './taskMessage/TeamTaskMessage';
import { sectionData } from '@/api/@types/Section';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { SectionServices } from '@/api/services/Section';
import { convertToLocalTime } from '@/components/RetroList/ContentsList';
import ActionItemTask from '@/components/writeRetro/ActionItems/ActionItemTask';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
  setRendering: React.Dispatch<React.SetStateAction<boolean>>;
  teamId: number;
  imageURL: string;
}

const TeamTask: FC<Props> = ({ section, setRendering, teamId, imageURL }) => {
  const { search } = useLocation();
  const query = search.split(/[=,&]/);
  const toast = useCustomToast();
  const [messaged, setMessaged] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [liked, setLiked] = useState<number>(0);
  const [image, setImage] = useState<string>('');

  const rId = Number(query[1]); // action-items로 넘겨줄 Id값들
  const tId = Number(query[3]);
  const sId: number = section.sectionId;

  const fetchRetrospectiveImage = async () => {
    if (section) {
      try {
        const data = await postImageToS3({ filename: imageURL, method: 'GET' });
        setImage(data.data.preSignedUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  const handleLike = async () => {
    try {
      const data = await SectionServices.likePost({ sectionId: section.sectionId });
      setLiked(data.data.likeCnt);
      setRendering(prev => !prev);
    } catch {
      toast.error('회고 카드 좋아요 요청에 실패하였습니다.');
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
      toast.info('회고 카드가 삭제되었습니다.');
    } catch {
      toast.error('존재하지 않는 회고 카드입니다.');
    }
  };

  useEffect(() => {
    fetchRetrospectiveImage();
  });

  const actionCondition = teamId && section.sectionName === 'Action Items';

  return (
    <>
      <S.TaskBox>
        <S.TaskMainStyle>
          {/* TaskTop */}
          <Flex margin="10px auto">
            <S.TaskUserProfile>
              {image ? <Image src={image} sizes="40px" /> : <CgProfile size="40px" color="#DADEE5" />}
              <S.TaskUserName>{section.username ?? '닉네임 없음'}</S.TaskUserName>
            </S.TaskUserProfile>

            <DeleteData value="회고 카드" handleDeleteValue={DeleteSection} />
          </Flex>

          {/* TaskCenter */}

          <Popover>
            <PopoverTrigger>
              <div>
                <S.TaskText>{section.content}</S.TaskText>
              </div>
            </PopoverTrigger>
            {actionCondition ? (
              <S.ManagerStyle>
                <ActionItemTask tId={tId} rId={rId} sId={sId} />
                <S.ManagerText>담당자</S.ManagerText>
              </S.ManagerStyle>
            ) : null}
            <PopoverContent>
              <ReviseModal section={section} setRendering={setRendering} />
            </PopoverContent>
          </Popover>

          {/* TaskBottom */}
          <S.SubTaskBox>
            {/* Like */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleLike} id="wr_like">
                {liked ? <BiSolidLike size="20px" color="#111B47" /> : <BiLike size="20px" color="#DADEE5" />}
              </S.SubTaskIcon>
              <S.SubTaskCount>{section.likeCnt}</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* Message */}
            <S.SubTaskStyle>
              <S.SubTaskIcon onClick={handleMessaged} id="wr_cmt">
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

        {section.comments.map(
          id =>
            isVisible && <TeamTaskMessage section={section} setRendering={setRendering} commentImage={id.username} />,
        )}
      </S.TaskBox>
    </>
  );
};

export default TeamTask;
