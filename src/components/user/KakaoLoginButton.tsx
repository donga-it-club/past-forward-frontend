import React from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { Button } from '@chakra-ui/react';

const KakaoLoginButton: React.FC = () => {
  return (
    <>
      <Button colorScheme="yellow" leftIcon={<RiKakaoTalkFill />} width="full">
        카카오로 로그인
      </Button>
    </>
  );
};

export default KakaoLoginButton;
