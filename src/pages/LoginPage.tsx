import React from 'react';
import { Text, Link } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailInput from '@/components/user/EmailInput';
import GoogleLoginButton from '@/components/user/GoogleLoginButton';
import KakaoLoginButton from '@/components/user/KakaoLoginButton';
import LoginButton from '@/components/user/LoginButton';
import PasswordInput from '@/components/user/PasswordInput';
import * as S from '@/styles/user/LoginPage.style';

interface FormValues {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('올바른 이메일을 입력해주세요.').required('이메일은 필수 항목입니다.'),
    password: Yup.string().required('비밀번호는 필수 항목입니다.'),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: FormValues, actions: any) => {
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <>
      <S.Background>
        <S.LoginContainer>
          <S.Header>
            <img src="/logo.svg" alt="Logo" />
            <Text>Past Forward</Text>
          </S.Header>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
              <S.LoginBody>
                <Text>로그인 하기</Text>
                <Field name="email" as={EmailInput} />
                <ErrorMessage name="email" component="div" />
                <Field name="password" as={PasswordInput} />
                <ErrorMessage name="password" component="div" />
              </S.LoginBody>

              <S.SocialLoginBody>
                <Text>소셜 로그인 하기</Text>
                <KakaoLoginButton />
                <GoogleLoginButton />
                <LoginButton />
              </S.SocialLoginBody>

              <S.Footer>
                <Text>
                  계정이 없으신가요?{' '}
                  <Link color="teal.500" href="/register">
                    무료 가입
                  </Link>
                </Text>
              </S.Footer>
            </Form>
          </Formik>
        </S.LoginContainer>
      </S.Background>
    </>
  );
};

export default LoginPage;
