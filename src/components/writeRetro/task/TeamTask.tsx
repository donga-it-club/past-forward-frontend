import { FC, useState } from 'react';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { FaRegTrashAlt } from 'react-icons/fa';
import { MdAccessAlarm, MdMessage } from 'react-icons/md';
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
import { formattedDate } from './PersonalTask';
import TeamTaskMessage from './taskMessage/TeamTaskMessage';
import { sectionData } from '@/api/@types/Section';
import { SectionServices } from '@/api/services/Section';
import UserProfile1 from '@/assets/UserProfile1.png';
import UserProfile2 from '@/assets/UserProfile2.png';
import Members from '@/components/writeRetro/ActionItems/Members';
import ReviseModal from '@/components/writeRetro/task/ReviseModal';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData;
}

const TeamTask: FC<Props> = ({ section }) => {
  const toast = useCustomToast();
  const [liked, setLiked] = useState<number>(0);
  const [messaged, setMessaged] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleLike = async () => {
    try {
      const data = await SectionServices.likePost({ sectionId: section.sectionId });
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
      await SectionServices.delete({ sectionId: section.sectionId });
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
              <S.TaskUserName>{section.username}</S.TaskUserName>
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
              <S.TaskText>
                {section.content}
                {/* <S.ReviseText>(수정됨)</S.ReviseText> */}
              </S.TaskText>
            </PopoverTrigger>
            <PopoverContent>
              {/* TaskTextModal */}

              <ReviseModal section={section} />
            </PopoverContent>
          </Popover>
          {section.sectionName === 'Action Items' && (
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
              <S.ManagerText>{section.username}</S.ManagerText>
            </S.ManagerStyle>
          )}

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
              <S.SubTaskCount>4</S.SubTaskCount>
            </S.SubTaskStyle>
            {/* DaysLeft */}
            <S.SubTaskStyle>
              <S.SubTaskIcon>
                <MdAccessAlarm size="20px" color="#DADEE5" />
              </S.SubTaskIcon>
              <S.SubTaskCount>{formattedDate(section.createdDate)}</S.SubTaskCount>
            </S.SubTaskStyle>
          </S.SubTaskBox>
        </S.TaskMainStyle>

        {isVisible && <TeamTaskMessage section={section} />}
      </S.TaskBox>
    </>
  );
};

export default TeamTask;
