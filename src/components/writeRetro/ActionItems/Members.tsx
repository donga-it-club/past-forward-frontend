import { useState } from 'react';
import { PutActionItemsRequest } from '@/api/@types/TeamController';
import { putActionItemsMember } from '@/api/teamControllerApi/putActionItemsMember';
import UserProfile from '@/assets/UserProfile1.png';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Members.styles';

interface UserListProps {
  users: { name: string; image: string }[];
  onSelectUserImg: (image: string) => void;
  onSelectUserName: (name: string) => void;
  // team: number;
  //   retrospective: number;
  //   section: number;
}

export const Members: React.FC<UserListProps> = ({ users, onSelectUserImg, onSelectUserName }) => {
  const [teamId, setTeamId] = useState<number>(133); // teamId 값 받아오기
  const [retrospectiveId, setRetrospectiveId] = useState<number>(187); // retrospectiveId값 받아오기
  const [sectionId, setSectionId] = useState<number>(77); // sectionId 값 받아오기
  const toast = useCustomToast();

  const putActionItemMember = async () => {
    try {
      setTeamId(65);
      setRetrospectiveId(100);
      setSectionId(77);
      const requestData: PutActionItemsRequest = {
        teamId: teamId,
        retrospectiveId: retrospectiveId,
        sectionId: sectionId,
      };
      const response = await putActionItemsMember(requestData);
      console.log('담당자 지정 성공', response);
    } catch (e) {
      console.log('담당자 지정 실패');
      toast.error('담당자 지정 실패');
    }
  };

  const handleUserClick = async (name: string, image: string) => {
    onSelectUserName(name);
    onSelectUserImg(image);
    await putActionItemMember();
  };

  return (
    <>
      <S.ListConatiner>
        <S.TitleContainer>
          <S.Title>해당 업무의 담당자를 지정해주세요</S.Title>
        </S.TitleContainer>
        <ul>
          {users.map((user, index) => (
            <S.ListItem key={index} onClick={() => handleUserClick(user.name, user.image || UserProfile)}>
              <S.ProfileImage src={user.image || UserProfile} /> <S.UserName>{user.name}</S.UserName>
            </S.ListItem>
          ))}
        </ul>
      </S.ListConatiner>
    </>
  );
};
export default Members;
