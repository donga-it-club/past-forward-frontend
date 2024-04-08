import { useState, useEffect } from 'react';
import { IoMailOutline } from 'react-icons/io5';
import { fetchUserAttributes } from 'aws-amplify/auth';
import * as S from '@/styles/my/myPage.style';

const EmailBox = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);

  async function handleFetchUserAttributes() {
    try {
      const userAttributes = await fetchUserAttributes();
      console.log(userAttributes);
      setUserEmail(userAttributes.email || null);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchUserAttributes();
  }, []);

  return (
    <>
      <S.MainName>이메일</S.MainName>
      <S.DivingLine />
      <S.LoginContainer>
        <S.LoginBox background_color="white">
          <IoMailOutline />
          <div style={{ margin: 'auto 10px' }}>{userEmail}</div>
        </S.LoginBox>
      </S.LoginContainer>
    </>
  );
};

export default EmailBox;
