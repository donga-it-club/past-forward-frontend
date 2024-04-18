import { FC, useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdAccessAlarm, MdMessage } from 'react-icons/md';
import { Flex, Popover, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import dayjs from 'dayjs';
import TeamTaskMessage from './taskMessage/TeamTaskMessage';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import UserProfile1 from '@/assets/UserProfile1.png';
import UserProfile2 from '@/assets/UserProfile2.png';
import Members from '@/components/writeRetro/ActionItems/Members';
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

  // action items 담당자 지정
  const [hoveredUser, setHoveredUser] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
  const [selectedUserImg, setSelectedUserImg] = useState<string | null>(null);

  const users = [
    { name: 'User 1', image: UserProfile1 },
    { name: 'User 2', image: UserProfile2 },
  ];

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleSelectUserImg = (image: string) => {
    setSelectedUserImg(image);
    setShowPopup(false);
  };

  const handleSelectUserName = (name: string) => {
    setSelectedUserName(name);
  };

  const handleMouseEnter = (name: string) => {
    setHoveredUser(name);
  };

  const handleMouseLeave = () => {
    setHoveredUser(null);
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
                <S.ManagerButton
                  onClick={togglePopup}
                  onMouseEnter={() => handleMouseEnter(selectedUserName || '')}
                  onMouseLeave={handleMouseLeave}
                >
                  {selectedUserImg ? <img src={selectedUserImg} /> : 'M'}
                  {hoveredUser && <S.HoverUser>{hoveredUser}</S.HoverUser>} {/* 이름 : {name.username} */}
                </S.ManagerButton>
                {showPopup && (
                  <Members
                    users={users}
                    onSelectUserImg={handleSelectUserImg}
                    onSelectUserName={handleSelectUserName}
                  />
                )}
              </div>
              <S.ManagerText>담당자</S.ManagerText>
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
