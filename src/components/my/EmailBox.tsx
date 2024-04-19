import { useState } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import UserEmail from '@/components/user/UserEmail';
import * as S from '@/styles/my/myPage.style';

const EmailBox = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  return (
    <>
      <S.MainName>이메일</S.MainName>
      <S.DivingLine />
      <S.LoginContainer>
        <S.LoginBox background_color="white">
          <IoMailOutline />
          <div style={{ margin: 'auto 10px' }}>
            <UserEmail setUserEmail={setUserEmail} />
            {userEmail}
          </div>
        </S.LoginBox>
      </S.LoginContainer>
    </>
  );
};

export default EmailBox;
