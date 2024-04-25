import { PutActionItemsRequest } from '@/api/@types/TeamController';
import { putActionItemsMember } from '@/api/teamControllerApi/putActionItemsMember';
import UserProfileImage from '@/components/user/UserProfileImage';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Members.styles';

interface UserListProps {
  users: { name: string; image: string }[];
  onSelectUserImg: (image: string) => void;
  onSelectUserName: (name: string) => void;
  tId: number;
  rId: number;
  sId: number;
}

export const Members: React.FC<UserListProps> = ({ users, onSelectUserImg, onSelectUserName, tId, rId, sId }) => {
  const teamId: number = tId;
  const retrospectiveId: number = rId;
  const sectionId: number = sId;

  const toast = useCustomToast();

  const putActionItemMember = async () => {
    try {
      const requestData: PutActionItemsRequest = {
        teamId: teamId,
        retrospectiveId: retrospectiveId,
        sectionId: sectionId,
      };
      await putActionItemsMember(requestData);
    } catch (e) {
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
      <S.ListContainer>
        <S.TitleContainer>
          <S.Title>해당 업무의 담당자를 지정해주세요</S.Title>
        </S.TitleContainer>
        <ul>
          {users.map((user, index) => (
            <S.ListItem key={index} onClick={() => handleUserClick(user.name, user.image)}>
              <S.ProfileImage>
                <UserProfileImage width="25px" />
              </S.ProfileImage>
              <div style={{ alignItems: 'center' }}>
                <S.UserName>{user.name}</S.UserName>
              </div>
            </S.ListItem>
          ))}
        </ul>
      </S.ListContainer>
    </>
  );
};
export default Members;
