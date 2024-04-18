import * as S from '@/styles/writeRetroStyles/Members.styles';

interface UserListProps {
  users: { name: string; image: string }[];
  onSelectUserImg: (image: string) => void;
  onSelectUserName: (name: string) => void;
}

export const Members: React.FC<UserListProps> = ({ users, onSelectUserImg, onSelectUserName }) => {
  const handleUserClick = (name: string, image: string) => {
    onSelectUserName(name);
    onSelectUserImg(image);
  };

  return (
    <>
      <S.ListConatiner>
        <S.TitleContainer>
          <S.Title>해당 업무의 담당자를 지정해주세요</S.Title>
        </S.TitleContainer>
        <ul>
          {users.map((user, index) => (
            <S.ListItem key={index} onClick={() => handleUserClick(user.name, user.image)}>
              <S.ProfileImage src={user.image} /> <S.UserName>{user.name}</S.UserName>
            </S.ListItem>
          ))}
        </ul>
      </S.ListConatiner>
    </>
  );
};
export default Members;
