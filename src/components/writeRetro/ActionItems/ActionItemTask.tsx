import React, { FC, useState, useEffect } from 'react';
// import { sectionData } from '@/api/@types/Section';
import { TeamMembersData } from '@/api/@types/TeamController';
import { TeamControllerServices } from '@/api/services/TeamController';
import Members from '@/components/writeRetro/ActionItems/Members';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Layout.style';

const ActionItemTask: FC = () => {
  // action items 담당자 지정
  const [hoveredUser, setHoveredUser] = useState<string | null>(null);
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);
  const [selectedUserImg, setSelectedUserImg] = useState<string | null>(null);

  const [teamId, setTeamId] = useState<number>(65); // teamId 값 받아오기
  const [retrospectiveId, setRetrospectiveId] = useState<number>(100); // retrospectiveId값 받아오기
  const [member, setMember] = useState<TeamMembersData[]>();
  const [users, setUsers] = useState<{ name: string; image: string }[]>([]);
  const toast = useCustomToast();

  const fetchTeamMember = async () => {
    try {
      if (teamId) {
        setTeamId(65);
        setRetrospectiveId(100);
        const data = await TeamControllerServices.TeamMemberGet({ teamId: teamId, retrospectiveId: retrospectiveId });
        setMember(data.data);
        const userData = data.data.map(member => ({
          name: member.username,
          image: member.profileImage,
        }));
        setUsers(userData);
      }
      return;
    } catch (e) {
      toast.error('멤버 조회에 실패');
    }
  };

  useEffect(() => {
    fetchTeamMember();
  }, [member]);

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
    <S.ManagerStyle>
      <div>
        <S.ManagerButton
          onClick={togglePopup}
          onMouseEnter={() => handleMouseEnter(selectedUserName || '')}
          onMouseLeave={handleMouseLeave}
        >
          {selectedUserImg ? <img src={selectedUserImg} /> : 'M'}
          {hoveredUser && <S.HoverUser>{hoveredUser}</S.HoverUser>}
        </S.ManagerButton>
        {showPopup && (
          <Members users={users} onSelectUserImg={handleSelectUserImg} onSelectUserName={handleSelectUserName} />
        )}
      </div>
      {/* {section.map(section => (
        <S.ManagerText>{section.username}</S.ManagerText>
      ))} */}
    </S.ManagerStyle>
  );
};

export default ActionItemTask;
