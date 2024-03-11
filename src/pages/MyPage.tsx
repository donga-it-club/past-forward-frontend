import * as S from '@/styles/my/myPage.style';
import * as Layout from '@/styles/layout/layout.style';
import { PersonCircle } from 'react-bootstrap-icons';

const MyPage = () => {
  return (
    <S.MyPageBGContainer>
      <S.MyPageContainer>
        <S.MainName>프로필 사진 </S.MainName>
        <S.DivingLine />
        <S.ProfileBox>
          <PersonCircle style={{ width: '100', height: '100', color: '#C3CAD9' }} />
        </S.ProfileBox>
        <S.ImageButtonBox>
          <S.OrdinaryButton>이미지 편집</S.OrdinaryButton>
          <S.OrdinaryButton>이미지 제거</S.OrdinaryButton>
        </S.ImageButtonBox>
        <S.MainName>닉네임 </S.MainName>
        <S.DivingLine />
        <S.NicknameInput />
        <S.MainName>이메일 </S.MainName>
        <S.DivingLine />
        <S.SubName fontSize="15px">Clayton@gmail.com</S.SubName>
        <S.MainName>비밀번호 </S.MainName>
        <S.DivingLine />
        <S.SubName fontSize="10px">
          비밀번호를 변경하면 이 장치에서는 로그인 상태로 유지되지만 다른 장치에서는 로그아웃될 수 있습니다.
        </S.SubName>
        <S.PWBox>
          <S.PWFont>현재 비밀번호</S.PWFont>
          <S.PWInput />
          <S.PWFont>새 비밀번호</S.PWFont>
          <S.PWInput />
          <div style={{ display: 'flex', flexDirection: 'row-reverse', margin: '10px' }}>
            <S.OrdinaryButton>비밀번호 변경</S.OrdinaryButton>
          </div>
        </S.PWBox>
      </S.MyPageContainer>
    </S.MyPageBGContainer>
  );
};

export default MyPage;
