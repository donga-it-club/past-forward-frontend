import { useEffect, useState } from 'react';
import { PersonCircle } from 'react-bootstrap-icons';
import { Spinner } from '@chakra-ui/react';
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
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // const [isImageLoaded, setIsImageLoaded] = useState(false);

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
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProfileImage();
    fetchUserData();
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [userData?.data.thumbnail, isLoading]);

  return (
    <>
      {userData?.data.thumbnail ? (
        isLoading ? (
          <Spinner />
        ) : (
          <S.UploadImage src={imageURL} width={width} height="auto" />
        )
      ) : (
        <PersonCircle style={{ width: '30px', height: 'auto' }} />
      )}
    </>
  );
};

export default UserProfileImage;
