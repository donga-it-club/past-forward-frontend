import React, { FC, useState } from 'react';
import { sectionData } from '@/api/@types/Section';
import UserProfile1 from '@/assets/UserProfile1.png';
import UserProfile2 from '@/assets/UserProfile2.png';
import Members from '@/components/writeRetro/ActionItems/Members';
import * as S from '@/styles/writeRetroStyles/Layout.style';

interface Props {
  section: sectionData[];
}

const ActionItemTask: FC<Props> = ({ section }) => {
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
          <Members users={users} onSelectUserImg={handleSelectUserImg} onSelectUserName={handleSelectUserName} />
        )}
      </div>
      {section.map(section => (
        <S.ManagerText>{section.username}</S.ManagerText>
      ))}
    </S.ManagerStyle>
  );
};

export default ActionItemTask;
