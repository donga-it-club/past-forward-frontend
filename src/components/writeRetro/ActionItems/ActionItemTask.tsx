import { FC, useState, useEffect } from 'react';
import { CgProfile } from 'react-icons/cg';
import { Popover, PopoverTrigger, PopoverContent } from '@chakra-ui/react';
import { TeamControllerServices } from '@/api/services/TeamController';
import Members from '@/components/writeRetro/ActionItems/Members';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface ActionItemTaskProps {
  tId: number;
  rId: number;
  sId: number;
}

const ActionItemTask: FC<ActionItemTaskProps> = ({ tId, rId, sId }) => {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
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
  }, []);
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

  return (
    <>
      <Popover isOpen={showPopup} onClose={() => setShowPopup(false)}>
        <PopoverTrigger>
          <S.ManagerButton onClick={togglePopup}>
            {selectedUserImg ? (
              <img src={selectedUserImg} style={{ width: '30px' }} />
            ) : selectedUserImg === '' ? (
              <CgProfile size="24px" color="#969696" />
            ) : (
              'M'
            )}
          </S.ManagerButton>
        </PopoverTrigger>
        {selectedUserName ? <S.ManagerText> {selectedUserName}</S.ManagerText> : <S.ManagerText>담당자</S.ManagerText>}
        <PopoverContent>
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
