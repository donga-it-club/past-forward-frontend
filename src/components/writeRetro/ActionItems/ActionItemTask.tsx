import { FC, useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';
import { sectionData, ActionItemData } from '@/api/@types/Section';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { TeamControllerServices } from '@/api/services/TeamController';
import Members from '@/components/writeRetro/ActionItems/Members';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface ActionItemTaskProps {
  section: sectionData;
  tId: number;
  rId: number;
  sId: number;
}

const ActionItemTask: FC<ActionItemTaskProps> = ({ tId, rId, sId, section }) => {
  const ActionItems: ActionItemData | undefined = section.actionItems;
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string>(ActionItems?.username || '');
  const [selectedUserImg, setSelectedUserImg] = useState<string | null>(null);

  const teamId: number = tId;
  const retrospectiveId: number = rId;
  const sectionId: number = sId;

  const [users, setUsers] = useState<{ name: string; image: string; userId: number }[]>([]);
  const [imageURL, setImageURL] = useState<{ url: string }[]>([]);
  const toast = useCustomToast();

  const fetchTeamMember = async () => {
    try {
      if (teamId) {
        const data = await TeamControllerServices.TeamMemberGet({
          teamId: teamId,
          retrospectiveId: retrospectiveId,
        });
        const userData = data.data.map(member => ({
          name: member.username,
          image: member.profileImage,
          userId: member.userId,
        }));
        setUsers(userData);
        const image = data.data.map(member => ({
          url: member.profileImage,
        }));
        setImageURL(image);
      }
      return;
    } catch (e) {
      toast.error('멤버 조회 실패');
    }
  };
  useEffect(() => {
    fetchTeamMember();
  }, [section.actionItems]);

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

  const fetchRetrospectiveImage = async () => {
    if (section.actionItems && section.actionItems.thumbnail) {
      try {
        const data = await postImageToS3({ filename: section.actionItems.thumbnail, method: 'GET' });
        setSelectedUserImg(data.data.preSignedUrl);
      } catch (e) {
        toast.error('담당자 이미지 가져오기 실패');
      }
    } else {
      setSelectedUserImg(null);
    }
  };

  useEffect(() => {
    fetchRetrospectiveImage();
  }, [ActionItems?.thumbnail]);

  const renderImage = () => {
    if (!ActionItems) {
      return 'M';
    }

    if (ActionItems && selectedUserImg) {
      return <img src={selectedUserImg} style={{ width: '30px' }} />;
    }

    if ((ActionItems && selectedUserImg === null) || selectedUserImg === '') {
      return <CgProfile size="24px" color="#969696" />;
    }
  };

  return (
    <>
      <Popover isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <PopoverTrigger>
          <S.ManagerButton onClick={togglePopup}>{renderImage()}</S.ManagerButton>
        </PopoverTrigger>
        {section.actionItems ? (
          <S.ManagerText> {selectedUserName}</S.ManagerText>
        ) : (
          <S.ManagerText>담당자</S.ManagerText>
        )}
        <PopoverContent border={'none'}>
          <Members
            users={users}
            onSelectUserImg={handleSelectUserImg}
            onSelectUserName={handleSelectUserName}
            tId={teamId}
            rId={retrospectiveId}
            sId={sectionId}
            imageURL={imageURL}
          />
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ActionItemTask;
