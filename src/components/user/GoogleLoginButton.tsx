import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Button } from '@chakra-ui/react';

const GoogleLoginButton: React.FC = () => {
  return (
    <>
      <Button colorScheme="gray" leftIcon={<FaGoogle />} width="full">
        구글로 로그인
      </Button>
    </>
  );
};

export default GoogleLoginButton;
