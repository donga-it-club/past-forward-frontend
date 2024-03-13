import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Eye, EyeSlash } from 'react-bootstrap-icons';

const PasswordInput = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div style={{ width: '60%' }}>
      <InputGroup size="md">
        <Input pr="4.5rem" type={show ? 'text' : 'password'} placeholder="비밀번호를 입력하세요 " />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? <EyeSlash /> : <Eye />}
          </Button>
        </InputRightElement>
      </InputGroup>
    </div>
  );
};

export default PasswordInput;
