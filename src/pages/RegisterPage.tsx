import React from 'react';
import { Button, Text, Link } from '@chakra-ui/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailInput from '@/components/user/EmailInput';
// import EmailForm from '@/components/user/EmailForm';
import GoogleLoginButton from '@/components/user/GoogleLoginButton';
import KakaoLoginButton from '@/components/user/KakaoLoginButton';
import * as S from '@/styles/user/RegisterPage.style';

interface FormValues {
  email: string;
}

const RegisterPage: React.FC = () => {
  const initialValues: FormValues = {
    email: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('올바른 이메일을 입력해주세요.').required('이메일은 필수 항목입니다.'),
  });

  const handleSubmit = (values: FormValues, actions: any) => {
    console.log(values);
    actions.setSubmitting(false);
  };
  return (
    <>
      <S.Background>
        <S.LoginContainer>
          <S.Header>
            <img src="/logo.svg" />
            <Text>Past Forward</Text>
          </S.Header>

          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form>
              <S.LoginBody>
                <Text>로그인 하기</Text>
                <Field name="email" as={EmailInput} />
                <ErrorMessage name="email" component="div" />
                <Button colorScheme="brand" width="full" type="submit">
                  다음
                </Button>
              </S.LoginBody>
              <S.Divider text="또는" />

              <S.SocialLoginBody>
                <Text>소셜 로그인 하기</Text>
                <KakaoLoginButton />
                <GoogleLoginButton />
              </S.SocialLoginBody>

              <S.Footer>
                <Text>
                  이미 계정이 있으신가요?{' '}
                  <Link color="teal.500" href="/login">
                    로그인 페이지로 이동
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

export default RegisterPage;
