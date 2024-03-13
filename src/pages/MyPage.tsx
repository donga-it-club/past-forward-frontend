import ImageUploader from '@/components/my/ImageUploader';
import ChangePWButton from '@/components/my/ChangePWButton';
import Modal from '@/components/my/ChangePWButton';
import * as S from '@/styles/my/myPage.style';
import { useState } from 'react';
import { Asterisk, Icon, InfoCircle, PersonCircle } from 'react-bootstrap-icons';
import DeleteAccountButton from '@/components/my/DeleteAccountButton';
import PasswordInput from '@/components/my/PasswordInput';

const MyPage = () => {
  const [image, setImage] = useState<string>('');
  return (
    <>
      <S.ProfileContainer>
        <div style={{ margin: '0 auto' }}>Profile</div>
      </S.ProfileContainer>
      <S.MyPageBGContainer>
        <S.MyPageContainer>
          <S.MainName>프로필 사진 </S.MainName>
          <S.DivingLine />
          <ImageUploader image={image} setImage={setImage} />
          <S.MainName>닉네임 </S.MainName>
          <S.DivingLine />
          <S.NicknameInput />
          <S.MainName>이메일 </S.MainName>
          <S.DivingLine />
          <S.SubName fontSize="15px">Clayton@gmail.com</S.SubName>
          <S.MainName>비밀번호 </S.MainName>
          <S.DivingLine />
          <S.SubName fontSize="13px">
            비밀번호를 변경하면 이 장치에서는 로그인 상태로 유지되지만 다른 장치에서는 로그아웃될 수 있습니다.
          </S.SubName>
          <S.PWBox>
            <S.PWFont>
              <div style={{ display: 'flex' }}>
                <Asterisk style={{ width: '5px', color: 'red', margin: '0 2px' }} />
                현재 비밀번호
              </div>
            </S.PWFont>
            <PasswordInput />
            <S.PWFont>
              <div style={{ display: 'flex' }}>
                <Asterisk style={{ width: '5px', color: 'red', margin: '0 2px' }} />새 비밀번호
              </div>
            </S.PWFont>
            <PasswordInput />
            <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
              <ChangePWButton />
            </div>
          </S.PWBox>
          <S.MainName>계정 삭제 </S.MainName>
          <S.DivingLine />
          <S.SubName fontSize="13px">
            <div style={{ display: 'flex' }}>
              <InfoCircle style={{ width: '15px', color: 'orange', margin: 'auto 2px' }} />
              삭제 후 복구 할 수 없습니다.
            </div>
          </S.SubName>
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <DeleteAccountButton />
          </div>
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton color="#C3CAD9">CANCEL</S.OrdinaryButton>
            <S.OrdinaryButton color="#C3CAD9">SAVE</S.OrdinaryButton>
          </div>
        </S.MyPageContainer>
      </S.MyPageBGContainer>
    </>
  );
};

export default MyPage;
