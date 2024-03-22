import React, { useState } from 'react';
import { Input, InputGroup, InputRightElement, Button, FormControl, FormLabel } from '@chakra-ui/react';

const PasswordInput: React.FC = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl isRequired>
      <FormLabel>비밀번호</FormLabel>
      <InputGroup size="md">
        <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="비밀번호를 입력해주세요." />
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
