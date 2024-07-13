import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { GetUsersResponse, PutUsersRequest } from '@/api/@types/User';
import getUser from '@/api/imageApi/getUser';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import putUser from '@/api/imageApi/putUser';
import DeleteAccountButton from '@/components/my/DeleteAccountBox';
import EmailBox from '@/components/my/EmailBox';
import NicknameBox from '@/components/my/NicknameBox';
import PasswordBox from '@/components/my/PasswordBox';
import ImageUploader from '@/components/my/component/ImageUploader';
import { useCustomToast } from '@/hooks/useCustomToast';
import { userNicknameState } from '@/recoil/user/userAtom';
import * as S from '@/styles/my/myPage.style';

const MyPage = () => {
  const [userData, setUserData] = useState<GetUsersResponse | null>(null);
  const [userNickname, _] = useRecoilState(userNicknameState);
  const [image, setImage] = useState<Blob | null>(null);
  const [userProfile, setUserProfile] = useState<{ [key: string]: string }>({});
  const [imageURL, setImageURL] = useState<string>('');
  const toast = useCustomToast();
  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/');
  };

  const handleSave = async () => {
    try {
      if (imageURL && userData?.data.thumbnail !== imageURL) {
        const response = await postImageToS3({
          filename: imageURL,
          method: 'PUT',
        });

        await axios.put(response.data.preSignedUrl, image, {
          headers: {
            'Content-Type': image?.type,
          },
        });
        const requestData: PutUsersRequest = {
          thumbnail: response.data.filename,
          username: userNickname,
        };
        // 이미지 업로드가 완료된 후, 새로운 이미지 URL을 받아와서 미리보기 업데이트
        if (userData) {
          setUserProfile(prevImage => ({
            ...prevImage,
            [userData.data.userId.toString()]: response.data.preSignedUrl, // 새로운 이미지 URL 사용
          }));
          setImageURL(response.data.preSignedUrl); // 새로운 이미지 URL로 업데이트
        }

        await putUser(requestData);
        navigate('/');
      }
      toast.info('사진이 변경 되었습니다.');
    } catch (error) {
      console.error('실패', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        setUserData(response);
      } catch (error) {
        console.error('에러', error);
      }
    };
    fetchUserData();
  }, [image, imageURL]);

  useEffect(() => {
    const fetchThumbnailsData = async () => {
      try {
        if (userData?.data.thumbnail) {
          const imageResponse = await postImageToS3({
            filename: userData.data.thumbnail,
            method: 'GET',
          });
          console.log('s3 사진 받아오기 성공', imageResponse.data.preSignedUrl);
          setUserProfile(prevImage => ({
            ...prevImage,
            [userData.data.userId]: imageResponse.data.preSignedUrl,
          }));
        }
      } catch (error) {
        console.error(error);
      }
    };

    if (userData) {
      fetchThumbnailsData();
    }
  }, [userData?.data.thumbnail]);

  return (
    <>
      <S.ProfileContainer>
        <div style={{ margin: '0 auto' }}>Profile</div>
      </S.ProfileContainer>

      <S.MyPageBGContainer>
        <S.MyPageContainer>
          <ImageUploader
            initialImage={userData ? userProfile[userData.data.userId] : null}
            onChange={(files, imageUUID) => {
              imageUUID && setImageURL(imageUUID);
              setImage(files);
            }}
          />

          <NicknameBox />
          <EmailBox />
          <PasswordBox />
          <DeleteAccountButton />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton id="mypage_cancel" color="#C3CAD9" onClick={navigateToMain}>
              CANCEL
            </S.OrdinaryButton>
            <S.OrdinaryButton id="mypage_save" color="#C3CAD9" onClick={handleSave}>
              SAVE
            </S.OrdinaryButton>
          </div>
        </S.MyPageContainer>
      </S.MyPageBGContainer>
    </>
  );
};

export default MyPage;
