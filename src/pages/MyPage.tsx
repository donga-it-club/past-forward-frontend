import { useEffect, useState } from 'react';
import { GetUsersResponse } from '@/api/@types/User';
import getUser from '@/api/imageApi/getUser';
import postImageToS3 from '@/api/imageApi/postImageToS3';
import putUserThumbnail from '@/api/imageApi/putUserThumbnail';
import DeleteAccountButton from '@/components/my/DeleteAccountBox';
import EmailBox from '@/components/my/EmailBox';
import NicknameBox from '@/components/my/NicknameBox';
import PasswordBox from '@/components/my/PasswordBox';
import ImageUploader from '@/components/my/component/ImageUploader';
// import { useCustomToast } from '@/hooks/useCustomToast';
import * as S from '@/styles/my/myPage.style';

const MyPage = () => {
  const [image, setImage] = useState<string>('');
  const [userData, setUserData] = useState<GetUsersResponse | null>(null);

  // 사진 등록
  const handleSave = async () => {
    try {
      const s3Response = await postImageToS3({
        filename: image,
        method: 'PUT',
      });

      const profileResponse = await putUserThumbnail({
        thumbnail: image,
      });

      console.log('사진 S3 업로드 성공', s3Response);
      console.log('프로필 사진 등록 성공', profileResponse);
      alert('변경 되었습니다.');
    } catch (error) {
      console.error('실패', error);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUser();
        console.log('유저 정보', response);
        setUserData(response);
      } catch (error) {
        console.error('에러', error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <>
      <S.ProfileContainer>
        <div style={{ margin: '0 auto' }}>Profile</div>
      </S.ProfileContainer>

      <S.MyPageBGContainer>
        <S.MyPageContainer>
          {userData?.thumbnail}
          <ImageUploader image={image} setImage={setImage} />
          <NicknameBox />
          <EmailBox />
          <PasswordBox />
          <DeleteAccountButton />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton id="mypage_cancel" color="#C3CAD9">
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
