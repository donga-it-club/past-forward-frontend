import { useEffect, useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { GetUsersResponse } from '@/api/@types/User';
import getUser from '@/api/imageApi/getUser';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import * as S from '@/styles/my/myPage.style';

interface Props {
  width: string;
}

const UserProfileImage = ({ width }: Props) => {
  const [userData, setUserData] = useState<GetUsersResponse | null>(null);
  const [imageURL, setImageURL] = useState<string>('');

  const fetchUserData = async () => {
    try {
      const response = await getUser();
      console.log('유저 정보', response);
      setUserData(response);
    } catch (error) {
      console.error('에러', error);
    }
  };

  const fetchProfileImage = async () => {
    if (userData) {
      try {
        const data = await postImageToS3({
          filename: userData.data.thumbnail,
          method: 'GET',
        });
        setImageURL(data.data.preSignedUrl);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    fetchProfileImage();
    fetchUserData();
  }, [userData?.data.thumbnail]);

  return (
    <>
      {userData?.data.thumbnail ? (
        <S.UploadImage src={imageURL} width={width} height="auto" />
      ) : (
        <PersonCircle style={{ width: '30px', height: 'auto' }} />
      )}
    </>
  );
};

export default UserProfileImage;
