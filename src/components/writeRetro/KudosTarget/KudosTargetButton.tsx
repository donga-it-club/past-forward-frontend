import { FC, useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';
import { sectionData, KudosTargetData } from '@/api/@types/Section';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { TeamControllerServices } from '@/api/services/TeamController';
import Members from '@/components/writeRetro/KudosTarget/Members';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface KudosTargetTaskProps {
  section: sectionData;
  tId: number;
  rId: number;
  sId: number;
  fetchSection: () => void;
}

const KudosTargetButton: FC<KudosTargetTaskProps> = ({ tId, rId, sId, section, fetchSection }) => {
  const KudosTarget: KudosTargetData | undefined = section.kudosTarget;
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string>(KudosTarget?.username || '');
  const [selectedUserImg, setSelectedUserImg] = useState<string | null>(null);

  const [users, setUsers] = useState<{ name: string; image: string; userId: number }[]>([]);
  const [imageURL, setImageURL] = useState<{ url: string }[]>([]);

  const teamId: number = tId;
  const retrospectiveId: number = rId;
  const sectionId: number = sId;
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
  }, [section.kudosTarget]);

  const fetchRetrospectiveImage = async () => {
    if (section.kudosTarget && section.kudosTarget.thumbnail) {
      try {
        const data = await postImageToS3({ filename: section.kudosTarget.thumbnail, method: 'GET' });
        setSelectedUserImg(data.data.preSignedUrl);
      } catch (e) {
        toast.error('담당자 이미지 가져오기 실패');
      }
    } else {
      setSelectedUserImg(null);
    }
  };

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

  const renderImage = () => {
    if (!KudosTarget) {
      return 'M';
    }

    if (KudosTarget && selectedUserImg) {
      return <img src={selectedUserImg} style={{ width: '30px' }} />;
    }

    if ((KudosTarget && selectedUserImg === null) || selectedUserImg === '') {
      return <CgProfile size="24px" color="#ADB8CC" />;
    }
  };

  useEffect(() => {
    fetchRetrospectiveImage();
  }, []);

  return (
    <S.ActionItemsUserContainer>
      <Popover isOpen={showPopup} onClose={() => setShowPopup(false)}>
        {section.kudosTarget ? (
          <S.ManagerText> {selectedUserName}</S.ManagerText>
        ) : (
          <S.ManagerText>닉네임</S.ManagerText>
        )}
        <PopoverTrigger>
          <S.ManagerButton onClick={togglePopup}>{renderImage()}</S.ManagerButton>
        </PopoverTrigger>
        <PopoverContent border={'none'}>
          <Members
            users={users}
            onSelectUserImg={handleSelectUserImg}
            onSelectUserName={handleSelectUserName}
            sId={sectionId}
            imageURL={imageURL}
            fetchSection={fetchSection}
          />
        </PopoverContent>
      </Popover>
    </S.ActionItemsUserContainer>
  );
};

export default KudosTargetButton;
