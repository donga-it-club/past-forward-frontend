import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { FieldProps } from 'formik';

const EmailInput: React.FC<FieldProps<string>> = ({ field }) => {
  return (
    <FormControl>
      <FormLabel htmlFor="email">이메일</FormLabel>
      <Input {...field} id="email" type="email" placeholder="이메일을 입력해주세요." />
    </FormControl>
  );
};

export default EmailInput;
