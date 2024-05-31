import { useEffect, useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import { putKudosTarget } from '@/api/teamControllerApi/putKudosTarget';
import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/writeRetroStyles/Members.styles';

interface UserListProps {
  users: { name: string; image: string; userId: number }[];
  sId: number;
  onSelectUserImg: (image: string) => void;
  onSelectUserName: (name: string) => void;
  imageURL: { url: string }[];
  fetchSection: () => void;
}

export const Members: React.FC<UserListProps> = ({
  users,
  sId,
  onSelectUserImg,
  onSelectUserName,
  imageURL,
  fetchSection,
}) => {
  const toast = useCustomToast();
  const sectionId: number = sId;
  const [rendering, setRendering] = useState<boolean>(false);

  const putTargetMember = async (selectedUserId: number) => {
    try {
      await putKudosTarget({ sectionId: sectionId, userId: selectedUserId });
      setRendering(prev => !prev);
    } catch (e) {
      toast.error('kudos 실패');
    }
  };

  const [images, setImages] = useState<string[]>([]);

  const fetchRetrospectiveImage = async () => {
    try {
      const newImages = [];
      for (const urlData of imageURL) {
        const url = urlData.url;
        if (!url || url.trim() === '') {
          newImages.push('');
          continue;
        }
        const data = await postImageToS3({ filename: url.trim(), method: 'GET' });
        newImages.push(data.data.preSignedUrl);
      }
      setImages(newImages);
    } catch (e) {
      console.error(e);
    }
  };

  const handleUserClick = async (name: string, userId: number, userIndex: number) => {
    onSelectUserName(name);
    const selectedUserImage = usersWithImages[userIndex].imageURL;
    const userImage = selectedUserImage !== '' ? selectedUserImage : '';
    onSelectUserImg(userImage);
    await putTargetMember(userId);
    fetchSection();
  };

  useEffect(() => {
    fetchRetrospectiveImage();
  }, [imageURL, rendering]);

  const usersWithImages = users.map((user, index) => ({
    ...user,
    imageURL: user.image ? images[index] : '',
  }));

  return (
    <>
      <S.ListContainer>
        <S.TitleContainer>
          <S.Title>해당 업무의 담당자를 지정해주세요</S.Title>
        </S.TitleContainer>
        <ul>
          {usersWithImages.map((user, index) => (
            <S.ListItem key={index} onClick={() => handleUserClick(user.name, user.userId, index)}>
              <S.ProfileImage>
                {user.imageURL !== '' ? (
                  <img src={user.imageURL} style={{ width: '25px', height: '25px' }} />
                ) : (
                  <CgProfile size="25px" color="#ADB8CC" />
                )}
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
