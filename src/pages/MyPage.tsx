import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { GetUsersResponse } from '@/api/@types/User';
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
  const [preview, setPreview] = useState<string | null>(null);
  const [image, setImage] = useState<Blob | null>(null);
  const [imageURL, setImageURL] = useState<string>('');
  const [imageUUID, setImageUUID] = useState<string | null>(null);
  const toast = useCustomToast();
  const navigate = useNavigate();

  const handleSave = async () => {
    try {
      await putUser({ thumbnail: imageUUID, username: userNickname });
      navigate('/');
      toast.info('사진이 변경 되었습니다.');
      if (userData?.data.thumbnail !== imageURL) {
        const response = await postImageToS3({
          filename: imageURL,
          method: 'PUT',
        });

        await axios.put(response.data.preSignedUrl, image, {
          headers: {
            'Content-Type': image?.type,
          },
        });
      }
    } catch (error) {
      console.error('실패', error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await getUser();
      setUserData(response);
    } catch (error) {
      console.error('에러', error);
    }
  };

  const fetchThumbnailsData = async () => {
    try {
      if (userData) {
        const imageResponse = await postImageToS3({
          filename: userData.data.thumbnail,
          method: 'GET',
        });
        setImageURL(imageResponse.data.preSignedUrl);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [imageURL]);

  useEffect(() => {
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
            image={imageURL}
            onChange={(files, imageUUID) => {
              imageUUID && setImageURL(imageUUID);
              setImage(files);
            }}
            setImageUUID={setImageUUID}
            preview={preview}
            setPreview={setPreview}
          />

          <NicknameBox />
          <EmailBox />
          <PasswordBox />
          <DeleteAccountButton />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton
              id="mypage_cancel"
              color="#C3CAD9"
              onClick={() => {
                navigate('/');
              }}
            >
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
