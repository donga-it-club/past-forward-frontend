import React from 'react';
import { FormControl, FormLabel, Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react';
import { FieldProps } from 'formik';

const PasswordInput: React.FC<FieldProps<string>> = ({ field }) => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel htmlFor="password">비밀번호</FormLabel>
      <InputGroup size="md">
        <Input
          {...field}
          id="password"
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="비밀번호를 입력해주세요."
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
  );
};

export default PasswordInput;
