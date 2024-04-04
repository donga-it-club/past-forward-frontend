import React from 'react';
import { useAuthenticator } from '@aws-amplify/ui-react';
import * as S from '@/styles/layout/layout.style';

interface Props {
  handleLogin: () => void;
}

const AuthenticationButton: React.FC<Props> = ({ handleLogin }) => {
  const { signOut } = useAuthenticator();
  const { authStatus } = useAuthenticator(context => [context.authStatus]);

  return (
    <>
      {authStatus !== 'authenticated' ? (
        <S.Link onClick={handleLogin}>로그인</S.Link>
      ) : (
        <S.Link onClick={signOut}>로그아웃</S.Link>
      )}
    </>
  );
};

export default AuthenticationButton;
