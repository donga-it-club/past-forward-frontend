import React from 'react';
import { Input, FormControl, FormLabel } from '@chakra-ui/react';

const EmailInput: React.FC = () => {
  return (
    <FormControl isRequired>
      <FormLabel>이메일</FormLabel>
      <Input type="email" placeholder="이메일을 입력해주세요." />
    </FormControl>
  );
};

export default EmailInput;
