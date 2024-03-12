import * as S from '@/styles/my/myPage.style';
import { Asterisk, InfoCircle, PersonCircle } from 'react-bootstrap-icons';

const MyPage = () => {
  return (
    <>
      <S.ProfileContainer>
        <div style={{ margin: '0 auto' }}>Profile</div>
      </S.ProfileContainer>
      <S.MyPageBGContainer>
        <S.MyPageContainer>
          <S.MainName>프로필 사진 </S.MainName>
          <S.DivingLine />
          <S.ProfileBox>
            <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
          </S.ProfileBox>
          <S.ImageButtonBox>
            <S.OrdinaryButton color="#111B47">이미지 편집</S.OrdinaryButton>
            <S.OrdinaryButton color="#111B47">이미지 제거</S.OrdinaryButton>
          </S.ImageButtonBox>
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
              <Asterisk style={{ width: '5px', color: 'red', margin: '0 2px' }} />
              현재 비밀번호
            </S.PWFont>
            <S.PWInput />
            <S.PWFont>
              <Asterisk style={{ width: '5px', color: 'red', margin: '0 2px' }} />새 비밀번호
            </S.PWFont>
            <S.PWInput />
            <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
              <S.OrdinaryButton color="#111B47">비밀번호 변경</S.OrdinaryButton>
            </div>
          </S.PWBox>
          <S.MainName>계정 삭제 </S.MainName>
          <S.DivingLine />
          <S.SubName fontSize="13px">
            <InfoCircle style={{ width: '15px', color: 'orange', margin: 'auto 2px' }} />
            삭제 후 복구 할 수 없습니다.
          </S.SubName>
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton color="orange">계정 삭제</S.OrdinaryButton>
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
