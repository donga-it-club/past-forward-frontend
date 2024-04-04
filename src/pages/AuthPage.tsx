import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import { I18n } from 'aws-amplify/utils';
import awsConfig from '@/awsConfig';
import '@aws-amplify/ui-react/styles.css';
import DefaultHeader from '@/components/user/DefaultHeader';
import amplifyCustomFields from '@/styles/user/AmplifyCustomFields';
import '@/styles/user/AuthPage.css';

Amplify.configure(awsConfig);
I18n.setLanguage('ko');

const dict = {
  ko: {
    'Sign In': '로그인',
    'Sign Up': '회원가입',
    'Sign in': '로그인',
    'Create Account': '회원가입',
    'Forgot your password?': '비밀번호를 잊으셨습니까?',
    'We Emailed You': '이메일 확인',
    Confirm: '확인',
    'Resend Code': '다시 코드 받기',
    'Signing in': '로그인 중',
    'Reset Password': '비밀번호 재설정',
    'Send code': '코드 전송',
    'Back to Sign In': '로그인하러 가기',
  },
};

I18n.putVocabularies(dict);

const AuthPage: React.FC = () => {
  const amplifyUiCustomComponents = {
    Header() {
      return <DefaultHeader />;
    },
  };
  return (
    <Authenticator components={amplifyUiCustomComponents} formFields={amplifyCustomFields}>
      <AuthPageContent />
    </Authenticator>
  );
};

const AuthPageContent: React.FC = () => {
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const navigate = useNavigate();

  useEffect(() => {
    if (authStatus === 'authenticated') {
      navigate('/');
    }
  }, [authStatus, navigate]);

  if (authStatus === 'configuring') {
    return <div>Loading...</div>;
  }

  return <></>;
  // <Authenticator></Authenticator>;
};

export default AuthPage;
