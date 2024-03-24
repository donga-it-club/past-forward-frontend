import { useEffect, useState } from 'react';
import { useCustomToast } from '../../hooks/useCustomToast';
import { CommentResponse } from '@/api/@types/Comment';
import { CommentService } from '@/api/services/Comment';
import DeleteAccountButton from '@/components/my/DeleteAccountBox';
import EmailBox from '@/components/my/EmailBox';
import NicknameBox from '@/components/my/NicknameBox';
import PasswordBox from '@/components/my/PasswordBox';
import ImageUploader from '@/components/my/component/ImageUploader';
import * as S from '@/styles/my/myPage.style';

const MyPage = () => {
  const [image, setImage] = useState<string>('');
  const [comment, setComment] = useState<CommentResponse>();
  const toast = useCustomToast();

  const fetchComment = async () => {
    try {
      const data = await CommentService.getComment();
      setComment(data);
      console.log(comment);
    } catch (e) {
      toast.error(e);
      fetchComment();
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <>
      <S.ProfileContainer>
        <div style={{ margin: '0 auto' }}>Profile</div>
      </S.ProfileContainer>

      <S.MyPageBGContainer>
        <S.MyPageContainer>
          <ImageUploader image={image} setImage={setImage} />
          <NicknameBox />
          <EmailBox />
          <PasswordBox />
          <DeleteAccountButton />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton id="mypage_cancel" color="#C3CAD9">
              CANCEL
            </S.OrdinaryButton>
            <S.OrdinaryButton id="mypage_save" color="#C3CAD9">
              SAVE
            </S.OrdinaryButton>
          </div>
        </S.MyPageContainer>
      </S.MyPageBGContainer>
    </>
  );
};

export default MyPage;
