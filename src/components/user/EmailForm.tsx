import React from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import EmailInput from '@/components/user/EmailInput';

const EmailForm = () => {
  return (
    <Formik
      initialValues={{ email: '' }}
      validate={(values: { email: string }) => {
        const errors: { email?: string } = {};
        if (!values.email) {
          errors.email = '이메일은 필수입니다.';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = '유효한 이메일 주소를 입력하세요.';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Text>이메일 입력하기</Text>
          <Field as={EmailInput} type="email" name="email" placeholder="이메일" />
          <Button colorScheme="brand" width="full" type="submit" disabled={isSubmitting}>
            다음
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EmailForm;
